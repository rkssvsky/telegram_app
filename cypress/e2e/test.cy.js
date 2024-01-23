const { faker } = require('@faker-js/faker')

const randomEmail = faker.internet.email()
const randomPassword = faker.internet.password()
const randomId = faker.internet.userName()
const randomPrice = faker.internet.port()
const number = Math.floor(Math.random() * 10) + 1
const number2 = Math.floor(Math.random() * (28 - 11) + 11)
const numberMonth = Math.floor(Math.random() * 5) + 1

const login = () => {
  cy.visit('/')
  cy.get('#cy_email').type(randomEmail)
  cy.get('#cy_pwd').type(randomPassword)
  cy.get('#cy_login').click()
  cy.location('pathname', { timeout: 10000 }).should('eq', '/profile')
}

const reg = () => {
  cy.visit('/')
  cy.get('#cy_createUser').click()
  cy.get('#cy_email').type(randomEmail)
  cy.get('#cy_pwd').type(randomPassword)
  cy.get('#cy_pwd2').type(randomPassword)
  cy.get('#cy_createUser').click()
  cy.location('pathname', { timeout: 10000 }).should('eq', '/profile')
  cy.get('#cy_wallet', { timeout: 15000 })
    .find('.v-list-item-title')
    .should('exist')
}

function addToCart(object) {
  if (object) {
    cy.get('.v-btn').contains('Локации').click()
    cy.get('.v-btn').contains('Посмотреть').click()
    cy.get('#sale_08').click()
    cy.get('.v-btn').contains('В корзину').click()
    cy.get('.v-btn').contains('Закрыть окно').click()
  } else {
    cy.get('.v-btn').contains('Локации').click()
    cy.get('.v-btn').contains('Посмотреть').click()
    cy.get('#sale_08').click()
    cy.get('.v-btn').contains('В корзину').click()
    cy.get('.v-btn').contains('Закрыть окно').click()
    cy.get('#sale_07').click()
    cy.get('.v-btn').contains('В корзину').click()
    cy.get('.v-btn').contains('Закрыть окно').click()
  }
}

describe('Тестируем DigitalSquares ', () => {
  context('Авторизация', () => {
    it('Регистрация', reg)
  })

  // context('Создание и удаление объектов', () => {
  //   beforeEach(login)
  //
  //   it('Создание удаление объекта', () => {
  //     // Создание объекта
  //     cy.get('.v-btn').contains('Создать').wait(2000).click({ timeout: 5000 })
  //     cy.get('#cy_id').type(randomId)
  //     cy.get('#cy_price').type(randomPrice)
  //     cy.get('#cy_createObj').click({ timeout: 5000 })
  //
  //     // Проверить создался ли объект и удалить его
  //     cy.get('[id="cy_propertyID"]:contains("' + randomId + '")', {
  //       timeout: 10000
  //     })
  //       .parent('td')
  //       .parent('tr')
  //       .find('.v-btn')
  //       .contains('Удалить')
  //       .click()
  //   })
  // })

  // context('Проверка корзины и аренда объектов', () => {
  //   beforeEach(login)
  //   it('Добавление и удаление из корзины', () => {
  //     // добавление в корзину объектов
  //     addToCart()
  //
  //     // Просмотр корзины и проверка корзины на количество и добавленные объекты
  //     cy.get('.v-badge__badge').contains('2').should('exist').click()
  //     cy.get('.v-list-item__content').contains('sale_07').should('exist')
  //     cy.get('.v-list-item__content').contains('sale_08').should('exist')
  //
  //     // Удаление товаров из корзины
  //     cy.get('#cy_deleteBasketItem').click()
  //
  //     // Переход на страницу корзины проверка и удаление товара
  //     cy.get('.v-btn').contains('Перейти в корзину').click()
  //     cy.get('td').contains('sale_07').should('exist')
  //     cy.get('#cy_deleteBasketItem').click()
  //     cy.get('.v-sheet').contains('Нет товаров в корзине').should('exist')
  //
  //     // добавление в корзину объектов
  //     addToCart()
  //     cy.get('.v-badge__badge').click()
  //     cy.get('.v-btn').contains('Перейти в корзину').click()
  //
  //     // аренда объектов
  //     cy.get('.dp__pointer').click()
  //   })
  // })

  context('Аренда объектов', () => {
    beforeEach(login)
    it('Добавление в корзину и аренда', () => {
      // добавление в корзину объектов
      addToCart(1)

      // Просмотр корзины и проверка корзины на количество и добавленные объекты
      cy.get('.v-badge__badge').click()
      cy.get('.v-list-item__content').contains('sale_08').should('exist')

      // Переход на страницу корзины проверка и удаление товара
      cy.get('.v-btn').contains('Перейти в корзину').click()
      cy.get('td').contains('sale_08').should('exist')

      // Аренда объектов
      cy.get('.dp__pointer').click().wait(2000)
      cy.get('[aria-label="Next month"]').then($elements => {
        const count = 5 // количество кликов
        for (let i = 0; i < count; i++) {
          cy.wrap($elements).click()
        }
      })
      cy.get('.dp__cell_inner', { timeout: 5000 })
        .contains(String(number))
        .click()
        .wait(1000)
      cy.get('.dp__cell_inner', { timeout: 5000 })
        .contains(String(number2))
        .click()
        .wait(1000)
      cy.get('.dp__action_select', { timeout: 5000 })
        .contains('Выбрать')
        .click()
        .wait(1000)
      cy.get('.v-btn').contains('Арендовать').click().wait(1000)

      // Проверка аренды
      cy.get('#cy_profileIcon').click()
      cy.get('.v-btn').contains('Арендованные').click()
      cy.get('.v-btn', { timeout: 20000 })
        .contains('sale_08', { timeout: 20000 })
        .should('exist')

      // Удаление аренды
      cy.get('[id="cy_propertyID"]:contains("sale_08")', {
        timeout: 10000
      })
        .wait(3000)
        .parent('td')
        .parent('tr')
        .find('.v-btn')
        .contains('Удалить')
        .click()
      // проверка удаления
      cy.get('[id="cy_propertyID"]:contains("sale_08")', {
        timeout: 15000
      }).should('not.exist')
    })
  })
})
