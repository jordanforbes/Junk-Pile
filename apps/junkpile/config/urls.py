#junkpile/config/urls.py

from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from posts.views import PostPageView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts/', PostPageView.as_view(), name='posts'),
    path('', include('posts.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
