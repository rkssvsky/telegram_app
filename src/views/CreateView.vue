<template>
  <v-container>
    <div class="page-title">Создание</div>
    <v-text-field
      v-model="newGiv.name"
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Название"
      hide-details
    >
      <template v-slot:append-inner>
        <v-icon class="v-icon__invalid">mdi-alert-circle-outline</v-icon>
      </template>
    </v-text-field>
    <v-textarea
      v-model="newGiv.description"
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Описание"
      hide-details
    >
      <template v-slot:append-inner>
        <v-icon class="v-icon__invalid">mdi-alert-circle-outline</v-icon>
      </template>
    </v-textarea>
  </v-container>
</template>

<script setup>
import { sync } from 'vuex-pathify'
import { computed, onMounted } from 'vue'
import { MainBtnHandle, BackBtnHandle } from '@/services/buttonHandle'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
let { newGiv } = sync('givs/*')

const router = useRouter()

onMounted(() => {
  MainBtnHandle('Продолжить ➜', true)
  if (router.options.history.state.back) {
    BackBtnHandle()
  }
})

const validName = computed(() => {
  return false
})

const rules = {
  title: { required },
  body: { required },
  emailAddress: { required, email },
  gender: {},
  save: {}
}

Telegram.WebApp.MainButton.onClick(function () {
  router.push({ name: 'conditions' })
  // Telegram.WebApp.showAlert('Main Button was clicked')
})
Telegram.WebApp.BackButton.onClick(function () {
  router.go(-1)
})
</script>
