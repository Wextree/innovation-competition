<template>
  <div id="body">
    <!-- 输入框-->
    <div id = 'input-holder'>
      <div id = 'input-box'>
        <!-- <div id = 'background'></div> -->
        <inputArea id='input-comp' @submit = 'handleSubmit'></inputArea>
      </div>
      <p id='foot'>GDUT研发中心</p>
    </div>
   <!--图片显示框-->
    <div id = 'img-holder'>
        <imgDisplayer id='img-box' :imgs='imgs' :selected = 'selected' @select-img ='select_img'></imgDisplayer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import inputArea from './inputArea'
import imgDisplayer from './imgDisplayer'
axios.defaults.baseURL = 'http://' + document.domain + ':8000'

export default {
  name: 'homeBody',
  data: function () {
    return {
      imgs: [],
      selected: 0
    }
  },
  components: {
    inputArea,
    imgDisplayer,
  },
  mounted: function () {
    var basePath = '../../static/images/'
    var format = '.png'
    var fileName = ['mio']
    for (let name of fileName) {
      this.imgs.push(basePath + name + format)
    }
  },
  methods:{
    select_img(index){
      console.log("slect " + index)
      this.selected = index
    },
    scroll_left(){
      var div = document.getElementById('small-img-holder')
      setTimeout(function(){
        div.scrollLeft = div.scrollWidth
      }, 50)
    },
    insert_img(url){
      console.log(url)
      this.imgs.push(url)
      this.selected = this.imgs.length-1
      this.scroll_left()
    },
    handleSubmit: function (data) {
      const datajson = JSON.stringify(data)
      console.log(axios.defaults.baseURL)
      axios.get('/picture/pic', {
        params: {
          content: datajson
        }
      }).then(this.handleReturn)
    },
    handleReturn (res) {
      var img =  'data:image/jpeg;base64,' + res.data
      this.insert_img(img)
    }
  }
}
</script>

<style>
#body {
  position: relative;
  top: 2rem;
  border: 2px solid greenyellow;
  height: 720px;
  width: 1280px; 
  max-width: 90%;
  max-height: 90%;
  margin-left: 50%;
  transform: translate(-50%, 0); 
}

#input-holder {
  overflow: auto;
  width: 30%;
  height: 100%;
  max-height: 100%;
  float: left;
  display: flex;
  align-items: center;
  background-color: #3bb4f1;
  background-image: url('../../static/images//bg.png');
  background-repeat: no-repeat;
}

#img-holder {
  float: right;
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  background-color: white;
}

#img-box {
  width: 100%;
  max-height: 80%;
  overflow: auto;
}

#foot {
  position: absolute;
  bottom: -1rem;
  left: 4rem;
  height: 1rem;
}
</style>
