import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/login',
    //   name: 'Login',
    //   meta: { layout: 'auth' },
    //   component: () => import('../views/Login.vue')
    // },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   meta: { layout: 'auth' },
    //   component: () => import('../views/Register.vue')
    // },
    {
      path: "/note/:id?",
      name: "note",
      props: true,
      meta: { layout: "note" },
      component: () => import("../views/Note.vue")
    },
    {
      path: "/",
      name: "home",
      meta: { layout: "home"},
      component: () => import("../views/Home.vue")
    }
  ]
})
