import { TonConnectUI } from '@tonconnect/ui'
import { toUserFriendlyAddress } from '@tonconnect/sdk'
import { ref } from 'vue'

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://giv.mrakovo.ru/tonconnect-manifest.json',
  buttonRootId: 'test'
})

tonConnectUI.uiOptions = {
  language: 'ru',
  twaReturnUrl: 'https://t.me/durov'
}

const { modal } = tonConnectUI
let UserFriendlyAddress = ref(false)

const unsubscribe = tonConnectUI.onStatusChange(walletAndwalletInfo => {
  let isTestnet = walletAndwalletInfo.account.chain === '-3'
  UserFriendlyAddress.value = toUserFriendlyAddress(
    walletAndwalletInfo.account.address,
    isTestnet
  )
  console.log(walletAndwalletInfo)
})

async function disconnect() {
  await tonConnectUI.disconnect()
  UserFriendlyAddress.value = false
}

export { UserFriendlyAddress, modal, disconnect }
