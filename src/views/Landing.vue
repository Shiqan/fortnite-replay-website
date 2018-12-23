<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">
                  Your story
                  <span>starts with us</span>
                </h1>
                <form @submit.prevent="submit">
                  <base-input
                    v-model="player"
                    :valid="isValid"
                    alternative
                    :placeholder="placeholder"
                    addon-left-icon="ni ni-zoom-split-in"
                  ></base-input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section section-lg pt-lg-0">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">Leaderboards</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-1-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              >
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Svennoss</span>
                  <small class="h6 text-muted">Wins</small>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-2-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              >
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">DrLupo</span>
                  <small class="h6 text-muted">Roaster</small>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-3-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              >
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Tfue</span>
                  <small class="h6 text-muted">Winter Royale</small>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ReplayService from "../services/replayService";

export default {
  name: "home",
  components: {},
  data() {
    return {
      service: undefined,
      isValid: undefined,
      placeholder: "Search Player...",
      player: ""
    };
  },
  mounted() {
    this.service = new ReplayService();
  },
  methods: {
    submit() {
      if (
        this.player === null ||
        this.player === "" ||
        this.player === "undefined"
      ) {
        this.isValid = false;
        this.placeholder = "Not a valid player name";
        return;
      }

      this.service
        .playerExists(this.player)
        .then(response => {
          if (response) {
            this.isValid = true;
            this.$router.push("/player/" + this.player);
          } else {
            this.isValid = false;
            this.player = undefined;
            this.placeholder = "Couldnt find this player in our database!";
          }
        })
        .catch(e => {
          console.error(e);
          this.isValid = false;
          this.player = undefined;
          this.placeholder = "Error occurred!";
        });
    }
  }
};
</script>
