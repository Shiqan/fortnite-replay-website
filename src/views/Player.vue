<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button type="info" size="sm" class="mr-4" icon="fa fa-star-o">Add Favorite</base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">{{ this.stats.totalGames }}</span>
                    <span class="description">Replays</span>
                  </div>
                  <div>
                    <span class="heading">{{ this.stats.totalWins}}</span>
                    <span class="description">Wins</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>{{ this.player }}</h3>
            </div>
            <div class="mt-5 py-5 text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <replay-summary
                    v-bind:replay="replay"
                    v-if="loaded"
                    v-for="replay in replays"
                    :key="replay.id"
                  ></replay-summary>

                  <a href="#">Show more</a>
                </div>
              </div>    
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import ReplayService from "../services/replayService";
import ReplaySummary from "@/components/ReplaySummary";

export default {
  name: "player",
  components: {
    ReplaySummary
  },
  data: function() {
    return {
      player: null,
      replays: [],
      stats: {
        totalGames: 0,
        totalWins: 0
      },
      showError: false,
      loaded: false,
      loading: false,
      service: undefined
    };
  },

  mounted() {
    this.service = new ReplayService();
    if (this.$route.params.player) {
      this.player = this.$route.params.player;
      this.requestData();
    }
  },

  methods: {
    resetState() {
      this.loaded = false;
      this.showError = false;
    },
    requestData() {
      if (
        this.player === null ||
        this.player === "" ||
        this.player === "undefined"
      ) {
        this.showError = true;
        return;
      }
      this.resetState();
      this.loading = true;

      this.service
        .getPlayer(this.player)
        .then(response => {
          console.log(response);
          this.replays = response.replays;
          this.start = response.start;
          this.length = response.length;
          this.stats.totalGames = response.total;
          this.stats.totalWins = response.totalWins;

          this.loaded = true;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.showError = true;
        });
    }
  }
};
</script>
<style>
</style>
