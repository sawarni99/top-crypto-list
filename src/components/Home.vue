<template>
  <div class="home">
    <h1 class="header">Top Crypto Currency List</h1>
    <div class="table">
      <div class="column">
        <b class="table-heading">Icon</b>
        <div v-for="item in pageOfItems" :key="item.id">
          {{ item.name }}
        </div>
      </div>
      <div class="column">
        <b class="table-heading">Name</b>
        <div v-for="item in pageOfItems" :key="item.id">
          {{ item.name }}
        </div>
      </div>
      <div class="column">
        <b class="table-heading">Symbol</b>
        <div v-for="item in pageOfItems" :key="item.id">
          {{ item.symbol }}
        </div>
      </div>
      <div class="column">
        <b class="table-heading">Price</b>
        <div v-for="item in pageOfItems" :key="item.id">
          {{ item.price }}
        </div>
      </div>
      <div class="column">
        <b class="table-heading">Change</b>
        <div v-for="item in pageOfItems" :key="item.id">
          {{ item.change }}
        </div>
      </div>
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
        console.log(resp.data);
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.header {
  color: rgb(38, 77, 150);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.table {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgb(209, 209, 209);
  width: 90%;
  flex-wrap: wrap;
  margin: 1%;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(46, 46, 46);
  margin: 3%;
}
.table-heading {
  font-size: 20px;
  margin-bottom: 15px;
}
.pagination {
  background: rgb(189, 189, 223);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>