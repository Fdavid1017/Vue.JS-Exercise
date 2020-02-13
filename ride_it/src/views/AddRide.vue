<template>
  <div id="addBlock" class="w-100 h-100 justify-content-center">
    <div class="col"></div>
    <div id="cont" class="col my-auto mr-5">
      <div id="formContainer" class="panel row">
        <div class="col">
          <div class="row justify-content-center" id="title">Add new ride</div>
          <div class="row w-100">
            <div class="col">
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
                name="When"
                v-bind:hasError="errors.includes('whenError')"
                v-model="ride.when"
              />
            </div>
            <div class="col">
              <MyInputWithIcon
                class="mt-3"
                type="number"
                v-bind:iconSrc="require('../assets/team.svg')"
                name="Empty Spaces"
                v-bind:hasError="errors.includes('spacesError')"
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
                v-bind:hasError="errors.includes('descriptionError')"
                v-model="ride.description"
              />
            </div>
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
            <div class="col-5 my-auto myButton" v-on:click="add()">Add</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import MyInputWithIcon from '../components/MyInputWithIcon.vue'
import DateTimePicker from '@/components/DateTimePicker.vue'
import { addRide } from '@/functions/AddRide.js'

export default {
  name: 'Register',
  components: {
    DateTimePicker,
    MyInputWithIcon
  },
  data: function() {
    return {
      ride: {
        from: '',
        to: '',
        when:
          new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, '-') +
          'T' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes(),
        spaces: '',
        car: '',
        description: ''
      },
      errors: []
    }
  },
  methods: {
    add: async function() {
      this.errors = await addRide(this.$store, this.ride)
      if (this.errors.length === 0) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#loginError {
  color: $errorColor !important;
  white-space: pre;

  a {
    color: $errorColor !important;
    font-weight: bold;
  }
}

a {
  color: $lightTextColor;
}

#title {
  font-size: 1.5em;
  font-weight: bold;
}

#addBlock {
  background-image: url('../assets/drivingBg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;

  height: 100% !important;
  min-height: 100% !important;
}
.myButton {
  font-weight: bold;
}
</style>
