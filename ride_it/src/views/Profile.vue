<template>
  <div id="profile" class="row h-100 w-100 justify-content-center">
    <div class="col-5 panel w-auto my-auto">
      <div class="row justify-content-center">
        <div class="row w-100 justify-content-center">
          <img
            id="profilePicture"
            src="@/assets/profilePictureIcon.svg"
            alt="Profile Picture"
          />
        </div>
        <div id="name" class="row w-100 justify-content-center mt-2">
          {{ user.firstName + ' ' + user.secondName }}
        </div>
        <div class="row w-100 justify-content-center mt-2">
          {{ user.email }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { getCurrentUser } from '@/functions/GetCurrentUser.js'

export default {
  data: function() {
    return {
      user: {
        firstName: '',
        secondName: '',
        email: ''
      }
    }
  },

  created: async function() {
    this.user = await getCurrentUser(this.$store.getters.loggedInUser)
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#profile {
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
