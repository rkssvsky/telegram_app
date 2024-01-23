import { createStore } from 'vuex'
import pathify from 'vuex-pathify'
import * as modules from '@/store/modules'

const store = createStore({
  plugins: [pathify.plugin],
  modules
})

store.dispatch('app/init')

store.subscribe(mutation => {
  if (!mutation.type.startsWith('user/')) return
  store.dispatch('user/update', mutation)
})

export default store
