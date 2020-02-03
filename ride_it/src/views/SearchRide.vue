<template>
  <div id="loginBlock" class="row w-100 h-100 m-0 p-0 justify-content-center">
    <div class="col panel justify-content-center mx-5 p-5">
      <div class="row">
        <div class="row w-100 justify-content-center title">
          Search for a ride
        </div>
        <div class="row w-100 justify-content-center">
          <div class="col justify-content-center">
            <MyInputWithIcon
              class="mt-3"
              type="text"
              v-bind:iconSrc="require('../assets/mapPlace.svg')"
              name="From"
              v-bind:hasError="errors.includes('fromError')"
              v-model="ride.from"
            />
          </div>
          <div class="col">
            <MyInputWithIcon
              class="mt-3"
              type="text"
              v-bind:iconSrc="require('../assets/destination.svg')"
              name="To"
              v-bind:hasError="errors.includes('toError')"
              v-model="ride.to"
            />
          </div>
        </div>
        <div class="row w-100">
          <div class="col">
            <DateTimePicker
              class="mt-3"
              v-bind:iconSrc="require('../assets/calendar.svg')"
              name="Between"
              v-bind:hasError="errors.includes('whenError')"
              v-model="ride.betweenFrom"
            />
          </div>
          <div class="col">
            <DateTimePicker
              class="mt-3"
              v-bind:iconSrc="require('../assets/calendar.svg')"
              name="And"
              v-bind:hasError="errors.includes('whenError')"
              v-model="ride.betweenTill"
            />
          </div>
        </div>
        <div class="row w-100">
          <div class="col">
            <MyCheckBox
              class="mt-3"
              name="Joins Later"
              v-bind:iconSrc="require('../assets/chain.svg')"
              v-model="ride.joinsLater"
            />
          </div>
          <div class="col" v-if="ride.joinsLater">
            <MyInputWithIcon
              class="mt-3"
              type="text"
              v-bind:iconSrc="require('../assets/mapPlace.svg')"
              name="Where"
              v-bind:hasError="errors.includes('whereError')"
              v-model="ride.where"
            />
          </div>
          <div class="col" v-if="!ride.joinsLater"></div>
        </div>
        <div
          id="loginError"
          class="row w-100 mt-3 justify-content-center"
          v-if="errors.includes('notLoggedInError')"
        >
          <div class="col  my-auto">
            <router-link to="/Login">Log in</router-link> to add new rides!
          </div>
        </div>
        <div class="row w-100 mt-3">
          <div class="col-5 my-auto">
            <router-link to="/">Cancel</router-link>
          </div>
          <div class="col-5 my-auto myButton" v-on:click="console.log('Add')">
            Add
          </div>
        </div>
      </div>
    </div>
    <div class="col">Result</div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import DateTimePicker from '@/components/DateTimePicker.vue'
import MyInputWithIcon from '@/components/MyInputWithIcon.vue'
import MyCheckBox from '@/components/MyCheckBox.vue'

export default {
  name: 'Register',
  components: {
    MyInputWithIcon,
    DateTimePicker,
    MyCheckBox
  },
  data: function() {
    return {
      ride: {
        from: '',
        to: '',
        betweenFrom:
          new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, '-') +
          'T' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes(),
        betweenTill:
          new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, '-') +
          'T' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes(),
        joinsLater: false,
        where: ''
      },
      errors: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

a {
  color: $lightTextColor;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
}

#loginBlock {
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
