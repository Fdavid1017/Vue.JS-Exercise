<template>
  <div id="app">
    <div id="nav" class="d-inline-block">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/carLogoWhite.svg" alt="logo"
        /></router-link>
      </div>
      <div><router-link to="/Login">Login</router-link></div>
      <div><router-link to="/Register">Register</router-link></div>
    </div>
    <router-view />
  </div>
</template>

<!--
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
-->

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #0080ff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
