import { make } from 'vuex-pathify'
import { users, wallet } from '@/utils/endpoints'
import router from '@/router'

const state = () => ({
  user: {}
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
  register({ state, dispatch }, payload) {
    users.post('register', payload).then(r => {
      state.user = r.data
      dispatch('update')
      window.location.href = '/profile'
    })
  },
  logout({ state, dispatch }) {
    state.user = {}
    state.walletTX = ''
    dispatch('update')
    window.location.href = '/login'
  },
  edit({ commit }, userObj) {
    users.put('', userObj.value).then(r => {
      console.log(r)
      commit('user/user', r.data, { root: true })
    })
  },
  createWallet({ state, dispatch, commit }) {
    console.log('user/createWallet')
    if (state.user.id) {
      wallet
        .post('', {
          is_chaincode: false,
          user_id: state.user.login
        })
        .then(res => {
          commit('walletTX', res.data.wallet)
          state.loadWallet = false
          dispatch('update')
          location.reload()
        })
    }
  },

  getUserWallet({ state, dispatch }) {
    console.log('user/getUserWallet')
    if (state.user.id) {
      wallet
        .get('my')
        .then(r => {
          // console.log(r.data.wallet)
          state.walletTX = r.data.wallet
          dispatch('update')
        })
        .catch(error => {
          // если не авторизован то делаем рефрешь
          if (error.response.status) {
            dispatch('refreshToken')
          } else {
            dispatch('createWallet')
          }
        })
    }
  },

  refreshToken({ state, commit }) {
    users
      .post('refresh', {
        refresh_token: state.user.token_refresh
      })
      .then(r => {
        console.log(r)
        commit('user/user', r.data, { root: true })
      })
  },

  fetch: ({ commit }) => {
    console.log('GET user from localStorage')
    const local = localStorage.getItem('ds@user') ?? '{}'
    const user = JSON.parse(local)

    for (const key in user) {
      if (key === 'user' || key === 'walletTX') {
        commit(key, user[key])
      }
    }
  },
  update: ({ state }) => {
    console.log('SET user in localstorage')
    localStorage.setItem(
      'ds@user',
      JSON.stringify({ user: state.user, walletTX: state.walletTX })
    )
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
