<template>
  <div class="inputWIcon">
    <div class="row">
      <img class="mr-1" :src="iconSrc" alt="icon" />{{ name }}
    </div>
    <div class="row">
      <input
        class="mt-1 col"
        v-bind:class="hasError ? 'error' : ''"
        ref="date"
        type="date"
        v-bind:name="name"
        :value="
          new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, '-')
        "
        @input="updateVariable()"
        v-bind:min="
          new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, '-')
        "
      />
      <input
        class="mt-1 col"
        v-bind:class="hasError ? 'error' : ''"
        ref="time"
        type="time"
        v-bind:name="name"
        :value="new Date().getHours() + ':' + new Date().getMinutes()"
        @input="updateVariable()"
        v-bind:min="new Date().getHours() + ':' + new Date().getMinutes()"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

export default {
  props: ['iconSrc', 'name', 'hasError', 'variable'],
  name: 'MyInput',

  methods: {
    updateVariable() {
      this.$emit('input', this.$refs.date.value + 'T' + this.$refs.time.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.inputWIcon {
  font-weight: bold;
}

input {
  background-color: #f4f4f4;
  border: none;
  border-bottom: 1px $textColor solid;
}

img {
  width: 25px;
  height: 25px;
}
</style>
