import { make } from 'vuex-pathify'
import { object, rental } from '@/utils/endpoints'
import store from '@/store'
import router from '@/router'

const state = () => ({
  sales: [],
  locations: [
    {
      title: 'ЖД Вокзал "Адлерский"',
      disable: false
    },
    {
      title: 'ЖД Вокзал "Имиритинский"',
      disable: true
    },
    {
      title: 'ЖД Станция "Мацеста"',
      disable: true
    }
  ],
  currentMeterInfo: {},
  activeTab: '',
  myLocations: [],
  rentedList: [],
  isLoadingTooltipInfo: true,
  loaders: {
    createObj: false,
    createRent: false
  },
  snackbar: false,
  snackbarText: 'Успешно',
  snackbarColor: 'green',
  bottomDrawer: false
})

const mutations = make.mutations(state)
const actions = {
  ...make.actions(state),
  init() {
    console.log('init action')
  },

  createObject({ state }, payload) {
    state.loaders.createObj = true
    object
      .post('', payload.value)
      .then(() => {
        state.loaders.createObj = false
        state.snackbar = true
        store.state.user.activeTab = 'MyObjectsList'
      })
      .catch(e => {
        state.loaders.createObj = false
        state.snackbar = true
        state.snackbarText = e
        store.state.user.activeTab = 'MyObjectsList'
      })
  },
  getMyObjects({ state, commit }) {
    if (store.state.user.walletTX) {
      object.get(`owner/${store.state.user.walletTX ?? false}`).then(r => {
        commit('squares/myLocations', r.data, { root: true })
        // state.myLocations = r.data
      })
    }
  },
  deleteObject({ state, dispatch }, idObject) {
    object
      .delete(`${idObject}`)
      .then(() => {
        state.snackbar = true
        dispatch('getMyObjects')
      })
      .catch(e => {
        state.snackbar = true
        state.snackbarText = e
      })
  },
  getObjectByID({ state }, id) {
    object
      .get(`${id}`)
      .then(r => {
        state.isLoadingTooltipInfo = false
        state.currentMeterInfo = r.data
      })
      .catch(() => {
        state.isLoadingTooltipInfo = true
      })
  },
  createRent({ state }, payload) {
    state.loaders.createRent = true
    const rentObj = []
    payload.basket.value.forEach(basket => {
      rentObj.push({
        property_id: basket.property_id,
        tenant_id: payload.walletTX.value,
        start_date: payload.date.value[0],
        end_date: payload.date.value[1]
      })
    })
    rental
      .post('', rentObj)
      .then(() => {
        state.snackbar = true
        state.loaders.createRent = false
        router.push({ path: '/profile' })
      })
      .catch(e => {
        state.loaders.createRent = false
        state.snackbar = true
        state.snackbarText = e
      })
  },
  getMyRents({ state }) {
    rental.get(`tenant/${store.state.user.walletTX}`).then(resp => {
      const { data } = resp
      state.rentedList = []
      data.forEach(arr => {
        rental.get(`${arr.id}`).then(resp => {
          state.rentedList.push(resp.data)
        })
      })
    })
  },
  deleteRent({ state, dispatch }, idObject) {
    rental
      .delete(String(idObject))
      .then(() => {
        state.snackbar = true
        dispatch('getMyRents')
      })
      .catch(e => {
        state.snackbar = true
        state.snackbarText = e
      })
  },
  seedTestObjects() {
    alert('test')
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
