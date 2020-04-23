import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/todo",
      name: "todo",
      meta: { layout: "popup" },
      component: () => import("../views/Todo.vue")
    },
    {
      path: "/",
      name: "home",
      meta: { layout: "home"},
      component: () => import("../views/Home.vue")
    }
  ]
})
