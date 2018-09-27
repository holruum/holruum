<template>
  <div class="scores">
    <h1>Score</h1>
    {{$store.state.players[$store.state.scores[0] > $store.state.scores[1] ? 0 : 1]}}
    Player 1 score: {{$store.state.scores[0]}}
    Player 2 score: {{$store.state.scores[1]}}
  </div>
</template>
