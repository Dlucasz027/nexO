from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Course(models.Model):
    class Category(models.TextChoices):
        PROGRAMMING = 'programming',   'Programação'
        NETWORKS    = 'networks',      'Redes'
        CYBERSEC    = 'cybersecurity', 'Cybersecurity'
        CLOUD       = 'cloud',         'Computação em Nuvem'
        LANGUAGES   = 'languages',     'Idiomas'
        SOFTSKILLS  = 'softskills',    'Soft Skills'

    title = models.CharField(max_length=150)
    description = models.CharField(max_length=1500)
    company = models.CharField(max_length=50)
    url = models.URLField()
    category = models.CharField(max_length=20, choices=Category.choices, default=Category.PROGRAMMING)
    image = models.ImageField(upload_to='main/img/', null=True, blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class SuggestionLog(models.Model):
    """Controla rate limit: 1 envio a cada 8h por IP."""
    ip_address = models.GenericIPAddressField()
    sent_at    = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [models.Index(fields=['ip_address', 'sent_at'])]

    def __str__(self):
        return f'{self.ip_address} — {self.sent_at}'