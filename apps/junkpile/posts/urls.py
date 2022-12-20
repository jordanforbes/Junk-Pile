# posts/urls.py

from django.urls import path

from .views import HomePageView

urlpatterns = [
    path('', HomePageView.as_view(), name = 'home'),
    # path('posts/', HomePageView.as_view(), name='posts')
]
