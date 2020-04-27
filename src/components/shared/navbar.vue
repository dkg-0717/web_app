<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <button class="navbar-toggler d-block" type="button" @click="openMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <img src="@/assets/top-logo.png" class="top-logo" alt="" />
    </nav>
  </header>
</template>

<script>
import menuAnimation from "@/plugins/menu/menu.js";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapGetters(["isActive", "getTitle"])
  },
  methods: {
    ...mapActions(["set_logout"]),
    openMenu() {
      let menu = new menuAnimation();
      menu.run();
    }
  }
};
</script>

<style>
@import url("../../assets/styles/navbar.css");
</style>
