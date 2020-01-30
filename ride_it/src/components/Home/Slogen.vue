<template>
  <div id="slogenPanel" class="row w-100 m-0">
    <div class="col h-100"></div>
    <div class="col h-100">
      <div class="row h-100 align-items-center">
        <div class="w-100">
          <div id="slogenRideItText" class="d-flex justify-content-start">
            Ride It...
          </div>
          <div id="slogenNoTimeText" class="d-flex justify-content-start">
            When you have no time...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#slogenRideItText {
  color: #f9f055;
}

#slogenNoTimeText {
  color: #ffffff;
}

#slogenRideItText,
#slogenNoTimeText {
  font-size: 50px;
  line-height: 60px;
  text-shadow: $shadow;
  cursor: context-menu;
}

#slogenPanel {
  height: 830px;
  background-image: url('../../assets/carRoad.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
