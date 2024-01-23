<template>
  <div>
    <p class="font-weight-bold mb-2">Параметры объекта:</p>
    <div class="d-flex align-center mb-1">
      <v-icon class="mr-1">mdi-power-plug-outline</v-icon>
      Розетка:
      {{ currentMeterInfo.parameters?.power?.value ? 'Есть' : 'Отсутствует' }}
    </div>
    <div class="d-flex align-center mb-1">
      <v-icon class="mr-1">mdi-window-closed-variant</v-icon>
      Окно:
      {{ currentMeterInfo.parameters?.window?.value ? 'Есть' : 'Отсутствует' }}
    </div>
    <div class="d-flex align-center mb-1">
      <v-icon class="mr-1">mdi-table-furniture</v-icon>
      Стеллажи:
      {{
        currentMeterInfo.parameters?.showcase?.value ? 'Есть' : 'Отсутствует'
      }}
    </div>
    <div class="d-flex align-center mb-1">
      <v-icon class="mr-1">mdi-desk</v-icon>
      Стол:
      {{ currentMeterInfo.parameters?.desk?.value ? 'Есть' : 'Отсутствует' }}
    </div>
    <div class="d-flex align-center mb-1">
      <v-icon class="mr-1">mdi-safe</v-icon>
      Сейф:
      {{ currentMeterInfo.parameters?.safe?.value ? 'Есть' : 'Отсутствует' }}
    </div>
    <div class="d-flex align-center mb-1">
      <v-icon class="mr-1">mdi-account-circle-outline</v-icon>
      Владелец:
      {{ currentMeterInfo.owner ?? 'Отсутствует' }}
    </div>
    <div class="d-flex align-center mb-1 font-weight-bold mt-4 text-h6">
      <!--      <v-icon class="mr-1">mdi-cash-multiple</v-icon>-->
      <!--      <v-icon class="mr-1">mdi-cash-multiple</v-icon>-->
      Стоимость:
      {{ currentMeterInfo.price ?? 'Отсутствует' }}
    </div>
  </div>
</template>

<script setup>
import { sync } from 'vuex-pathify'

let { currentMeterInfo } = sync('squares/*')
</script>
