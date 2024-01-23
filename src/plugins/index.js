// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import pathify from './vuex-pathify'
import store from '@/store'

export function registerPlugins(app) {
  loadFonts()
  app.use(vuetify).use(store).use(router).use(pathify)
}
