<template>
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
</template>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

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
</style>
