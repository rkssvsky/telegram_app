import { TonConnectUI } from '@tonconnect/ui'
import { ref } from 'vue'
import { toUserFriendlyAddress } from '@tonconnect/sdk'

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://giv.mrakovo.ru/tonconnect-manifest.json',
  buttonRootId: 'test'
})

tonConnectUI.uiOptions = {
  language: 'ru',
  twaReturnUrl: 'https://t.me/durov'
}
const { modal } = tonConnectUI

const currentWallet = ref(tonConnectUI.wallet)
const currentWalletInfo = ref(tonConnectUI.walletInfo)
const currentAccount = ref(tonConnectUI.account)
const currentIsConnectedStatus = ref(tonConnectUI.connected)

// const rawAddress = tonConnectUI.wallet.account.address // like '0:abcdef123456789...'
// const userFriendlyAddress = toUserFriendlyAddress(rawAddress)

export {
  currentWalletInfo,
  currentWallet,
  currentAccount,
  currentIsConnectedStatus,
  modal,
  tonConnectUI
}
