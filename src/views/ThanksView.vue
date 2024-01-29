<template>
  <v-container>
    <v-card-title class="px-1">Поздравляем!</v-card-title>
    <div class="px-1">
      Cмарт-контракт розыгрыша успешно сгенерирован и отправлен в сеть TON.
    </div>
    <v-text-field
      v-model="wallet"
      class="my-2"
      density="comfortable"
      variant="solo"
      label="Адрес смарт-контракта"
      hide-details
    >
      <template v-slot:prepend-inner>
        <v-icon color="green">mdi-check-circle</v-icon>
      </template>
    </v-text-field>

    <div class="px-1">
      Теперь вы можете поделиться реферальной ссылкой на розыгрыш со своими
      подписчиками:
    </div>
    <v-text-field
      v-model="refLink"
      class="my-2"
      density="comfortable"
      variant="solo"
      label="Реферальная ссылкка"
      hide-details
    >
      <template v-slot:append-inner>
        <v-icon color="green">mdi-content-copy</v-icon>
      </template>
    </v-text-field>

    <div class="px-1">
      А также настроить частоту рекламных сообщений от бота в вашем канале:
    </div>
    <v-text-field
      v-model="wallet"
      class="my-2"
      density="comfortable"
      variant="solo"
      label="Настроить сообщения"
      hide-details
    >
    </v-text-field>

    <v-card-title class="px-2">Название лотереи</v-card-title>

    <v-btn
      block
      rounded="lg"
      append-icon="mdi-arrow-right"
      @click="$router.push({ name: 'active' })"
      >Мои лотереи
    </v-btn>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const wallet = ref('UQCGMM1G3mQUCWwzadj29FaAw9')
const refLink = ref('t.me/blabla')
</script>
