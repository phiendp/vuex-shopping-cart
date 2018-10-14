import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    products: [],
  },

  getters: {
    productsCount() {

    },
  },

  actions: {
    fetchProducts() {
      // Get all of the products
    },
  },

  mutations: {
    setProducts(state, products) {
      // Update products
      state.products = products;
    },
  },
});
