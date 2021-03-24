<template>
  <div class="home">
    <h1 class="header">Top Crypto Currency List</h1>
    <div class="table">
      <table>
        <tr>
          <td class="heading"><b>Icon</b></td>
          <td class="heading"><b>Name</b></td>
          <td class="heading"><b>Symbol</b></td>
          <td class="heading"><b>Price</b></td>
          <td class="heading"><b>Change</b></td>
        </tr>
        <tr v-for="item in pageOfItems" :key="item.id">
          <td class="data-item">
            <img :src="item.iconUrl" alt="" height="15px" />
          </td>
          <td class="data-item">{{ item.name }}</td>
          <td class="data-item">{{ item.symbol }}</td>
          <td class="data-item">${{ item.price }}</td>
          <td class="data-item">{{ item.change }}%</td>
        </tr>
      </table>
    </div>
    <div class="pagination">
      <jw-pagination
        :pageSize="itemsInPage"
        :items="cryptoList"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
    <div class="item-button">
      Items in the Page {{ " " }}
      <button v-on:click="onClick(10)">10</button>
      <button v-on:click="onClick(25)">25</button>
      <button v-on:click="onClick(50)">50</button>
      <button v-on:click="onClick(100)">100</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
//import Column from "./Column";
Vue.use(VueAxios, axios);

export default {
  name: "Home",
  components: {
    //Column,
  },
  data() {
    return {
      pageOfItems: [],
      itemsInPage: 10,
    };
  },
  methods: {
    ...mapActions(["fetchCryptoList"]),
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    onClick(number) {
      this.itemsInPage = number;
    },
  },
  computed: mapGetters(["cryptoList"]),
  created() {
    this.fetchCryptoList();
    // Every 2 sec the currency updates...
    window.setInterval(() => {
      this.fetchCryptoList();
      console.log("Updated crypto!!");
    }, 2000);
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
  border-radius: 10px;
  width: 90%;
  flex-wrap: wrap;
  margin: 1%;
  padding: 2%;
}
td {
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  color: rgb(39, 39, 39);
}
.heading {
  font-size: large;
}
.item-button {
  margin: 1%;
}
.pagination {
  background: rgb(198, 198, 247);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>