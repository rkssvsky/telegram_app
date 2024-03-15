<template>
  <v-container>
    <div class="page-title">Условия для запуска</div>
    <v-text-field
      v-model="newGiv.price"
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Кол-во Ton для участия"
      hide-details
    ></v-text-field>
    <v-text-field
      v-model="newGiv.winnersCount"
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Количество победителей"
      hide-details
    ></v-text-field>
    <v-text-field
      v-model="newGiv.prize"
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Приз: кол-во Ton"
      hide-details
    ></v-text-field>
    <v-switch
      v-model="completeIsMoney"
      hide-details
      inset
      density="compact"
      label="Подписаться на каналы"
      disabled
      @change="handleCompleteIsMoneyChange"
    ></v-switch>
    <!--    <v-switch-->
    <!--      v-model="completeIsDate"-->
    <!--      hide-details-->
    <!--      inset-->
    <!--      density="compact"-->
    <!--      label="Указать дату проведения"-->
    <!--      @change="handleCompleteIsDateChange"-->
    <!--    ></v-switch>-->
    <v-btn
      block
      color="secondary"
      rounded="lg"
      append-icon="mdi-content-save"
      @click="$router.push({ name: 'conditions' })"
      >Сохранить в черновики
    </v-btn>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { sync } from 'vuex-pathify'
import { BackBtnHandle, MainBtnHandle } from '@/services/buttonHandle'
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
  router.push({ name: 'conditionsEnd' })
})

const completeIsMoney = ref(false)
const completeIsDate = ref(false)

const handleCompleteIsMoneyChange = () => {
  completeIsDate.value = false
}
</script>
