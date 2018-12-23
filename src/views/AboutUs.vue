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
                <h1 class="display-3 text-white">About us</h1>
                <p class="lead text-white">
                    A game this popular deserves a good stats website.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="https://github.com/Shiqan/fortnite-replay-website"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="fa fa-code"
                  >Help us build it!</base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 ">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-check-bold" type="primary" rounded class="mb-4"></icon>
                  <h6 class="text-primary text-uppercase">Parsing of replay files</h6>
                  <p class="description mt-3">
                      We parse your replay files and extract and store all the data we can from it.
                  </p>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-istanbul" type="success" rounded class="mb-4"></icon>
                  <h6 class="text-success text-uppercase">Analyze data</h6>
                  <p class="description mt-3">
                    We analyze the stored data to show statistics in order to improve your game.
                  </p>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4"></icon>
                  <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                  <p class="description mt-3">
                      We are not there yet, but will be soon. Stay tuned!
                  </p>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="text-center">
              <h4 class="display-4 mb-5 mt-5">Available on these technologies</h4>
              <div class="row justify-content-center">
                <div class="col-lg-2 col-4">
                  <a
                    href="https://getbootstrap.com/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-original-title="Bootstrap 4 - Most popular front-end component library"
                  >
                    <img
                      v-lazy="'https://cdn-images-1.medium.com/max/2000/1*9HanDsRU11ZMsgDGJwN96w.png'"
                      class="img-fluid"
                    >
                  </a>
                </div>

                <div class="col-lg-2 col-4">
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-original-title="Vue.js - The progressive javascript framework"
                  >
                    <img v-lazy="'https://cdn.auth0.com/blog/vuejs/vue-logo.png'" class="img-fluid">
                  </a>
                </div>

                <div class="col-lg-2 col-4">
                  <a
                    href="https://python.org/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-original-title="Python - Programming language that lets you work quickly and integrate systems more effectively"
                  >
                    <img
                      v-lazy="'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc3%2FPython-logo-notext.svg%2F1200px-Python-logo-notext.svg.png&f=1'"
                      class="img-fluid"
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
