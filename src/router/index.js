// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import state from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'main',
    meta: { auth: false },
    component: () => import('@/views/MainView.vue')
  },
  {
    path: '/completes',
    name: 'completes',
    meta: { auth: false },
    component: () => import('@/views/CompletesView.vue')
  },
  {
    path: '/active',
    name: 'active',
    meta: { auth: false },
    component: () => import('@/views/ActiveView.vue')
  },
  {
    path: '/create',
    name: 'create',
    meta: { auth: false },
    component: () => import('@/views/CreateView.vue')
  },
  {
    path: '/start',
    name: 'conditions',
    meta: { auth: false },
    component: () => import('@/views/ConditionsStartView.vue')
  },
  {
    path: '/end',
    name: 'conditionsEnd',
    meta: { auth: false },
    component: () => import('@/views/ConditionsView.vue')
  },
  {
    path: '/chaincode',
    name: 'chaincode',
    meta: { auth: false },
    component: () => import('@/views/ChaincodeView.vue')
  },
  {
    path: '/drafts',
    name: 'drafts',
    meta: { auth: false },
    component: () => import('@/views/DraftsView.vue')
  },
  {
    path: '/giv',
    name: 'giv',
    meta: { auth: false },
    component: () => import('@/views/DraftsView.vue')
  },
  {
    path: '/thanks',
    name: 'thanks',
    meta: { auth: false },
    component: () => import('@/views/ThanksView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   // Check if the user is authenticated or any other conditions
//   if (state.getters['user/isAuth'] && to.meta.auth) {
//     // Redirect the user to the Home route if not authenticated
//     next({ path: '/' })
//   } else {
//     // Proceed with the navigation
//     next()
//   }
// })

export default router
