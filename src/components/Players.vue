<template>
    <div class="players">
        <div>
            <b-input-group class="mb-3" prepend="Add a Player:" >
                <b-form-input @keyup.enter.native="$store.commit('addPlayer', $store.state.playerName)" v-model="$store.state.playerName" />
                <b-input-group-append>
                    <b-btn size="sm" text="Button" variant="success" @click="$store.commit('addPlayer', $store.state.playerName)">Add Player</b-btn>
                </b-input-group-append>
            </b-input-group>
        </div>
        <h4>List of Players</h4>
        <div class="list-group-item" v-if="$store.state.players.length == 0">
            No players registered
        </div>
        <div class="list-group-item" v-if="$store.state.players.length > 2">
            Too many players registered. Only 2 players are possible.
        </div>
        <div v-bind:key="id" class="list-group-item" v-for="(player,id) in $store.state.players">
            {{ player }} <button class="btn btn-xs btn-danger" @click="$store.commit('deletePlayer', $store.state.playerName)">Delete</button>
        </div>
        <b-button disabled v-if="$store.state.players.length == 0 || $store.state.players.length > 2" variant="success" to="/play">Start game!</b-button>
        <b-button v-if="$store.state.players.length != 0 && $store.state.players.length == 2" variant="success" to="/play">Start game!</b-button>
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
