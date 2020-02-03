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
        <div class="col-1 logo dropdown">
          <img src="@/assets/profileIconBlack.svg" alt="Profile" />
          <div class="dropdownItems ">
            <router-link
              v-if="$store.getters.loggedInUser !== -1"
              class="p-2"
              to="/Profile"
              >Profile</router-link
            >
            <router-link
              v-if="$store.getters.loggedInUser !== -1"
              class="p-2"
              to="/UserRides"
              >My Rides</router-link
            >
            <router-link
              v-if="$store.getters.loggedInUser !== -1"
              class="p-2"
              to="/LogOut"
              >Log Out</router-link
            >
            <router-link
              v-if="$store.getters.loggedInUser === -1"
              class="p-2"
              to="/Login"
              >Login</router-link
            >
            <router-link
              v-if="$store.getters.loggedInUser === -1"
              class="p-2"
              to="/Register"
              >Register</router-link
            >
          </div>
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

  .dropdownItems {
    display: none;
    position: absolute;
    background-color: #f0f0f0;
    min-width: 200px;
    box-shadow: $shadow;
    z-index: 1;

    a {
      float: none;
      color: $textColor;
      text-decoration: none;
      display: block;
      text-align: left;
    }
    a:hover {
      background-color: $highlightColor;
    }
  }

  .dropdown:hover .dropdownItems {
    display: block;
  }

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
