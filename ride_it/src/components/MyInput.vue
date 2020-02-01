<template>
  <div class="col">
    <div class="row w-100 name">
      {{ name }}
    </div>
    <div class="row w-100">
      <input
        v-bind:class="hasError ? 'error' : ''"
        ref="ip"
        v-bind:type="type"
        v-bind:name="name"
        :value="variable"
        @input="updateVariable()"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

export default {
  props: ['type', 'name', 'hasError', 'variable'],
  name: 'MyInput',

  methods: {
    updateVariable() {
      this.$emit('input', this.$refs.ip.value)
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';

input {
  background-color: #f4f4f4;
  border: none;
  border-bottom: 1px $textColor solid;
}

.name {
  font-weight: bold;
}

.error {
  border: 2px $errorColor solid !important;
}
</style>
