from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.utils import timezone
from datetime import timedelta
from .email_server import EmailServer, EmailValidationError
from .models import SuggestionLog
from .models import Course


def course_create(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        company = request.POST.get('company')
        url = request.POST.get('url')
        image = request.FILES.get('image')

        Course.objects.create(
            title=title,
            description=description,
            company=company,
            url=url,
            image=image,
            created_by=request.user
        )

        return redirect('course_list')

    return render(request, 'main/course_form.html')


def course_list(request):
    courses = Course.objects.all()
    return render(request, 'main/course_list.html', {'courses': courses})


def course_detail(request, pk):
    course = get_object_or_404(Course, pk=pk)
    return render(request, 'main/course_detail.html', {'course': course})


def course_update(request, pk):
    course = get_object_or_404(Course, pk=pk)

    if request.method == 'POST':
        course.title = request.POST.get('title')
        course.description = request.POST.get('description')
        course.company = request.POST.get('company')
        course.url = request.POST.get('url')

        if request.FILES.get('image'):
            course.image = request.FILES.get('image')

        course.save()
        return redirect('course_detail', pk=course.pk)

    return render(request, 'main/course_form.html', {'course': course})


def course_delete(request, pk):
    course = get_object_or_404(Course, pk=pk)

    if request.method == 'POST':
        course.delete()
        return redirect('course_list')

    return render(request, 'main/course_delete.html', {'course': course})


def change_lang(request):
    if request.method == 'POST':
        lang = request.POST.get('lang', 'pt_br')
        if lang in ['pt_br', 'en']:
            request.session['lang'] = lang
    return redirect(request.META.get('HTTP_REFERER', '/'))


RATE_LIMIT_HOURS = 2

def get_client_ip(request):
    x_forwarded = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded:
        return x_forwarded.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR')

def submit_suggestion(request):
    if request.method != 'POST':
        return JsonResponse({'ok': False}, status=405)

    ip = get_client_ip(request)
    cutoff = timezone.now() - timedelta(hours=RATE_LIMIT_HOURS)

    if SuggestionLog.objects.filter(ip_address=ip, sent_at__gte=cutoff).exists():
        return JsonResponse({
            'ok': False,
            'error': 'rate_limit',
            'message': f'Você já enviou uma sugestão recentemente. Aguarde {RATE_LIMIT_HOURS}h.'
        }, status=429)

    sender  = request.POST.get('email', '').strip()
    subject = request.POST.get('subject', '').strip()
    body    = request.POST.get('message', '').strip()

    server = EmailServer()

    try:
        server.send(sender=sender, subject=subject, body=body)
    except EmailValidationError as e:
        return JsonResponse({'ok': False, 'error': 'validation', 'message': str(e)})
    except Exception as e:
        return JsonResponse({'ok': False, 'error': 'smtp', 'message': 'Falha ao enviar. Tente novamente.'})

    SuggestionLog.objects.create(ip_address=ip)
    return JsonResponse({'ok': True, 'message': 'Sugestão enviada com sucesso!'})