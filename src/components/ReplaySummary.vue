<template>
  <card shadow class="shadow-lg--hover mb-5" :class="this.cardClass">
    <div class="d-flex flex-wrap justify-content-between">
      <div class="flex-column">
        <div class="p-2 align-self-stretch mr-auto">
          <h5 class="title" :class="this.textClass">{{ this.replay.title }}</h5>
          <span class="text-muted mb-0">{{ this.replay.created_at }}</span>
          <br>
          <router-link :to="{ name: 'match-details', params: { id: this.replay.id }}" class="text-primary">
            See details
          </router-link>
        </div>
      </div>

      <div class="flex-column">
        <div class="p-2">
          <h5 class="title text-muted mb-0">Kills</h5>
          <span class="h4 font-weight-bold mb-0">{{ this.replay.eliminations }}</span>
        </div>
        <div class="p-2">
          <h5 class="title text-muted mb-0">Accuracy</h5>
          <span class="h4 font-weight-bold mb-0">{{ this.replay.accuracy }} %</span>
        </div>
        <div class="p-2">
          <h5 class="title text-muted mb-0">Assists</h5>
          <span class="h4 font-weight-bold mb-0">{{ this.replay.assists }}</span>
        </div>
      </div>

      <div class="flex-column">
        <div class="p-2">
          <h5 class="title text-muted mb-0">Damage dealt</h5>
          <span
            class="h4 font-weight-bold mb-0"
          >{{ this.replay.weapon_damage + this.replay.other_damage }}</span>
        </div>
        <div class="p-2">
          <h5 class="title text-muted mb-0">Damage taken</h5>
          <span class="h4 font-weight-bold mb-0">{{ this.replay.damage_taken }}</span>
        </div>
      </div>

      <div class="flex-column">
        <div class="p-2">
          <h5 class="title text-muted mb-0">Total traveled</h5>
          <span class="h4 font-weight-bold mb-0">{{ this.replay.total_traveled }}km</span>
        </div>
        <div class="p-2">
          <h5 class="title text-muted mb-0">Materials gathered</h5>
          <span class="h4 font-weight-bold mb-0">{{ this.replay.materials_gathered }}</span>
        </div>
        <div class="p-2">
          <h5 class="title text-muted mb-0">Materials used</h5>
          <span class="h4 font-weight-bold mb-0">{{ this.replay.materials_used }}</span>
        </div>
      </div>
      <div class="p-2">
        <h5 class="title text-muted mb-0">Total players</h5>
        <span class="h4 font-weight-bold mb-0">{{ this.replay.total_players }}</span>
      </div>
      <div class="p-2">
        <div class="icon icon-shape text-white rounded-circle shadow" :class="this.gradient">
          <i class="fas fa-chart-bar">#{{ this.replay.position }}</i>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
export default {
  name: "replay-summary",
  props: {
    replay: {
      type: Object,
      description: "Replay"
    }
  },
  data: function() {
    return {
      icon: "ni ni-satisfied",
      textClass: "text-danger",
      gradient: "bg-danger",
      cardClass: "game-lost"
    };
  },
  mounted() {
    console.log(this.replay.id);
    console.log(this.replay.winner);
    if (this.replay.winner) {
      this.icon = "ni ni-satisfied";
      this.gradient = "bg-success";
      this.textClass = "text-success";
      this.cardClass = "game-won";
    }
  }
};
</script>
