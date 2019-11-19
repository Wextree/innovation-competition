<template>
  <div
    class="img-wrapper"
    v-show="img"
  >
    <h1 class="img-title">Result</h1>
    <img class="img-item" :src='img' />
  </div>
</template>

<script>
export default {
  name: 'HomeResult',
  props: {
    img: String
  }
}
</script>

<style lang="stylus" scoped>
  .img-wrapper
    text-align: center
    .img-title
      color: white
      .img-item
        margin: 20px auto
        width: 32px
        height: 32px
</style>
