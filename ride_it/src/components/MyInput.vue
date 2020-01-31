<template>
  <div class="col">
    <div class="row w-100 name">
      {{ name }}
    </div>
    <div class="row w-100">
      <input v-bind:type="type" v-bind:name="name" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'name'],
  name: 'MyInput'
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';

input {
  background-color: #f4f4f4;
  border: none;
  border-bottom: 1px $textColor solid;
}

.name{
font-weight: bold;
}
</style>
