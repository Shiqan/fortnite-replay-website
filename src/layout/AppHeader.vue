<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link to="/" slot="brand" class="navbar-brand mr-lg-5">
                <img v-lazy="'img/brand/white.png'" class="card-img">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link to="/">
                        <img v-lazy="'img/brand/blue.png'">
                    </router-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <router-link to="/login" class="nav-link nav-link-icon">
                        <span class="nav-link-inner--text">Getting Started</span>
                    </router-link>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link to="/upload" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                            <i class="fa fa-cloud-upload mr-2"></i>
                        </span>
                        <span class="nav-link-inner--text">Upload</span>
                    </router-link>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
  }
};
</script>
<style>
</style>
