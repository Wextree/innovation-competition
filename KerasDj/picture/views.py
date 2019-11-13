from django.shortcuts import render
from django.http import HttpResponse
import json
from io import BytesIO
import base64
# Create your views here.
import keras as k
from keras.models import load_model
import numpy as np
from PIL import Image
# from .models import CNNnet


def index(request):

	return render(request, 'index.html')

def pic(request):
	k.backend.clear_session()
	content = request.GET['content']
	print("一下为输出：")
	print(type(content), content)
	print("一下为转化后：")
	content_z = json.loads(content)
	print(type(content_z), content_z)
	color = content_z["color12"]
	label = content_z["scope"]
	print(color, label)

	gen = load_model('KerasDj/CNNnet/gen_100.h5')

	color = color.split(',')
	color_ar = []
	for i in color:
		color_ar.append(float(i))
	color = color_ar
	if len(color) < 12:
		for i in range(12-len(color)):
			color.append(0.0)
	print(color)

	noise = np.random.uniform(-1, 1, (1, 64))

	# input the label and color
	label = np.array([label])
	color = np.array([color], dtype='float64')
	print(label, color)
	print(type(label), type(color))
	print(color.shape)

	# input param to neural network to get result
	generated_images = gen.predict(
		[noise, color, label.reshape((-1, 1))], verbose=0)
	img = (generated_images[0] * 127.5 + 127.5).astype(np.uint8)
	img = Image.fromarray(img)
	img.save("1.jpg")
	f = BytesIO()
	img.save(f, 'jpeg')
	result = f.getvalue()
	result = base64.b64encode(result).decode()

	return HttpResponse(result, content_type='image/jpeg')

	# return HttpResponse("Succeed!！！")
