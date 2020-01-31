<template>
  <div id="nav" class="row w-100 align-items-center">
    <div class="col logo">
      <div class="row d-flex justify-content-start ml-5">
        <router-link to="/">
          <img class="mr-2" src="@/assets/carLogoBlack.svg" alt="logo" />Ride
          It</router-link
        >
      </div>
    </div>
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

<style lang="scss">
@import '@/scss/variables.scss';
#nav {
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
