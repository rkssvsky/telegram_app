import { dispatch, make } from 'vuex-pathify'
import {
  modal,
  currentWallet,
  currentWalletInfo,
  currentIsConnectedStatus,
  tonConnectUI
} from '@/services/tonConnect'

import { toUserFriendlyAddress } from '@tonconnect/sdk'

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
  tonConnect() {
    modal.open()
  },
  tonTransaction() {
    console.log(currentWallet)
    console.log(currentWalletInfo)
    console.log(currentIsConnectedStatus)
    console.log(
      toUserFriendlyAddress(tonConnectUI.wallet.account.address, true)
    )
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
