<template>
  <div id="app" class="h-100 w-100">
    <NavBar />
    <router-view />
  </div>
</template>

<!--
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
-->

<script>
import NavBar from '@/views/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
