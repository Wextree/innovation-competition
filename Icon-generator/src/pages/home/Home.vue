<template>
  <div>
    <home-background></home-background>
    <home-title></home-title>
    <home-input
      @submit="handleSubmit"
    ></home-input>
    <home-result
      :img="img"
    ></home-result>
  </div>
</template>

<script>
import axios from 'axios'
import HomeBackground from './components/Background'
import HomeTitle from './components/Title'
import HomeInput from './components/Input'
import HomeResult from './components/Result'
axios.defaults.baseURL = 'http://'+document.domain+':8000'
export default {
  name: 'Home',
  data () {
    return {
      img: ''
    }
  },
  components: {
    HomeBackground,
    HomeTitle,
    HomeInput,
    HomeResult
  },
  methods: {
    handleSubmit: function (data) {
      const datajson = JSON.stringify(data)
      axios.get('/picture/pic', {
        params: {
          content: datajson
        }
      }).then(this.handleReturn)
    },
    handleReturn (res) {
      const re = res.data
      this.img = 'data:image/jpeg;base64,' + re
    }
  }
}
</script>

<style></style>
