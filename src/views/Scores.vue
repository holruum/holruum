<template>
  <div class="scores">
    <h1>Score</h1>
    <b-progress class="mt-1" :max="$store.state.scores[0] + $store.state.scores[1]" show-value>
      <b-progress-bar :value="$store.state.scores[0]" variant="warning"></b-progress-bar>
      <b-progress-bar :value="$store.state.scores[1]" variant=#4575b4></b-progress-bar>
    </b-progress>
    {{$store.state.players[$store.state.scores[0] > $store.state.scores[1] ? 0 : 1]}}
    Player 1 score: {{$store.state.scores[0]}}
    Player 2 score: {{$store.state.scores[1]}}
  </div>
</template>
