<template>
  <div id="registerBlock" class="w-100 justify-content-center">
    <div id="formContainer" class="panel row m-5">
      <div class="col">
        <ProfilePictureUpload />
        <div class="row mt-3">
          <MyInput class="mr-5" type="text" name="First Name" />
          <MyInput type="text" name="Second Name" />
        </div>
        <div class="row mt-3">
          <MyInput class="mr-5" type="password" name="Password" />
          <MyInput type="password" name="Password Again" />
        </div>
        <div class="row mt-3">
          <MyInput class="mr-5" type="email" name="Email" />
          <div id="terms" class="col">
            By signing up, you confirm that you've read and accepted our Terms
            of Service and Privacy Policy.
          </div>
        </div>
        <div class="row mt-3 justify-content-center">
          <div class="myButton">
            Register
          </div>
        </div>
        <div class="row mt-3 justify-content-center registered">
          Already have an account?
        </div>
        <router-link
          class="row justify-content-center registered"
          to="/Login"
          >Sign in</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from '../components/MyInput.vue'
import ProfilePictureUpload from '../components/Register/ProfilePictureUpload.vue'
export default {
  name: 'Register',
  components: { ProfilePictureUpload, MyInput }
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
</style>
