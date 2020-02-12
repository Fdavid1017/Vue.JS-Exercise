<template>
  <div id="loginBlock" class="w-100 justify-content-center">
    <div id="formContainer" class="panel row m-5">
      <div class="col">
        <div id="welcomeText" class="row mt-3 justify-content-center">
          Welcome
        </div>
        <div class="row mt-3 justify-content-center">
          <img id="logo" src="@/assets/carLogoBlack.svg" alt="Logo" />
        </div>
        <div
          v-if="errors.includes('noAccountError')"
          id="noAccountText"
          Fclass="row mt-3 justify-content-center"
        >
          Account not found with this email and password coombination!
        </div>
        <div class="row mt-3 justify-content-center">
          <MyInput
            type="email"
            name="Email"
            v-bind:hasError="errors.includes('emailError')"
            v-model="user.email"
          />
        </div>
        <div class="row mt-3 justify-content-center">
          <MyInput
            type="password"
            name="Password"
            v-bind:hasError="errors.includes('passwordError')"
            v-model="user.password"
          />
        </div>
        <div class="row mt-3 justify-content-center">
          <a v-on:click="login()" class="myButton">
            Login
          </a>
        </div>
        <div class="row mt-3 justify-content-center register">
          Dont have an account yet?
        </div>
        <router-link class="row justify-content-center register" to="/Register"
          >Register</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { login } from '@/functions/Login.js'
import MyInput from '../components/MyInput.vue'

export default {
  components: {
    MyInput
  },
  name: 'Login',
  data: function() {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: []
    }
  },
  methods: {
    login() {
      this.errors = []
      login(this.$store, this.user, this.errors, this.$router)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#noAccountText {
  color: $errorColor;
}

.myButton {
  font-weight: bold;
}

.register {
  color: $lightTextColor;
  font-size: 15px;
  line-height: 21px;
  align-items: center;
  text-align: center;

  a {
    text-decoration: underline !important;
    color: $lightTextColor !important;
  }
}

#welcomeText {
  color: $textColor;
  font-weight: bold;
  font-size: 2em;
}

#logo {
  height: 150px;
}

#loginBlock {
  background-image: url('../assets/city.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
}
</style>
