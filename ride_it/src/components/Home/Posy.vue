<template>
  <div class="row h-100 w-100 m-0">
    <div class="col h-100"></div>
    <div class="col h-100">
      <div class="row h-100 align-items-center">
        <div class="w-100">
          <div id="homeRideItText" class="d-flex justify-content-start">
            Ride It...
          </div>
          <div id="homeNoTimeText" class="d-flex justify-content-start">
            When you have no time...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#homeRideItText {
  font-size: 50px;
  line-height: 60px;
  color: #f9f055;
  text-shadow: $shadow;
}

#homeNoTimeText {
  font-size: 50px;
  line-height: 60px;
  color: #ffffff;
  text-shadow: $shadow;
}

.home {
  height: 830px;
  background-image: url('../../assets/carRoad.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
