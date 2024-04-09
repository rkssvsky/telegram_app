<template>
  <v-container>
    <div class="page-title">Черновики</div>
    <NoItems
      v-if="draftLength"
      msg-text="У вас нет розыгрышей"
      btnText="Создать"
      btn-link="create"
    />
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
import { computed, onMounted } from 'vue'
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

const draftLength = computed(() => {
  return drafts.value.length <= 0
})

Telegram.WebApp.MainButton.onClick(function () {
  router.push({ name: 'conditions' })
  // Telegram.WebApp.showAlert('Main Button was clicked')
})
Telegram.WebApp.BackButton.onClick(function () {
  router.go(-1)
})
</script>
