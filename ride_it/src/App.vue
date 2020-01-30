<template>
  <div id="app" class="h-100 w-100">
    <div id="nav" class="row w-100 align-items-center">
      <div class="col logo">
        <div class="row d-flex justify-content-start ml-5">
          <router-link to="/">
            <img src="@/assets/carLogoBlack.svg" alt="logo"
          /></router-link>
        </div>
      </div>
      <div class="col ">
        <div class="row d-flex justify-content-end mr-5">
          <div class="col-1 mr-4">
            <router-link to="/Login">Login</router-link>
          </div>
          <div class="col-1">
            <router-link to="/Register">Register</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<!--
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
-->

<style lang="scss">
@import '@/scss/variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    height: 50px;
    color: $textColor;
    overflow: hidden;
    &.router-link-exact-active {
      color: #42b983;
      font-weight: bold;
    }
  }
}
</style>
