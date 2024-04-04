import { dispatch, make } from 'vuex-pathify'

const state = () => ({
  links: [
    { title: 'Активные', value: 'active', icon: 'mdi-home-circle-outline' },
    { title: 'Завершенные', value: 'completes', icon: 'mdi-texture-box' },
    { title: 'Создать', value: 'create', icon: 'mdi-texture-box' }
  ],
  darkMode: false
})
const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init() {
    dispatch('user/fetch')
  }
}

const getters = {
  mobile() {
    return window.screen.width < 600
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
