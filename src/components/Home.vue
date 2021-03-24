<template>
  <div class="home">
    <h3 class="header">Top Crypto Currency List</h3>
    <div class="home-body">
      <div v-for="item in pageOfItems" :key="item.id">{{ item.name }}</div>
    </div>
    <div class="pagination">
      <jw-pagination
        :pageSize="20"
        :items="listCurrency"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </div>
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
      listCurrency: [],
      pageOfItems: [],
    };
  },
  mounted() {
    Vue.axios
      .get("https://api.coinranking.com/v1/public/coins/?limit=100")
      .then((resp) => {
        console.log(resp.data.data.coins);
        this.listCurrency = resp.data.data.coins;
      });
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style>
.home {
  font-family: "Roboto", sans-serif;
}
</style>