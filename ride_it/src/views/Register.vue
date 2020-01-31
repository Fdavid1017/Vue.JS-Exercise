<template>
  <div id="registerBlock" class="m-0 p-0 h-100 w-100 justify-content-center">
    <div class="row w-50 justify-content-center">
      <div class="panel m-0 row justify-content-center">
        <ProfilePictureUpload />
        <div class="row w-100"></div>
        <div class="row mt-2">
          <div class="col">
            <MyInput type="text" name="First name" />
          </div>
          <div class="col">
            <MyInput type="text" name="Second name" />
          </div>
        </div>
        <div class="row w-100"></div>
        <div class="row mt-2">
          <div class="col">
            <MyInput type="password" name="Password" />
          </div>
          <div class="col">
            <MyInput type="password" name="Password again" />
          </div>
        </div>
        <div class="row w-100"></div>
        <div class="row mt-2">
          <div class="col">
            <MyInput type="email" name="E-mail" />
          </div>
          <div class="col" id="termsText">
            By signing up, you confirm that you've read and accepted our Terms
            of Service and Privacy Policy.
          </div>
        </div>
        <div class="row w-100"></div>
        <div class="row mt-2">
          <button class="myButton">Register</button>
        </div>
        <div class="row w-100"></div>
        <div class="row mt-2">
          Already have an account?
          <span><router-link to="/Login">Sign in</router-link></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput.vue'
import ProfilePictureUpload from '@/components/Register/ProfilePictureUpload.vue'
export default {
  name: 'Register',
  components: {
    MyInput,
    ProfilePictureUpload
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
}

#termsText {
  font-size: 17px;
  line-height: 20px;
  align-items: center;
  text-align: center;

  color: $lightTextColor;
}

span {
  text-decoration: underline;
  a {
    color: $lightTextColor !important;
  }
}
</style>
