import About from "@/views/About";
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
      path: "*",
      name: "Error",
      component: Error
    }
  ]
});
