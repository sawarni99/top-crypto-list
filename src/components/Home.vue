<template>
  <div></div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
  name: "Home",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    Vue.axios
      .get("https://api.coinranking.com/v1/public/coins/?limit=100")
      .then((resp) => {
        this.list = resp.data.data.coin;
      });
  },
};
</script>
