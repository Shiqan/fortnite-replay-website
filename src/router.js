import Vue from "vue";
import Router from "vue-router";

import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import LandingExampe from "./views/LandingExample.vue";
import AboutUs from "./views/AboutUs.vue";
import Login from "./views/Login.vue";
import Upload from "./views/Upload.vue";
import Live from "./views/Live.vue";
import Download from "./views/Download.vue";
import Register from "./views/Register.vue";
import Player from "./views/Player.vue";
import MatchDetails from "./views/MatchDetails.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "index",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/player/:player",
      name: "player",
      components: {
        header: AppHeader,
        default: Player,
        footer: AppFooter
      }
    },
    {
      path: "/match/:id",
      name: "match-details",
      components: {
        header: AppHeader,
        default: MatchDetails,
        footer: AppFooter
      }
    },
    {
      path: "/live",
      name: "live",
      components: {
        header: AppHeader,
        default: Live,
        footer: AppFooter
      }
    },
    {
      path: "/upload",
      name: "upload",
      components: {
        header: AppHeader,
        default: Upload,
        footer: AppFooter
      }
    },
    {
      path: "/download",
      name: "download",
      components: {
        header: AppHeader,
        default: Download,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/about-us",
      name: "about-us",
      components: {
        header: AppHeader,
        default: AboutUs,
        footer: AppFooter
      }
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/example",
      name: "example",
      components: {
        header: AppHeader,
        default: LandingExampe,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
