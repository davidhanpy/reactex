from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views 

urlpatterns = [
    path('post/', csrf_exempt(views.Post.as_view())),
    path('comment/', csrf_exempt(views.Comment.as_view())),
]