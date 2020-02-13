<template>
  <div class="panel row">
    <div class="col">
      <div class="row justify-content-center">
        <img
          id="profilePicture"
          src="@/assets/profilePictureIcon.svg"
          alt="Profile Picture"
        />
      </div>
      <div class="row justify-content-center mt-2">
        {{ ride.driverName }}
      </div>
      <div class="row mt-2">
        <div class="col">
          <img class="icon mr-1" src="@/assets/mapPlace.svg" alt="Icon" />
          From: {{ ride.fromLocation }}
        </div>
        <div class="col mr-1">
          <img class="icon" src="@/assets/destination.svg" alt="Icon" />
          To: {{ ride.toLocation }}
        </div>
      </div>
      <div class="row mt-2 mr-1">
        <img class="icon mr-1" src="@/assets/calendar.svg" alt="Icon" />
        When: {{ ride.whenTime.replace('T', ' ') }}
      </div>
      <div class="row mt-2 mr-1">
        <img class="icon" src="@/assets/team.svg" alt="Icon" />
        Free spaces: {{ ride.spaces }}
      </div>
      <div class="row mt-2 mr-1">
        <img class="icon" src="@/assets/car1.svg" alt="Icon" />
        Car: {{ ride.car }}
      </div>
      <div class="row mt-2 mr-1">
        <img class="icon" src="@/assets/files.svg" alt="Icon" />
        Description: {{ ride.description }}
      </div>
      <div class="row mt-2 justify-content-center">
        <div v-on:click="acceptRide()" class="myButton">
          Accept
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { acceptRide } from '@/functions/AcceptRide.js'

export default {
  props: ['ride'],
  name: 'RideInfos',

  methods: {
    async acceptRide() {
      if (this.$store.getters.loggedInUser !== -1) {
        this.ride = await acceptRide(
          this.$store.getters.loggedInUser,
          this.ride
        )
        console.log('Ride accepted: ' + this.ride)
      } else {
        this.$router.push('/Login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.icon {
  height: 25px;
  width: 25px;
}

#profilePicture {
  height: 100px;
  width: 100px;
}

.myButton {
  font-weight: bold;
}
</style>
