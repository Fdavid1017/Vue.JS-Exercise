<template>
  <div class="panel">
    <div class="row">
      <DataField
        class="col"
        name="From"
        v-bind:data="ride.fromLocation"
        v-bind:src="require('../../assets/mapPlace.svg')"
      /><DataField
        class="col"
        name="To"
        v-bind:data="ride.toLocation"
        v-bind:src="require('../../assets/destination.svg')"
      />
    </div>
    <div class="row mt-2">
      <DataField
        class="col"
        name="When"
        v-bind:data="ride.whenTime"
        v-bind:src="require('../../assets/calendar.svg')"
      /><DataField
        class="col"
        name="Empty Spaces"
        v-bind:data="ride.spaces"
        v-bind:src="require('../../assets/team.svg')"
      />
    </div>
    <div class="row mt-2">
      <DataField
        class="col"
        name="Car"
        v-bind:data="ride.car"
        v-bind:src="require('../../assets/car1.svg')"
      />
    </div>
    <div v-if="!passenger" class="row mt-2">
      <DataField
        class="col"
        name="Passengers"
        v-bind:src="require('../../assets/team.svg')"
      />
      <ul class="col">
        <li v-for="user in ride.passengerIds" v-bind:key="user.id">
          {{ user.firstName }}
        </li>
      </ul>
    </div>
    <div v-if="passenger" class="row mt-2">
      <DataField
        class="col"
        name="Driver"
        v-bind:src="require('../../assets/profileIconBlack.svg')"
      />
      {{ ride.firstName }}
    </div>
    <div class="row mt-2">
      <DataField
        class="col"
        name="Description"
        v-bind:data="ride.description"
        v-bind:src="require('../../assets/files.svg')"
      />
    </div>
    <div class="row mt-2">
      <div class="myButton" v-on:click="removeRide()">Remove</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import DataField from '@/components/UserRides/DataField.vue'
import { removeRide } from '@/functions/RemoveRide.js'
import { removePassanger } from '@/functions/RemovePassanger.js'

export default {
  props: ['ride', 'passenger'],
  components: { DataField },
  methods: {
    removeRide: function() {
      console.log('rideId in RidesDatas: ' + this.ride.id)
      console.log('Full ride:')
      console.log(this.ride)
      if (this.passenger) {
        removePassanger(this.ride.id, this.$store.getters.loggedInUser)
      } else {
        removeRide(this.ride.id, this.$store.getters.loggedInUser)
      }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
