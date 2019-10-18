from django.db import models

# Create your models here.
from keras.models import load_model
import numpy as np
from PIL import Image
# import matplotlib.pyplot as plt
from django.db import models



"""
@ when create CNNnet object ,you should input 2 param:
label(int 0~63)
color(str with 12 num as 0/1,and split by',')eg:'0,0,0,0,0,1,0,1,0,1,0,0'
"""
class CNNnet(models.Model):
    # get 2 input when create object of the class
    # able to set limit with the parameter of CNN net
    #color = models.CharField(max_length=12)
    label = models.IntegerField()
    color = models.CharField(max_length=12)