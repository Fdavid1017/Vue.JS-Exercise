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
          <img class="icon" src="@/assets/mapPlace.svg" alt="Icon" />
          From: {{ ride.from }}
        </div>
        <div class="col">
          <img class="icon" src="@/assets/destination.svg" alt="Icon" />
          To: {{ ride.to }}
        </div>
      </div>
      <div class="row mt-2">
        <img class="icon" src="@/assets/calendar.svg" alt="Icon" />
        When: {{ ride.when }}
      </div>
      <div class="row mt-2">
        <img class="icon" src="@/assets/team.svg" alt="Icon" />
        Free spaces: {{ ride.spaces }}
      </div>
      <div class="row mt-2">
        <img class="icon" src="@/assets/car1.svg" alt="Icon" />
        Car: {{ ride.car }}
      </div>
      <div class="row mt-2">
        <img class="icon" src="@/assets/files.svg" alt="Icon" />
        Description: {{ ride.description }}
      </div>
      <div class="row mt-2 justify-content-center">
        <div class="myButton">
          Accept
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

export default {
  props: ['ride'],
  name: 'RideInfos',

  methods: {
    updateVariable() {}
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
