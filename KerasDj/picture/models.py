from django.db import models

# Create your models here.
class Picture(models.Model):
    # the address of audio
    color = models.CharField(max_length=200)
    # the feature of the audio(the best one)
    label = models.CharField(max_length=20)