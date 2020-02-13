<template>
  <div id="userRides" class="row m-0 w-100 jutify-content-center">
    <div class="col">
      <div class="title panel row mx-auto w-75 mt-3">
        <div class="mx-auto">Rides</div>
      </div>
      <div v-for="ride in rides" v-bind:key="ride.rideId" class="m-0 row w-100">
        <RidesData
          class="mx-auto mt-3"
          v-bind:ride="ride"
          v-bind:passenger="false"
        />
      </div>
    </div>
    <div class="col">
      <div class="title panel row mx-auto w-75 mt-3">
        <div class="mx-auto">As a passenger</div>
      </div>
      <div
        v-for="ride in passenger"
        v-bind:key="ride.rideId"
        class="m-0 row w-100"
      >
        <RidesData
          class="mx-auto mt-3"
          v-bind:ride="ride"
          v-bind:passenger="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import RidesData from '@/components/UserRides/RidesDatas.vue'
import { getUserRides } from '@/functions/GetUserRides.js'

export default {
  components: { RidesData },
  data: function() {
    return {
      rides: [],
      passenger: []
    }
  },

  created: async function() {
    this.rides = await getUserRides(this.$store.getters.loggedInUser, false)
    this.passenger = await getUserRides(this.$store.getters.loggedInUser, true)
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.title {
  font-weight: bold;
  font-size: 2em;
  text-align: center;
}

#userRides {
  min-height: 100% !important;

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
}
</style>
