<template>
  <v-app>
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
import { onMounted } from 'vue'

onMounted(() => {
  tgThemeHandle()
  let consts = {
    primary: '#0687C9', // первичный цвет
    secondary: '#394a58', // вторичный цвет
    surface: '#fff', // поверхность
    background: '#F2F2F2', // фон
    error: '#e21a1a',
    info: '#33d9ff',
    success: '#6bff26',
    warning: '#ff520f'
  }
  let colors = {
    accent_text_color: '#6ab2f2',
    bg_color: '#17212b',
    button_color: '#5288c1',
    button_text_color: '#ffffff',
    destructive_text_color: '#ec3942',
    header_bg_color: '#17212b',
    hint_color: '#708499',
    link_color: '#6ab3f3',
    secondary_bg_color: '#232e3c',
    section_bg_color: '#17212b',
    section_header_text_color: '#6ab3f3',
    subtitle_text_color: '#708499',
    text_color: '#f5f5f5'
  }
})

function tgThemeHandle() {
  console.log(window.Telegram)
  const colors = window.Telegram.WebApp.themeParams
  const theme = document.querySelector('.v-theme--light')
  theme.style.setProperty('--v-theme-primary', colors.accent_text_color)
  theme.style.setProperty('--v-theme-background', colors.bg_color)
  theme.style.setProperty('--v-theme-text-color', '#333')
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
