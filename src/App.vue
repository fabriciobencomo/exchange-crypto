<template>
  <main>
    <px-header :links="links" />
    <div class="container px-5 sm:px-20 py-20 flex justify-center">
      <router-view />
    </div>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "app",
  components: { PxHeader },
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } }
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } }
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "xrp" } }
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
