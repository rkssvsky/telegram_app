<template>
  <v-container>
    <div class="page-title">Черновики</div>
    <ListGivItem
      v-for="(draft, i) in drafts"
      :key="i"
      :draft="draft"
      @click="$router.push({ name: '' })"
    ></ListGivItem>
  </v-container>
</template>

<script setup>
import { sync } from 'vuex-pathify'
import { onMounted } from 'vue'
import { BackBtnHandle, MainBtnHandle } from '@/services/buttonHandle'
import { useRouter } from 'vue-router'
import ListGivItem from '@/components/ListGivItem.vue'
let { drafts } = sync('givs/*')

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
