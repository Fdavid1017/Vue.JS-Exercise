<template>
  <div class="panel">
    <div class="row">
      <DataField
        class="col"
        name="From"
        v-bind:data="ride.from"
        v-bind:src="require('../../assets/mapPlace.svg')"
      /><DataField
        class="col"
        name="To"
        v-bind:data="ride.to"
        v-bind:src="require('../../assets/destination.svg')"
      />
    </div>
    <div class="row mt-2">
      <DataField
        class="col"
        name="When"
        v-bind:data="ride.when"
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
      {{ ride.driverId }}
    </div>
    <div class="row mt-2">
      <DataField
        class="col"
        name="Description"
        v-bind:data="ride.description"
        v-bind:src="require('../../assets/files.svg')"
      />
    </div>
  </div>
</template>

<!--
 from: infos.from,
 to: infos.to,
 when: infos.when,
 spaces: infos.spaces,
 car: infos.car,
 description: infos.description,
 driverName:
   state.accounts[state.loggedInUser].firstName +
   ' ' +
   state.accounts[state.loggedInUser].secondName,
 driverId: state.loggedInUser,
 rideId: state.rideId,
 passengerIds: []
-->

<script>
/* eslint-disable space-before-function-paren */
import DataField from '@/components/UserRides/DataField.vue'
import { getUserById } from '@/functions/GetUserById.js'

export default {
  props: ['ride', 'passenger'],
  components: { DataField },
  methods: {
    getUserById: function(id) {
      getUserById(this.$store, id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
