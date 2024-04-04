import { make } from 'vuex-pathify'
import { users } from '@/utils/endpoints'
import router from '@/router'

const state = () => ({
  newGiv: {
    name: 'some_name 3',
    description: 'some descr',
    owner_id: 11,
    winner_wallet: '0x123',
    post_created: true,
    is_started: true,
    users_count: 2,
    ticket_price: 1,
    message: 'some mesasge',
    contract_wallet: '0x666',
    channels: [
      {
        chat_id: 1,
        name: 'test'
      }
    ],
    start_time: '2014-11-12T11:45:26.371Z'
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
  },
  getLotto() {}
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
