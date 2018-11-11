from django.shortcuts import render
from django.views import View
from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict
from user.decorators import isSignedUser
from django.contrib.auth.models import User
from . import models
import json
import jwt


class Post(View):
    def get(self, request):
        if isSignedUser(request):
            posts = models.Post.objects.all()
            results = []
            for post in posts:
                results.append(model_to_dict(post))
            return JsonResponse(results, safe=False)
        else:
            return HttpResponse(status = 403)
    @isSignedUser
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
        post = int(body['post'])
        token = request.META.get('HTTP_AUTHORIZATION').replace('Bearer ', '')
        postObj = models.Post.objects.get(pk = post)
        userInfo = jwt.decode(token, 'MySiteSecret', algorithm='HS256')
        user = User.objects.get(username = userInfo['id'])
        try:
            newComment = models.Comment(reply=comment, post_id=post,replier=user)
            newComment.save()
            return HttpResponse(newComment.pk, status=200)
        except Exception as e:
            print(e)
            return HttpResponse(status=500)
# Create your views here.
