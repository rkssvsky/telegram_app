<template>
  <v-dialog transition="slide-y-transition" max-width="1200">
    <VueDatePicker
      v-model="date"
      placeholder="Срок аренды"
      cancel-text="Отмена"
      select-text="Выбрать"
      locale="ru-RU"
      range
    ></VueDatePicker>
  </v-dialog>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'

const date = ref('')
</script>

<style scoped></style>
