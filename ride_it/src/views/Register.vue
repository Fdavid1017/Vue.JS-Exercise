<template>
  <div id="registerBlock" class="m-0 p-0 h-100 w-100 row align-items-center">
    <div class="row w-100 m-0 justify-content-center">
      <div class="panel row">
        <ProfilePictureUpload />
        <div class="row">
          <div class="col">
            <MyInput type="text" name="First name" />
          </div>
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
</style>
