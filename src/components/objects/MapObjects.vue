<template>
  <div class="wrapper">
    <div
      v-html="svgMap"
      @click="handleClick"
      @mouseover="handleMouseover"
      @mouseout="handleMouseout"
      @mousemove="handleMousemove"
      :class="{ 'pointer-cursor': isPointerCursor }"
      style="transform: scale(1)"
    ></div>
    <div
      v-if="isTooltip"
      class="tooltip"
      :style="{ top: tooltipTop + 'px', left: tooltipLeft + 'px' }"
    >
      <div v-if="isLoadingTooltipInfo">
        <v-progress-circular
          color="#81BFFF"
          indeterminate
        ></v-progress-circular>
        Загрузка
      </div>
      <div v-else>
        <v-card color="transparent" elevation="0">
          <v-card-title>
            Объект: {{ currentMeterInfo.property_id }}
          </v-card-title>
          <v-card-text>
            <ParametersInfo />
          </v-card-text>
          <v-card-actions class="text-subtitle-2" style="line-height: 1.1">
            * нажмите на выделенную область что бы получить полную информацию
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import testSVG from '@/assets/test.svg'
import ParametersInfo from '@/components/objects/ParametersInfo.vue'
import { dispatch, sync } from 'vuex-pathify'
import { onMounted, ref } from 'vue'

let { infoOverlay, currentMeterInfo, isLoadingTooltipInfo, bottomDrawer } =
  sync('squares/*')

const svgMap = ref('')
const isPointerCursor = ref(false)
const tooltipTop = ref(0)
const tooltipLeft = ref(0)
const isTooltip = ref(false)

onMounted(() => {
  fetch(testSVG)
    .then(response => response.text())
    .then(svg => {
      svgMap.value = svg
    })
})

function handleClick(event) {
  const id = event.target.id
  if (id) {
    if (id.includes('isRented')) {
      return
    }
    currentMeterInfo.value.id = id
    isTooltip.value = false
    dispatch('squares/getObjectByID', id)
    bottomDrawer.value = !bottomDrawer.value
  }
  // infoOverlay.value = !infoOverlay.value
}
function handleMouseover(event) {
  if (isTouchDevice()) return
  const mouseover = event.target
  const id = event.target.id
  if (mouseover.id.includes('isRented')) {
    return
  }
  if (mouseover.id.includes('sale')) {
    mouseover.style.fill = '#bcdeff'
    isPointerCursor.value = true
    isTooltip.value = true
    currentMeterInfo.value.id = id
    dispatch('squares/getObjectByID', id)
  }
}

function handleMouseout(event) {
  const mouseover = event.target
  if (mouseover.id.includes('isRented')) {
    return
  }
  if (mouseover.id.includes('sale')) {
    mouseover.style.fill = '#81BFFF'
    isPointerCursor.value = false
    isTooltip.value = false
    isLoadingTooltipInfo.value = true
  }
}

function handleMousemove(event) {
  // Получение координат курсора относительно окна браузера
  const x = event.clientX
  const y = event.clientY

  // Обновление позиции информационного окна
  tooltipTop.value = y + 14 // Позиция сверху с небольшим отступом
  tooltipLeft.value = x + 14 // Позиция слева с небольшим отступом
}

function isTouchDevice() {
  try {
    document.createEvent('TouchEvent')
    return true
  } catch (e) {
    return false
  }
}
</script>

<style scoped>
.pointer-cursor {
  cursor: pointer;
}
.tooltip {
  width: 280px;
  position: fixed;
  /*background-color: #f1f1f1;*/
  backdrop-filter: blur(40px);
  color: #333;
  padding: 5px;
  border: 1px solid #81bfff;
  border-radius: 5px;
  pointer-events: none; /* Чтобы информационное окно не мешало взаимодействию с элементами под ним */
  z-index: 9999; /* Позиционирование поверх других элементов */
}
</style>
