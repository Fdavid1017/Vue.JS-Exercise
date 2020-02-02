<template>
  <div id="registerBlock" class="w-100 h-100 justify-content-center">
    <div class="col"></div>
    <div class="col">
      <div id="formContainer" class="panel row m-5">
        <div class="col">
          <div class="row justify-content-center" id="title">Add new ride</div>
          <div class="row w-100">
            <div class="col">
              <MyInputWithIcon
                class="mt-3"
                type="text"
                v-bind:iconSrc="require('../assets/mapPlace.svg')"
                name="From"
                v-model="ride.from"
              />
            </div>
            <div class="col">
              <MyInputWithIcon
                class="mt-3"
                type="text"
                v-bind:iconSrc="require('../assets/destination.svg')"
                name="To"
                v-model="ride.to"
              />
            </div>
          </div>
          <div class="row w-100">
            <div class="col">
              <MyInputWithIcon
                class="mt-3"
                type="datetime-local"
                v-bind:iconSrc="require('../assets/calendar.svg')"
                name="When"
                v-model="ride.when"
              />
            </div>
            <div class="col">
              <MyInputWithIcon
                class="mt-3"
                type="number"
                v-bind:iconSrc="require('../assets/team.svg')"
                name="Empty Spaces"
                v-model="ride.spaces"
              />
            </div>
          </div>
          <div class="row w-100">
            <div class="col">
              <MyInputWithIcon
                class="mt-3"
                type="text"
                v-bind:iconSrc="require('../assets/car1.svg')"
                name="Car type"
                v-model="ride.car"
              />
            </div>
            <div class="col">
              <MyInputWithIcon
                class="mt-3"
                type="text"
                v-bind:iconSrc="require('../assets/files.svg')"
                name="Description"
                v-model="ride.description"
              />
            </div>
          </div>
          <div class="row w-100 mt-3">
            <div class="col-5 my-auto">
              <router-link to="/">Cancel</router-link>
            </div>
            <div class="col-5 my-auto myButton">Add</div>
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
  components: { MyInputWithIcon },
  data: function() {
    return {
      ride: {
        from: '',
        to: '',
        when: '',
        spaces: '',
        car: '',
        description: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

a {
  color: $lightTextColor;
}

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
