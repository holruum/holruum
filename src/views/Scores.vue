<template>
  <div class="scores">
    <h1>Score</h1>
    <h3>Winner: {{$store.state.players[$store.state.scores[0] > $store.state.scores[1] ? 0 : 1]}}</h3>
    <h6>Score of {{$store.state.players[0]}}: {{$store.state.scores[0]}}</h6>
    <h6>Score of {{$store.state.players[1]}}: {{$store.state.scores[1]}}</h6>
    <b-progress height="4rem" class="mt-1" :max="$store.state.scores[0] + $store.state.scores[1]" show-value>
      <b-progress-bar :value="$store.state.scores[0]" variant="warning">{{$store.state.players[0]}}</b-progress-bar>
      <b-progress-bar :value="$store.state.scores[1]" variant="primary">{{$store.state.players[1]}}</b-progress-bar>
    </b-progress>
  </div>
</template>
<style scoped lang="scss">
  .bg-warning {
    background-color: #d73027 !important;
  }
  .bg-primary {
    background-color: #4575b4 !important;
  }
</style>