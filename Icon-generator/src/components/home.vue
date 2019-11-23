<template>
  <div>
    <homeNav></homeNav>
    <homeBody></homeBody>
    <homeFooter></homeFooter>
  </div>
</template>

<script>
import homeNav from './nav'
import myfooter from './footer'
import homeBody from './body'
export default {
  name: 'home',
  components: {
    homeNav,
    homeFooter: myfooter,
    homeBody
  }
}
</script>

<style>
  body,html{
    /* width: 100%;;
    height: 0; */
    background-color: grey;
    margin: 0;
  }
</style>
