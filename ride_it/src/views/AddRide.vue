<template>
  <div id="registerBlock" class="w-100 h-100 justify-content-center">
    <div class="col"></div>
    <div class="col">
      <div id="formContainer" class="panel row m-5">
        <div class="col">
          <div class="row justify-content-center" id="title">Add new ride</div>
          <div class="row">
            <div class="col">
              <MyInputWithIcon
                class="mt-3"
                v-bind:iconSrc="require('../assets/mapPlace.svg')"
                name="From"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyInputWithIcon from '../components/MyInputWithIcon.vue'
/* eslint-disable space-before-function-paren */

export default {
  name: 'Register',
  components: { MyInputWithIcon }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#title {
  font-size: 1.5em;
  font-weight: bold;
}

#registerBlock {
  background-image: url('../assets/drivingBg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
}
.myButton {
  font-weight: bold;
}
</style>
