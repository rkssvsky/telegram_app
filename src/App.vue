<template>
  <v-app>
    <!--    <the-header />-->
    <v-main>
      <router-view v-slot="{ Component }">
        <Transition type="transition" name="slide-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { watch, nextTick, onMounted } from 'vue'
import { dispatch, get, sync } from 'vuex-pathify'
import { useTheme } from 'vuetify'
import TheHeader from '@/components/TheHeader.vue'

const theme = useTheme()
// const { isAuth } = get('user/*')

// onMounted(() => {
//   dispatch('user/getUserWallet')
// })

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

.bottom-menu {
  border: 1px white solid;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  transform: translateX(40px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
