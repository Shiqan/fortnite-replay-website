<template>
  <card shadow class="shadow-lg--hover mb-5">
    <div class="d-flex px-3">
      <div>
        <icon v-if="icon" :name="this.icon" :gradient="this.gradient" color="white" shadow rounded></icon>
      </div>
      <div class="pl-4">
        <h5 class="title" :class="this.text">{{ this.replay.name }}</h5>
        <p>
          The Arctic Ocean freezes every winter and much of the sea-ice then thaws
          every summer, and that process will continue whatever happens.
        </p>
        <a href="#" class="text-primary">See details</a>
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
  mounted() {
    if (this.replay.id == "1") {
      this.icon = "ni ni-satisfied";
      this.gradient = "success";
      this.text = "text-success";
    } else {
      this.icon = "ni ni-satisfied";
      this.gradient = "danger";
      this.text = "text-danger";
    }
  }
};
</script>
