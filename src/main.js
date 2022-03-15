import "@/assets/css/tailwind.css";
import { dollarFilter, percentFilter } from "@/filter";
import router from "@/router";
import Vue from "vue";
import App from "./App.vue";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
