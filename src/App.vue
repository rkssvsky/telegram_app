<template>
  <v-app>
    <header-menu v-if="isAuth" />
    <v-main>
      <router-view v-slot="{ Component, route }">
        <!-- Use a custom transition or fallback to `fade` -->
        <Transition type="transition" name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </v-main>
    <object-view-dialog />
    <bottom-navigation v-if="$vuetify.display.xs && isAuth" />
    <range-date-dialog />
  </v-app>
</template>

<script setup>
import VueHeader from '@/components/TheHeader.vue'
import { computed, watch, nextTick } from 'vue'
import { get, sync } from 'vuex-pathify'
import { useTheme } from 'vuetify'

const isAuth = computed(() => {
  return get('user/isAuth')
})
import HeaderMenu from '@/components/common/header/HeaderMenu.vue'
import ObjectViewDialog from '@/components/objects/ObjectViewDialog.vue'
import BottomNavigation from '@/components/common/BottomNavigation.vue'
import RangeDateDialog from '@/components/basket/RangeDateDialog.vue'

import { watch, nextTick, onMounted } from 'vue'
import { dispatch, get, sync } from 'vuex-pathify'
import { useTheme } from 'vuetify'

const theme = useTheme()
const { isAuth } = get('user/*')
const { snackbar, snackbarText, snackbarColor } = sync('squares/*')

onMounted(() => {
  dispatch('user/getUserWallet')
})

watch(theme.global.name, themeTransition)
function themeTransition() {
  // console.log('switchTheme')

  const x = performance.now()
  for (let i = 0; i++ < 1e7; (i << 9) & ((9 % 9) * 9 + 9));
  if (performance.now() - x > 10) return

  const el = document.querySelector('[data-v-app]')

  const copy = el.cloneNode(true)
  copy.classList.add('app-copy')
  const rect = el.getBoundingClientRect()
  copy.style.top = rect.top + 'px'
  copy.style.left = rect.left + 'px'
  copy.style.width = rect.width + 'px'
  copy.style.height = rect.height + 'px'

  const targetEl = document.activeElement
  const targetRect = targetEl.getBoundingClientRect()
  const left = targetRect.left + targetRect.width / 2 + window.scrollX
  const top = targetRect.top + targetRect.height / 2 + window.scrollY
  el.style.setProperty('--clip-pos', `${left}px ${top}px`)
  el.style.removeProperty('--clip-size')

  nextTick(() => {
    // console.log('nextTick')
    el.classList.add('app-transition')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.setProperty(
          '--clip-size',
          Math.hypot(window.innerWidth, window.innerHeight) + 'px'
        )
      })
    })
  })

  document.body.append(copy)

  Array.from(copy.querySelectorAll('[data-scroll-x], [data-scroll-y]')).forEach(
    el => {
      el.scrollLeft = +el.dataset.scrollX
      el.scrollTop = +el.dataset.scrollY
    }
  )

  function onTransitionend(e) {
    if (e.target === e.currentTarget) {
      copy.remove()
      el.removeEventListener('transitionend', onTransitionend)
      el.removeEventListener('transitioncancel', onTransitionend)
      el.classList.remove('app-transition')
      el.style.removeProperty('--clip-size')
      el.style.removeProperty('--clip-pos')
    }
  }
  el.addEventListener('transitionend', onTransitionend)
  el.addEventListener('transitioncancel', onTransitionend)
}
</script>
<style>
.app-copy {
  position: fixed !important;
  z-index: -1 !important;
  pointer-events: none !important;
  contain: size style !important;
  overflow: clip !important;
}

.app-transition {
  --clip-size: 0;
  --clip-pos: 0 0;
  clip-path: circle(var(--clip-size) at var(--clip-pos));
  transition: clip-path 0.6s ease-out;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
