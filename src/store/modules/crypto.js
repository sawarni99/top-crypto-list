import axios from "axios";

const state = {
  cryptoList: [],
};
const getters = {
  cryptoList: (state) => {
    return state.cryptoList;
  },
};
const actions = {
  async fetchCryptoList({ commit }) {
    const response = await axios.get(
      "https://api.coinranking.com/v1/public/coins/?limit=100"
    );
    commit("setCryptoList", response.data.data.coins);
  },
};
const mutations = {
  setCryptoList: (state, cryptoList) => (state.cryptoList = cryptoList),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
