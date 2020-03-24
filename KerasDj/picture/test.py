from PIL import Image

img = Image.open("E:/git/1.jpg")
print(img.size)
img = img.resize((423, 270))
print(img.size)