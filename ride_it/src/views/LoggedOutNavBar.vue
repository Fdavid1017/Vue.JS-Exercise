<template>
  <div id="nav" class="row w-100 align-items-center">
    <Logo />
    <div class="col ">
      <div class="row d-flex justify-content-end mr-5">
        <div class="col-1 mr-4">
          <router-link to="/Login">Login</router-link>
        </div>
        <div class="col-1">
          <router-link to="/Register"
            ><span class="myButton">Register</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/NavBar/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';
#nav {
  margin: 0;
  padding: 0;

  a {
    height: 50px;
    color: $textColor;
    overflow: hidden;
    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
