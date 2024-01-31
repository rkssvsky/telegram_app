<template>
  <v-container>
    <v-card-title class="px-1">Условия завершения</v-card-title>
    <v-text-field
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Количество победителей"
      hide-details
    ></v-text-field>
    <v-text-field
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Приз"
      hide-details
    ></v-text-field>

    <v-switch
      v-model="completeIsMoney"
      hide-details
      inset
      density="compact"
      label="По количеству монет"
      @change="handleCompleteIsMoneyChange"
    ></v-switch>
    <v-switch
      v-model="completeIsDate"
      hide-details
      inset
      density="compact"
      label="Указать дату проведения"
      @change="handleCompleteIsDateChange"
    ></v-switch>

    <v-btn
      block
      class="mb-2"
      rounded="lg"
      append-icon="mdi-arrow-right"
      @click="$router.push({ name: 'chaincode' })"
      >Создать
    </v-btn>
    <v-btn
      block
      rounded="lg"
      append-icon="mdi-content-save"
      @click="$router.push({ name: 'conditions' })"
      >Сохранить в черновики
    </v-btn>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const completeIsMoney = ref(false)
const completeIsDate = ref(false)

const handleCompleteIsMoneyChange = () => {
  completeIsDate.value = false
}

const handleCompleteIsDateChange = () => {
  completeIsMoney.value = false
}
</script>
