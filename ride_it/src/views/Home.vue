<template>
  <div class="home">
    <Posy />
  </div>
</template>

<script>
// @ is an alias to /src
import Posy from '@/components/Home/Posy.vue'

export default {
  name: 'home',
  components: {
    Posy
  }
}
</script>

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
  background-image: url('../assets/carRoad.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
