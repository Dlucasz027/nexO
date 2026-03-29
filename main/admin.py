from django.contrib import admin
from .models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    
    list_display = (
        'title',
        'company',
        'created_by',
        'created_at',
        'image_preview',
    )

    list_filter = (
        'company',
        'created_by',
        'created_at',
    )

    search_fields = (
        'title',
        'description',
        'company',
    )

    ordering = ('-created_at',)

    fieldsets = (
        ('Informações do Curso', {
            'fields': (
                'title',
                'description',
                'company',
                'url',
                'image',
            )
        }),
        ('Relacionamento', {
            'fields': (
                'created_by',
            )
        }),
    )

    readonly_fields = ('created_at',)

    def image_preview(self, obj):
        if obj.image:
            return obj.image.url
        return "-"

    image_preview.short_description = 'Image'