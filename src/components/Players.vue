<template>
    <div class="players">
        <div>
            <b-input-group class="mb-3" prepend="Player 1 →" append="← Player 2">
                <b-form-input @keyup.enter.native="$store.commit('addPlayer1', $store.state.players[0])" v-model="$store.state.players[0]" />
                <b-form-input @keyup.enter.native="$store.commit('addPlayer2', $store.state.players[1])" v-model="$store.state.players[1]" />
            </b-input-group>
        </div>
        <b-button disabled v-if="$store.state.players.length == 0" variant="success" to="/play">Start game!</b-button>
        <b-button enabled v-if="$store.state.players.length != 0" variant="success" to="/play">Start game!</b-button>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import Vue from 'vue'
    import 'es6-promise/auto'
    Vue.use(Vuex);

    export default {
        name: 'players',
        data: () => {
            return {}
        },
        methods: {

        }
    }
</script>
