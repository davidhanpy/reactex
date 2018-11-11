from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from user import models as userModels
import jwt 

def isSignedUser(originlFunction):
    def newFunction(self, request):
        try:
            token = request.META.get('HTTP_AUTHORIZATION','').replace('Bearer ', '')
            userInfo = jwt.decode(token, 'MySiteSecret', algorithm='HS256')
            user = User.objects.get(username = userInfo['id'])
            valid_token = userModels.Token.objects.get(user = user)
            return originlFunction(self, request)
        except:
            return HttpResponse(status=403)
    return newFunction