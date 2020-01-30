<template>
  <div class="home row w-100 ">
    <div class="col h-100"></div>
    <div class="col h-100">
      <div class="row h-100 align-items-center">
        <div class="w-100">
          <div id="homeRideItText" class="d-flex justify-content-start">Ride It...</div>
          <div id="homeNoTimeText" class="d-flex justify-content-start">When you have no time...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {}
}
</script>

<style scoped>
#homeRideItText {
  font-size: 50px;
  line-height: 60px;
  color: #f9f055;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.75);
}

#homeNoTimeText {
  font-size: 50px;
  line-height: 60px;
  color: #ffffff;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.75);
}

.home {
  height: 830px;
  background-image: url("../assets/carRoad.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
