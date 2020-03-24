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
import datetime
import os
from picture.models import Picture


def index(request):
	for name in os.listdir('./picture/pic'):
		os.remove('./picture/pic/' + name)
	return render(request, 'index.html')

def pic(request):
	start_time = datetime.datetime.now()
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
	picture = Picture()
	picture.color = color
	picture.label = label
	picture.save()

	start_load_time = datetime.datetime.now()
	gen = load_model('KerasDj/CNNnet/gen_100.h5')
	print("这是gen：")
	print(gen)
	end_load_time = datetime.datetime.now()

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

	net_start_time = datetime.datetime.now()
	# input param to neural network to get result
	generated_images = gen.predict(
		[noise, color, label.reshape((-1, 1))], verbose=0)
	img = (generated_images[0] * 127.5 + 127.5).astype(np.uint8)
	img = Image.fromarray(img)
	net_end_time = datetime.datetime.now()
	nowtime = str(datetime.datetime.now())
	pic_name = './picture/pic/' + nowtime[-6:] + '.jpg'
	img.save(pic_name)
	print(type(img))
	print(img.size)
	# 压缩图像
	print("resize后：")
	img = img.resize((16, 16))
	print(img.size)
	f = BytesIO()
	img.save(f, 'jpeg')
	result = f.getvalue()
	result = base64.b64encode(result).decode()
	save_time = datetime.datetime.now()

	print("总时间：" + str((save_time-start_time).microseconds) + "ms")
	print("加载网络时间：" + str((end_load_time-start_load_time).microseconds) + "ms")
	print("生成网络时间：" + str((net_end_time-net_start_time).microseconds) + "ms")
	print("保存图片时间：" + str((save_time-net_end_time).microseconds) + "ms")

	return HttpResponse(result, content_type='image/jpeg')

	# return HttpResponse("Succeed!！！")
