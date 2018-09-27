<template>
  <div v-bind:class="{finished:finished()}">
    Current player: {{$store.state.players[currentPlayer-1]}}<br>
    {{$store.state.players[0]}}: {{playerPoints(1)}}<br>
    {{$store.state.players[1]}}: {{playerPoints(2)}}
    Finished: {{this.finished()}}
    <div style="position:relative; line-height:0">
      <div v-bind:key="y" v-for="(r,y) in fields">
        <!-- Fields -->
        <div v-bind:key="x" v-for="(f,x) in r" v-bind:class="['field-p' + f.player]" v-bind:style="{ }" class="field">
          <div class="edge-top edge" @click="click(x,y,'top')" v-bind:class="{disabled:f.top == borderType.disabled, 'outer-border': f.top == borderType.outer}"></div>
          <div class="edge-left edge" @click="click(x,y,'left')" v-bind:class="{disabled:f.left == borderType.disabled, 'outer-border': f.left == borderType.outer}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultMaps from './maps'
// the borderTypes
const borderType = {
  enabled: 1,
  outer: 0, // o means an outer border, which is not clickable
  disabled: -1 // d means disabled (outside of the map)
}

export default {
  name: 'play',
  data: () => {
    var mapNr = Math.floor(Math.random() * defaultMaps.length) + 0;
    var map = defaultMaps[mapNr];
      const fields = map.map.replace('\r', '').split('\n').filter(c => c != '')
          .map(r => r.split('').map(c => {
              if (c == 'x') return {top: borderType.disabled, left: borderType.disabled, player: null};
              if (c == '┌') return {top: borderType.outer, left: borderType.outer, player: null};
              if (c == '-') return {top: borderType.outer, left: borderType.disabled, player: null};
              if (c == '_') return {top: borderType.outer, left: borderType.enabled, player: null};
              if (c == '|') return {top: borderType.enabled, left: borderType.outer, player: null};
              if (c == '/') return {top: borderType.disabled, left: borderType.outer, player: null};
              if (c == ' ') return {top: borderType.enabled, left: borderType.enabled, player: null};
          }));
      return  {
      fields: fields,
      borderType: borderType,
      currentPlayer: 1,
      map: map
    };
  },
  computed: {
  },
  methods: {
    click: function(x,y,position) {
      // Set the clicked border - change type to outer
      this.fields[y][x][position] = borderType.outer;

        const surrounded = function (x, y, fields) {
            return (fields[y][x].top == borderType.outer && fields[y + 1][x].top == borderType.outer &&
                fields[y][x].left == borderType.outer && fields[y][x + 1].left == borderType.outer);
        };

        // Sum up the current players points to check if points have been made
        const points = this.playerPoints(this.currentPlayer);

        // Determine if one of the boxes is surrounded with borders
      if(position == 'top') { // If top has been clicked, check the current box and the box on top of it
        if(surrounded(x,y,this.fields)) {
          this.fields[y][x].player = this.currentPlayer;
        }
        if(surrounded(x,y-1,this.fields))
          this.fields[y-1][x].player = this.currentPlayer;
      }
      if(position == 'left') { // If left has been clicked, check the current box and the box to the left of it
        if(surrounded(x,y,this.fields))
          this.fields[y][x].player = this.currentPlayer;
        if(surrounded(x-1,y,this.fields))
          this.fields[y][x-1].player = this.currentPlayer;
      }

      // If the current player did not surround a new box, toggle the player
      if(points === this.playerPoints(this.currentPlayer)) {
        this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
      }

      // Finish the game if appropriate
      if(this.finished()) {
        window.setTimeout(() => {
          this.$store.commit('setScores', [this.playerPoints(1), this.playerPoints(2)]);
          this.$router.push('/scores');
        }, 1000);
      }
    },
    playerPoints: function(player) {
      return this.fields.map(r => r.filter(f => f.player == player).length).reduce((a, b) => a + b, 0);
    },
    finished: function() {
      return this.playerPoints(1) + this.playerPoints(2) == this.map.fieldCount;
    }
  }
}
</script>

<style scoped lang="scss">
* { box-sizing:border-box; }
$cols: 7; // the number of columns
$colwidth: 100%/$cols;

.field { width:$colwidth; border:1px solid #DDD; position:relative; display:inline-block; }
.field:after { display:block; content:' '; padding-bottom:100%; }
.field-p1 { background:#d73027; }
.field-p2 { background:#4575b4; }

$edge-width:5px;
.edge { background:#DDD; position:absolute; border-radius:100%; }
.edge:hover { background:green; }
.edge.disabled { display:none;}
.edge.outer-border { background:#000; pointer-events: none;}
.edge-top { width:100%; height:$edge-width; top:-$edge-width/2; left:0; }
.edge-left { width:$edge-width; height:100%;  top:0; left:-$edge-width/2; }
// helpers which make the box to click a bit larger
.edge-top:after { position:relative; top:-5px; height:10px; width:100%; display:block; content:' '; }
.edge-left:after { position:relative; left:-5px; width:10px; height:100%; display:block; content:' '; }
.finished .field { animation : rotation 2s infinite linear; }
@keyframes rotation {
		from {
				transform: rotate(0deg);
		}
		to {
				transform: rotate(359deg);
		}
}
</style>
