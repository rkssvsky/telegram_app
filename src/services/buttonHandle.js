export function MainBtnHandle(name, active) {
  Telegram.WebApp.MainButton.setParams({
    text: name,
    is_active: active,
    backgroundColor: '#aa1388'
  })
  Telegram.WebApp.MainButton.show()
}

export function BackBtnHandle() {
  Telegram.WebApp.BackButton.show()
}
