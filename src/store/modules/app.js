import { dispatch, make } from 'vuex-pathify'
import { TonConnectUI } from '@tonconnect/ui'

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://giv.mrakovo.ru/tonconnect-manifest.json'
})

tonConnectUI.uiOptions = {
  language: 'ru'
}

const { modal } = tonConnectUI

// Open and close the modal
await modal.open()

// Get the current modal state
const currentState = modal.state

// Subscribe and unsubscribe to modal state changes
const unsubscribe = modal.onStateChange(state => {
  /* ... */
})
unsubscribe()
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
  },
  tonConnect() {},
  tonTransaction() {}
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
