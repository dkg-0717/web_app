import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
