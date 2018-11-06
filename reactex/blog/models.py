from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    text = models.TextField()
    author = models.ForeignKey(User,on_delete=models.CASCADE,default='')

    def __str__(self):
        return self.text
        

class Comment(models.Model):
    post = models.ForeignKey(Post,on_delete=models.CASCADE,default='')
    replier = models.ForeignKey(User,on_delete=models.CASCADE,default='')
    reply = models.TextField()

    def __str__(self):
        return self.reply
        

