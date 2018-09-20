<template>
    <div class="Players">
        <div>
            <b-input-group class="mb-3" prepend="Add a Player:" >
                <b-form-input @keyup.enter.native="addPlayer" v-model="playerName" />
                <b-input-group-append>
                    <b-btn size="sm" text="Button" variant="success" @click="addPlayer">Add Player</b-btn>
                </b-input-group-append>
            </b-input-group>
        </div>
        <h4>List of Players</h4>
        <div class="list-group-item" v-if="Players.length == 0">
            No players registered
        </div>
        <div class="list-group-item" v-if="Players.length > 2">
            Too many players registered. Only 2 players are possible.
        </div>
        <div v-bind:key="id" class="list-group-item" v-for="(player,id) in Players">
            {{ player.name }} <button class="btn btn-xs btn-danger" @click="deleteEvent(player)">Delete</button>
        </div>
        <b-button disabled v-if="Players.length == 0 || Players.length > 2" variant="success" href="/play">Start game!</b-button>
        <b-button v-if="Players.length != 0 && Players.length == 2" variant="success" href="/play">Start game!</b-button>
    </div>
</template>

<script>
    export default {
        name: 'Players',
        data: () => {
            return {
                fields: ['Playername', ' '],
            Players: [

            ],
                playerName: ""
            }
        },
        methods: {
            addPlayer: function(){
                this.Players.push({name: this.playerName});
            },
            deleteEvent: function(player) {
                this.Players.splice(this.Players.indexOf(player), 1);
            }
        }
    }
</script>
