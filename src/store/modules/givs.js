import { make } from 'vuex-pathify'
import { users } from '@/utils/endpoints'
import router from '@/router'

const state = () => ({
  newGiv: {
    title: '', // название
    desc: '', // описание
    price: '', // цена участия
    //
    winnersCount: '', // кол-во победителей
    prize: '', // приз
    completeAs: '', // завершить по условию
    dateStart: '', // дата начала
    time: '', // время начала
    countTons: '', // количество монет для старта
    addressWallet: '' //
  },
  active: [],
  drafts: [
    {
      id: '1',
      title: 'Название', // название
      desc: 'Описание описание описание', // описание
      price: 2, // цена участия
      //
      winnersCount: '', // кол-во победителей
      prize: '', // приз
      completeAs: '', // завершить по условию
      dateStart: '', // дата начала
      time: '', // время начала
      countTons: '', // количество монет для старта
      addressWallet: '' //
    },
    {
      id: '1',
      title: 'Название', // название
      desc: 'Описание описание описание', // описание
      price: 2, // цена участия
      //
      winnersCount: '', // кол-во победителей
      prize: '', // приз
      completeAs: '', // завершить по условию
      dateStart: '', // дата начала
      time: '', // время начала
      countTons: '', // количество монет для старта
      addressWallet: '' //
    },
    {
      id: '1',
      title: 'Название', // название
      desc: 'Описание описание описание', // описание
      price: 2, // цена участия
      //
      winnersCount: '', // кол-во победителей
      prize: '', // приз
      completeAs: '', // завершить по условию
      dateStart: '', // дата начала
      time: '', // время начала
      countTons: '', // количество монет для старта
      addressWallet: '' //
    }
  ]
})

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  login({ commit }, payload) {
    users.post('login', payload).then(r => {
      if (r.data.data?.attributes) {
        commit('user/user', r.data.data.attributes, { root: true })
      } else {
        commit('user/user', r.data, { root: true })
      }
      router.push({ path: '/locations' })
      window.location.href = '/locations'
    })
  }
}

const getters = {
  isAuth(state) {
    // return !!state.user.id
    return true
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
