export function MainBtnHandle(name) {
  Telegram.WebApp.MainButton.setParams({
    text: name
  })
  Telegram.WebApp.MainButton.show()
}

export function BackBtnHandle() {
  Telegram.WebApp.BackButton.show()
}
