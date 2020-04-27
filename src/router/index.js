import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  // {
  //     path: '*',
  //     redirect: '/login'
  // },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   console.log(next);
// });

export default router;
