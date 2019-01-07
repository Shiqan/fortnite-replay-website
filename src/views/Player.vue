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
              <div class="col-6 col-lg-4 order-lg-2 py-4 d-flex justify-content-center">
                <h3>{{ this.player }}</h3>
              </div>
              <div class="col-6 col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button
                    disabled
                    type="info"
                    size="sm"
                    class="mr-4"
                    icon="fa fa-star-o"
                  >Add Favorite</base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">{{ this.stats.totalGames }}</span>
                    <span class="description">Replays</span>
                  </div>
                  <!-- <div>
                    <span class="heading">{{ this.stats.totalWins}}</span>
                    <span class="description">Wins</span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>

    <section class="mt--100">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-8 col-lg-2">
            <div class="mb-3">
              <small class="text-uppercase font-weight-bold">Filter</small>
            </div>
            <base-input
              placeholder="Search"
              v-model="filter.search"
              addon-left-icon="ni ni-zoom-split-in"
            ></base-input>

            <div class="mb-3">
              <small class="text-uppercase font-weight-bold">Only wins</small>
            </div>
            <base-switch v-model="filter.win"></base-switch>

            <div class="mb-3">
              <small
                class="text-uppercase font-weight-bold"
              >Placement ({{ this.filter.position[0] | floor }} - {{ this.filter.position[1] | floor }})</small>
            </div>
            <base-slider v-model="filter.position" :range="{min: 0, max: 100}"></base-slider>

            <div class="mb-3">
              <small
                class="text-uppercase font-weight-bold"
              >Kills ({{ this.filter.kills[0] | floor }} - {{ this.filter.kills[1] | floor }})</small>
            </div>
            <base-slider v-model="filter.kills" :range="{min: 0, max: 100}"></base-slider>

            <div class="mb-3">
              <small class="text-uppercase font-weight-bold">Start date</small>
            </div>

            <div class="input-daterange datepicker row align-items-center">
              <div class="col">
                <base-input addon-left-icon="ni ni-calendar-grid-58">
                  <flat-picker
                    slot-scope="{focus, blur}"
                    @on-open="focus"
                    @on-close="blur"
                    :config="{allowInput: true}"
                    class="form-control datepicker"
                    v-model="filter.startDate"
                  ></flat-picker>
                </base-input>
              </div>
            </div>

            <div class="mb-3">
              <small class="text-uppercase font-weight-bold">End date</small>
            </div>

            <div class="input-daterange datepicker row align-items-center">
              <div class="col">
                <base-input addon-left-icon="ni ni-calendar-grid-58">
                  <flat-picker
                    slot-scope="{focus, blur}"
                    @on-open="focus"
                    @on-close="blur"
                    :config="{allowInput: true}"
                    class="form-control datepicker"
                    v-model="filter.endDate"
                  ></flat-picker>
                </base-input>
              </div>
            </div>
            <base-button type="primary" @click="submit">Apply filters</base-button>
          </div>

          <div class="col-12 col-lg-8" v-if="loaded">
            <replay-summary
              v-bind:replay="replay"
              v-for="replay in replays"
              :key="replay.id"
            ></replay-summary>
          </div>
        </div>
        <div class="row justify-content-center">
          <base-pagination :page-count="stats.pages" v-model="filter.page" v-on:input="submit"></base-pagination>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ReplayService from "../services/replayService";
import ReplaySummary from "@/components/ReplaySummary";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "player",
  components: {
    flatPicker,
    ReplaySummary
  },
  data: function() {
    return {
      player: null,
      replays: [],
      stats: {
        pages: 10,
        totalGames: 0,
        totalWins: 0
      },
      showError: false,
      loaded: false,
      service: undefined,
      formData: undefined,
      filter: {
        search: "",
        page: 1,
        length: 10,
        startDate: "",
        endDate: "",
        position: [0, 100],
        kills: [0, 100],
        win: false
      }
    };
  },
  filters: {
    floor(amount) {
      return amount | 0;
    }
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
    submit() {
      this.requestData();
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

      this.formData = new FormData();
      this.formData.append("username", this.player);
      this.formData.append("search", this.filter.search);
      this.formData.append("start", this.filter.page);
      this.formData.append("length", this.filter.length);
      this.formData.append("startdate", this.filter.startDate);
      this.formData.append("enddate", this.filter.endDate);
      this.formData.append("position", this.filter.position);
      this.formData.append("kills", this.filter.kills);
      this.formData.append("win", this.filter.win);

      this.service
        .getPlayer(this.formData)
        .then(response => {
          this.replays = response.replays;

          this.stats.totalGames = response.total;
          this.stats.totalWins = response.totalWins;
          this.stats.pages = response.pages;

          this.loaded = true;
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
