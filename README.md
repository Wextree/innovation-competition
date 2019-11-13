# innovation-competition
In summer vacation I made our projects for competition



## kerasdj

这是一个图像生成的项目

里面用的是神经网络生成

输入是color和label

输出一张图片



## 输入参数和输出处理

输入：

- lable（1~64）：np.int

- color ：12位0101组合，即：（0.，1.，.....），np.array

输出：

一个image对象，通过base64转化之后传给前端



## issues

- Django 和 Vue 两个框架之间的连接问题：

  设置好两个框架之间的数据接收函数，然后将Vue打包成dist文件，通过里面的index.html作为入口调用

  一开始可以先不打包直接同时打开两个服务器，已经可以互相传输数据了，但是前端 框架的监听要做好

- 服务器其他主机无法登陆问题：

  设置前端的urlbase为自己搭建服务器主机的IPV4地址，而不是单纯的localhost。

  在后台框架中settings添加：ALLOWED_HOSTS = ['*']

  然后在Django服务器运行时加上：runserver 0.0.0.0:8000默认可被所有监听

- 服务器只允许第一台主机调用，其他主机调用时导致传入参数变化而错误，从而导致500错误（服务器错误）：由于模型调用之后要及时清除会话，不然会妨碍其他主机的调用。

  在view中对应的调用函数上加入清除会话操作：keras.backend.clear_session()

  