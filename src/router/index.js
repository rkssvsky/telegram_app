// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import state from '@/store/index'

const routes = [
  {
    path: '/active',
    name: 'active',
    meta: { auth: false, transition: 'slide-fade' },
    component: () => import('@/views/ActiveView.vue')
  },
  {
    path: '/completes',
    name: 'completes',
    meta: { auth: false, transition: 'slide-left' },
    component: () => import('@/views/CompletesView.vue')
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
