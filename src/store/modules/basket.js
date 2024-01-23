// Pathifyd
import { make } from 'vuex-pathify'

const state = () => ({
  basket: []
})

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  addBasketHandle({ state }, payload) {
    state.basket.push(payload)
  },
  deleteBasketItem({ state }, property_id) {
    console.log(property_id)
    state.basket = state.basket.filter(item => item.property_id !== property_id)
  }
}

const getters = {
  sumPrice(state) {
    return state.basket.reduce((total, item) => total + item.price, 0)
  },
  basketItems(state) {
    return state.basket.map(item => item.property_id) ?? false
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
