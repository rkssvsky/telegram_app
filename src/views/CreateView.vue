<template>
  <v-container>
    <div class="page-title">Создание</div>
    <div>Создание</div>
    <v-btn>Тест</v-btn>
    <v-text-field
      v-model="newGiv.title"
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Название"
      hide-details
    ></v-text-field>
    <v-textarea
      v-model="newGiv.desc"
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Описание"
      hide-details
    ></v-textarea>
  </v-container>
</template>

<script setup>
import { sync } from 'vuex-pathify'
import { onMounted } from 'vue'
import { MainBtnHandle, BackBtnHandle } from '@/services/buttonHandle'
import { useRouter } from 'vue-router'
let { newGiv } = sync('givs/*')

const router = useRouter()

onMounted(() => {
  MainBtnHandle('Продолжить ➜')
  if (router.options.history.state.back) {
    BackBtnHandle()
  }
})

Telegram.WebApp.MainButton.onClick(function () {
  router.push({ name: 'conditions' })
  // Telegram.WebApp.showAlert('Main Button was clicked')
})
Telegram.WebApp.BackButton.onClick(function () {
  router.go(-1)
})
</script>
