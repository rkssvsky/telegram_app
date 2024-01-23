import { dispatch, make } from 'vuex-pathify'

const state = () => ({
  links: [
<<<<<<< HEAD
    { title: 'Активные', value: 'active', icon: 'mdi-home-circle-outline' },
    { title: 'Завершенные', value: 'completes', icon: 'mdi-texture-box' },
    { title: 'Создать', value: 'create', icon: 'mdi-texture-box' }
=======
    // { title: 'Главная', patch: '/', icon: 'mdi-home-circle-outline' },
    { title: 'Локации', patch: '/locations', icon: 'mdi-texture-box' }
>>>>>>> cf4b7f07fc32633fd8aff422c9d7857a3432a4a5
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

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
