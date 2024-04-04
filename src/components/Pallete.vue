<template>
  <div
    v-if="$route.path === '/'"
    style="display: flex; align-items: center; font-size: 12px"
  >
    <div v-for="(item, index) in tgColors" :key="item">
      <abbr :title="index">
        <div
          :style="{ 'background-color': item }"
          style="
            height: 20px;
            width: 20px;
            box-shadow: 1px 2px grey;
            margin-left: 4px;
            margin-top: 0px;
          "
        ></div>
      </abbr>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const tgColors = computed(() => {
  return window.Telegram.WebApp.themeParams
})
</script>
