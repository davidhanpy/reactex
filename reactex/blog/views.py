from django.shortcuts import render
from django.views import View
from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict
from user.decorators import isSignedUser
from . import models
import json


class Post(View):
    @isSignedUser
    def get(self, request):
        if isSignedUser(request):
            posts = models.Post.objects.all()
            results = []
            for post in posts:
                results.append(model_to_dict(post))
            return JsonResponse(results, safe=False)
        else:
            return HttpResponse(status = 403)
    # @isSignedUser
    def post(self, request):
        body = json.loads(request.body)
        text = body['text']
        try:
            newPost = models.Post(text=text)
            newPost.save()
            return HttpResponse(newPost.pk, status=200)
        except Exception as e:
            return HttpResponse(status=500)

    @isSignedUser
    def delete(self, request):
        ID = request.GET.get('id',None)
        DeletePost = models.Post.objects.get(pk=ID)
        idx = DeletePost.pk
        DeletePost.delete()
        return HttpResponse(idx)

class Comment(View):
    @isSignedUser
    def get(self, request):
        if isSignedUser(request):
            comments = models.Comment.objects.all()
            results = []
            for comment in comments:
                results.append(model_to_dict(comment))
            return JsonResponse(results, safe=False)
        else:
            return HttpResponse(status = 403)

    @isSignedUser
    def post(self, request):
        body = json.loads(request.body)
        comment = body['comment']
        try:
            newComment = models.Comment(reply=comment,post='',replier='')
            newComment.save()
            return HttpResponse(newComment.pk, status=200)
        except Exception as e:
            return HttpResponse(status=500)
# Create your views here.
