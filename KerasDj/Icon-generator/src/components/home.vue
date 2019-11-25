<template>
  <div id = 'home'>
      <homeBody></homeBody>
  </div>
</template>

<script>
import homeBody from './body'
export default {
  name: 'home',
  components: {
    homeBody
  }
}
</script>

<style>
#home {
  height: 100%;
  width: 100%;
}


</style>
