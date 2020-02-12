<template>
  <div id="registerBlock" class="w-100 justify-content-center">
    <div id="formContainer" class="panel row m-5">
      <div class="col">
        <ProfilePictureUpload />
        <div class="row mt-3">
          <MyInput
            class="mr-5"
            type="text"
            name="First Name"
            v-bind:hasError="errors.includes('firstNameError')"
            v-model="account.firstName"
          />
          <MyInput
            type="text"
            name="Second Name"
            v-bind:hasError="errors.includes('secondNameError')"
            v-model="account.secondName"
          />
        </div>
        <div class="row mt-3">
          <MyInput
            class="mr-5"
            type="password"
            name="Password"
            v-bind:hasError="
              errors.includes('passwordError') ||
                errors.includes('passwordsNotMachingError')
            "
            v-model="account.password"
          />
          <MyInput
            type="password"
            name="Password Again"
            v-bind:hasError="
              errors.includes('passwordAgainError') ||
                errors.includes('passwordsNotMachingError')
            "
            v-model="account.passwordAgain"
          />
        </div>
        <div class="row mt-3">
          <MyInput
            class="mr-5"
            type="email"
            name="Email"
            v-bind:hasError="errors.includes('emailError')"
            v-model="account.email"
          />
          <div id="terms" class="col">
            By signing up, you confirm that you've read and accepted our Terms
            of Service and Privacy Policy.
          </div>
        </div>
        <div class="row mt-3 justify-content-center">
          <a v-on:click="register()" class="myButton">
            Register
          </a>
        </div>
        <div class="row mt-3 justify-content-center registered">
          Already have an account?
        </div>
        <router-link class="row justify-content-center registered" to="/Login"
          >Sign in</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import MyInput from '../components/MyInput.vue'
import ProfilePictureUpload from '../components/Register/ProfilePictureUpload.vue'
import { register } from '@/functions/Register.js'

export default {
  name: 'Register',
  data: function() {
    return {
      account: {
        firstName: '',
        secondName: '',
        password: '',
        passwordAgain: '',
        email: '',
        profilePicture: ''
      },
      errors: []
    }
  },
  components: { ProfilePictureUpload, MyInput },
  methods: {
    register: function() {
      this.errors = register(this.account)

      if (this.errors.length === 0) {
        this.$router.push('Login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#registerBlock {
  background-image: url('../assets/city.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
}

#terms {
  width: 350px;
  color: $lightTextColor;
  font-size: 15px;
  line-height: 21px;
  align-items: center;
  text-align: center;
}

.registered {
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

.myButton {
  font-weight: bold;
}
</style>
