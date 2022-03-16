import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";
import Error from "@/views/Error";
import Home from "@/views/Home";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    },
    {
      path: "*",
      name: "Error",
      component: Error
    }
  ]
});
