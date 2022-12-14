# apps/imghub/posts/admin.py
from django.contrib import admin

# from django.contrib import models

from .models import Post

admin.site.register(Post)
