<template>
  <div class="checkBox">
    <div class="row">
      <div class="col-9">
        <label for="cb"
          ><img class="mr-1" :src="iconSrc" alt="icon" />{{ name }}</label
        >
      </div>
      <div class="col-1">
        <label class="container">
          <input
            id="cb"
            ref="cb"
            type="checkbox"
            v-bind:name="name"
            @input="updateVariable()"
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

export default {
  props: ['iconSrc', 'name'],
  name: 'MyCheckBox',

  methods: {
    updateVariable() {
      this.$emit('input', this.$refs.cb.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  background-color: #f4f4f4;
  border: 1px $textColor solid;
  border-radius: 7px;
}

.container {
  input:checked ~ .checkmark {
    background-color: $highlightColor;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid $textColor;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
}

.container:hover input ~ .checkmark {
  background-color: $lightTextColor;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

div,
label {
  cursor: pointer;
}

img {
  width: 25px;
  height: 25px;
}
</style>
