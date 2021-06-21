from django.db import models

# Create your models here.


class Post(models.Model):
    #TODO autoincrementing id's aren't good, implement better identification
    content = models.CharField(max_length=1000)
    
    def __str__(self):
        return self.content
