from keras.models import load_model

def c():
    gen = load_model('../KerasDj/CNNnet/gen_100.h5')
    print(gen)

if __name__ == '__main__':
    c()