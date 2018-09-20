<template>
    <div class="Players">
        <ul id="players">
            <li v-for="player in Players">
                {{ player.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Players',
        data: () => {
            return {
            Players: [
                {name: "Kurt"}
            ]
            }
        }
    }
</script>