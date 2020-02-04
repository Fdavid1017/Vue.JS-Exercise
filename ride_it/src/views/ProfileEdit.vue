<template>
  <div id="edit" class="row h-100 w-100 justify-content-center">
    <div class="col-5 panel w-auto my-auto">
      <div class="row justify-content-center">
        <ProfilePictureUpload />
        <div class="row mt-3">
          <MyInput
            class="mr-5"
            type="text"
            name="First Name"
            v-bind:hasError="errors.includes('firstNameError')"
            v-model="user.firstName"
          />
          <MyInput
            type="text"
            name="Second Name"
            v-bind:hasError="errors.includes('secondNameError')"
            v-model="user.secondName"
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
            v-model="user.password"
          />
          <MyInput
            type="password"
            name="Password Again"
            v-bind:hasError="
              errors.includes('passwordAgainError') ||
                errors.includes('passwordsNotMachingError')
            "
            v-model="user.passwordAgain"
          />
        </div>
        <div class="row mt-3">
          <MyInput
            class="mr-5"
            type="email"
            name="Email"
            v-bind:hasError="errors.includes('emailError')"
            v-model="user.email"
          />
          <div id="terms" class="col">
            <MyInput
              type="password"
              name="Current Password"
              v-bind:hasError="errors.includes('currentPasswordError')"
              v-model="user.currentPassword"
            />
          </div>
        </div>
        <div class="row mt-3 justify-content-center">
          <a v-on:click="edit()" class="myButton">
            Edit
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import ProfilePictureUpload from '../components/Register/ProfilePictureUpload.vue'
import MyInput from '../components/MyInput.vue'
import { getCurrentUser } from '@/functions/GetCurrentUser.js'

export default {
  components: { ProfilePictureUpload, MyInput },

  data: function() {
    return {
      currentUser: getCurrentUser(this.$store),
      user: {
        firstName: this.currentUser.firstName,
        secondName: this.currentUser.secondName,
        password: '',
        passwordAgain: '',
        currentPassword: '',
        email: this.currentUser.email,
        profilePicture: this.currentUser.profilePicture
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#edit {
  background: rgb(252, 252, 4);
  background: -moz-radial-gradient(
    circle,
    rgba(252, 252, 4, 1) 25%,
    rgba(250, 164, 7, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(252, 252, 4, 1) 25%,
    rgba(250, 164, 7, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(252, 252, 4, 1) 25%,
    rgba(250, 164, 7, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fcfc04",endColorstr="#faa407",GradientType=1);

  #profilePicture {
    width: 100px;
    height: 100px;
  }

  #name {
    font-weight: bold;
    font-size: 1.5em;
  }
}
</style>
