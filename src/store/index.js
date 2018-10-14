import Vuex from 'vuex';
import Vue from 'vue';
import shop from '@/api/shop';

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

  actions: { // Methods
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        shop.getProducts((products) => {
          commit('setProducts', products);
          resolve();
        });
      });
    },
  },

  mutations: {
    setProducts(state, products) {
      // Update products
      state.products = products;
    },
  },
});
