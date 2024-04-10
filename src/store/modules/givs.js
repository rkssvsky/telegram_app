import { make } from 'vuex-pathify'
import router from '@/router'
import { lottery } from '@/utils/endpoints'

const state = () => ({
  newGiv: {
    name: '',
    description: 'Описание',
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
    prize: '',
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
    }
  ]
})

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  login({ commit }, payload) {
    // users.post('login', payload).then(r => {
    //   if (r.data.data?.attributes) {
    //     commit('user/user', r.data.data.attributes, { root: true })
    //   } else {
    //     commit('user/user', r.data, { root: true })
    //   }
    //   router.push({ path: '/locations' })
    //   window.location.href = '/locations'
    // })
  },
  getAllLottery() {
    lottery.get('/list').then(r => {
      console.log(r)
    })
  },
  getLotteryById() {
    lottery.get('/list').then(r => {
      console.log(r)
    })
  },
  createLottery({ state }) {
    lottery.post('', state.newGiv).then(r => {
      console.log(r)
    })
  },
  updateLotteryById() {
    lottery.put('/list').then(r => {
      console.log(r)
    })
  },
  deleteLottery() {
    lottery.delete('/list').then(r => {
      console.log(r)
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
