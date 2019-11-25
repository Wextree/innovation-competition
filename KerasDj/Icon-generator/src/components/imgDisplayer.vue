<template>
<div id="imgComponent">
  <!-- 大图显示 -->
    <!-- 上一个 -->
    <div id="large-img-holder">
      <img class="large-img" :src="imgs[selected]">
    </div>
    <!-- 下一个 -->
  <div>
    <!-- 缩略图展示 -->
    <div id="small-img-holder">
      <img v-for="(img,index) in imgs"
        :class="{ active:selected===index, 'small-img':true }"
        :key="index"
        :src="img"
        @mousedown ="$emit('select-img', index)"
        >
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    imgs: Array,
    selected: Number
  },
  name: 'imgDisplayer',
  data: function () {
    return {
    }
  },
  methods: {
    previousImg () {
      this.selected = this.selected === 0 ? 0 : this.selected - 1
    },
    nextImg () {
      this.selected = this.selected === this.imgs.length - 1 ? this.imgs.length - 1 : this.selected + 1
    }
  },
  computed: {
  }
}
</script>

<style>
#imgComponent {
  overflow: auto;
  width: 100%;
  height: 100%;
}
.active {
  border: 2px solid rgb(49, 152, 248);
}
.small-img {
  margin-left: 10px;
  /* max-width: 19.5%; */
  min-width: 64px;
  height: 64px;
  width: 64px;
  /* width: 32px;
  height: 32px; */
}
.large-img {
  width: 30rem;
  height: 30rem;
  max-height: 100%;
  max-width: 100%;
  /* height: auto; */
  margin: 0;
}
#large-img-holder {
  max-width: 90%;
  max-height: 60%;
  width: 320px;
  height: 320px;
  margin: 0 auto;
}
#small-img-holder {
  /* flex-wrap: wrap; */
  display: flex;
  padding-bottom: 15px;
  margin: 2rem 0 auto;
  height: 70px;
  width: 576px;
  max-width: 90%;
  overflow-x: auto;
  overflow-y: hidden;
  border-left: 15px solid rgb(220, 220, 220);
  border-right: 20px solid rgb(220, 220, 220);
  background: rgb(220 , 220, 220);
  margin-left: 50%;
  transform: translate(-50%,0);
  /* border: 1.5px solid black; */
}
#pre,#next {
  margin:0;
  width: 128px;
  max-width: 22%;
}
</style>
