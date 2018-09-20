<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <b-input-group v-for="size in ['']" :key="size" :size="size" class="mb-3" prepend="Playername">
        <b-form-input />
        <b-input-group-append>
          <b-btn size="sm" text="Button" variant="success">Add Player</b-btn>
        </b-input-group-append>
      </b-input-group>
    </div>
    <h1>Players:</h1>
    <Players Players="Kurt" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Players from '@/components/Players.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
      Players
  }
}
</script>
