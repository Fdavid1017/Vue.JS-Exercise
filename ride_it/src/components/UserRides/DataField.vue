<template>
  <div class="row">
    <img class="mr-1" id="icon" :src="src" alt="Icon" />
    <div class="mr-1" id="name">{{ name + ':' }}</div>
    <div class="">{{ data }}</div>
  </div>
</template>

<script>
export default {
  props: ['name', 'data', 'src']
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#icon {
  width: 25px;
  height: 25px;
}

#name {
  font-weight: bold;
}
</style>
