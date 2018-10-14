import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    products: [],
  },

  getters: {  // Computer Properties
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0);
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
