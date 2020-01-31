<template>
  <div class="row">
    <div class="row">
      {{ this.props.name }}
    </div>
    <div class="row">
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

<style lang="scss"></style>
