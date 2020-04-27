<template>
  <main>
    <loader v-show="false" />
    <div class="container">
      <navbar />
      <transition name="view">
        <config-component v-if="show" />
      </transition>
      <navbar-bottom />
    </div>
    <navmenu />
  </main>
</template>

<script>
// @ is an alias to /src
// import configComponent from "@/components/configComponent.vue";
import navbarBottom from "@/components/shared/navbar-bottom";
import navbar from "@/components/shared/navbar.vue";
import sections from "@/mixins/sections";
import navmenu from "@/components/menu/nav_menu.vue";
import loader from "@/components/shared/loader.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  mixins: [sections],
  components: {
    configComponent: () =>
      import(
        /* webpackChunkName: "configComponent" */ "@/components/configComponent.vue"
      ),
    navbarBottom,
    navmenu,
    navbar,
    loader
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapGetters(["isLoading"])
  },
  mounted() {
    this.show = !this.show;
    this.resize();
  }
};
</script>

<style>
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.view-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
