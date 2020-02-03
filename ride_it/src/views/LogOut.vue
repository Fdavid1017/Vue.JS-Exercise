<template>
  <div>Logging out...</div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { logOut } from '@/functions/LogOut.js'

export default {
  mounted: function() {
    logOut(this.$store)
    this.$router.push('/')
  }
}
</script>
