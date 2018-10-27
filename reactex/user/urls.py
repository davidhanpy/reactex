from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('signup/', csrf_exempt(views.signupnew.as_view()), name='signup'),
    path('login/', csrf_exempt(views.signin.as_view()), name='login'),
]