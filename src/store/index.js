import Vuex from 'vuex';
import Vue from 'vue';
import shop from '@/api/shop';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {  // Data
    products: [],
    cart: [],
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
    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id);

        if (!cartItem) {
          context.commit('pushProductToCart', product.id);
        } else {
          context.commit('incrementItemQuantity', cartItem);
        }
        context.commit('decrementProductInventory', product);
      }
    },
  },

  mutations: {
    setProducts(state, products) {
      // Update products
      state.products = products;
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1,
      });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    },
  },
});
