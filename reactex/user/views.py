from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate
from django.shortcuts import render
from django.forms.models import model_to_dict
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.views import View
import jwt
import json

class signupnew(View):
    def post(self, request):
        body = json.loads(request.body)
        ID = body['id']
        EMAIL = body['email']
        PW = body['pw']
        try:
            newUser = User.objects.create_user(ID, EMAIL, PW)
            newUser.save()
            return HttpResponse(status=200)
        except Exception as e:
            return HttpResponse(status=500)

class signin(View):
    def post(self, request):
        body = json.loads(request.body)
        ID = body['id']
        PW = body['pw']
        user = authenticate(request, username=ID, password=PW)
        if user is not None:
            encoded = jwt.encode(
                {'id':user.username, 'email':user.email},
                'MySiteSecret', algorithm='HS256')
            return HttpResponse(encoded, status=200)
        else:
            return HttpResponse(status=404)
# Create your views here.
