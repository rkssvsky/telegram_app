<template>
  <v-container>
    <div class="page-title">Внимание!</div>
    <div class="px-1">
      Вы создаете новую лотерею. Платформой GiveawayBot будет сгенерирован
      смарт-контракт с условиями проведения лотереи и размещен в сети TON. Для
      его публикации и запуска лотереи в сети блокчейн вам потребуется 1 TON на
      вашем сече. Адрес кошелька невозможно будет изменить после запуска
      розыгрыша!
    </div>
    <v-text-field
      class="my-2"
      density="comfortable"
      variant="solo"
      label="Адрес кошелька"
      prepend-inner-icon="mdi-wallet-outline"
      hide-details
    ></v-text-field>

    <v-btn
      block
      class="mb-2"
      rounded="lg"
      append-icon="mdi-checkbox-marked-circle-outline"
      @click="$router.push({ name: '' })"
    >
      Подтвердить адрес
    </v-btn>
    <v-btn
      block
      rounded="lg"
      append-icon="mdi-arrow-right"
      @click="$router.push({ name: 'thanks' })"
      >Создать смарт-контракт
    </v-btn>
  </v-container>
</template>

<script setup></script>
