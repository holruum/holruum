import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    players: [

    ],
    playerName: "",
    scores: [0,0]
}


const mutations = {
    addPlayer (state, player){
        state.players.push(player);
        state.playerName = '';
    },
    addPlayer1 (state, player1){
        state.players.push(player1);
        state.playerName = '';
    },
    addPlayer2 (state, player2){
        state.players.push(player2);
        state.playerName = '';
    },
    deletePlayer (state, player){
        state.players.splice(state.players.indexOf(player), 1);
    },
    setScores(state, scores) {
      state.scores = scores;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
