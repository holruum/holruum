import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    players: [

    ],
    playerName: ""
}


const mutations = {
    addPlayer (state, player){
        state.players.push(player);
        state.playerName = '';
    },
    deletePlayer (state, player){
        state.players.splice(state.players.indexOf(player), 1);
    }
}

export default new Vuex.Store({
    state,
    mutations
})