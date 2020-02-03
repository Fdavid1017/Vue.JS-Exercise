<template>
  <div id="nav" class="row w-100 align-items-center">
    <Logo />
    <div class="col ">
      <div class="row d-flex align-items-center justify-content-end mr-5">
        <div class="col-3 m-0 p-0 mr-4 item">
          <router-link to="/SearchRide">Search for ride</router-link>
        </div>
        <div class="col-3 m-0 p-0 mr-4 item">
          <router-link to="/AddRide">Add new ride </router-link>
        </div>
        <DropDown />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/NavBar/Logo.vue'
import DropDown from '@/components/NavBar/DropDown.vue'

export default {
  components: {
    Logo,
    DropDown
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
