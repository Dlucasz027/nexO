import json, os
from django import template
from django.utils.safestring import mark_safe
from django.conf import settings

register = template.Library()

pt_br = json.load(open(os.path.join(settings.BASE_DIR, 'main/lang/pt_br.json'), encoding='utf-8'))
en    = json.load(open(os.path.join(settings.BASE_DIR, 'main/lang/en.json'), encoding='utf-8'))

LANGS = {'pt_br': pt_br, 'en': en}

@register.simple_tag(takes_context=True)
def t_text(context, key, **kwargs):
    request = context.get('request')
    lang = 'pt_br'
    if request:
        lang = request.session.get('lang', 'pt_br')

    translations = LANGS.get(lang, pt_br)
    text = translations.get(key, pt_br.get(key, key))

    if kwargs:
        text = text.format(**kwargs)

    return mark_safe(text)