from django.shortcuts import render
from django.views import View
import json
from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict
from .import models

class Post(View):
    def get(self, request):
        posts =models.Post.objects.all()
        results = []
        for post in posts:
            results.append(model_to_dict(post))
        return JsonResponse(results, safe=False)
    def post(self, request):
        body = json.loads(request.body)
        text = body['text']
        try:
            newPost = models.Post(text=text)
            newPost.save()
            return HttpResponse(newPost.pk, status=200)
        except Exception as e:
            return HttpResponse(status=500)
    def delete(self, request):
        ID = request.GET.get('id',None)
        DeletePost = models.Post.objects.get(pk=ID)
        idx = DeletePost.pk
        DeletePost.delete()
        return HttpResponse(idx)
# Create your views here.
