from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
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