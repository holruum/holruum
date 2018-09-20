<template>
  <div class="home">
    <img svg-inline class="icon" src="../assets/logo.svg" alt="holruum Logo" width="300" />
    <Players />
  </div>
</template>

<script>
// @ is an alias to /src
import Players from '@/components/Players.vue'

export default {
  name: 'home',
  components: {
      Players
  }
}
</script>
