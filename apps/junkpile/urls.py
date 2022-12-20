#junkpile/urls.py
from django.contrib import admin
from django.urls import path, include
from posts.views import PostPageView
from posts import urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts/', include(urls)),
    path('', include('junkpile.core.urls'))
]
