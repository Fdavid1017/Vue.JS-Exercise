<template>
  <div class="home w-100 h-100">
    <Slogen />
    <LoginRegisterBlock />
  </div>
</template>

<script>
// @ is an alias to /src
import Slogen from '@/components/Home/Slogen.vue'
import LoginRegisterBlock from '@/components/Home/LoginRegisterBlock.vue'

export default {
  name: 'home',
  components: {
    Slogen,
    LoginRegisterBlock
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
