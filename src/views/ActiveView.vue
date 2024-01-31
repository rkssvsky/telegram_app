<template>
  <v-container>
    <div class="align-center">
      У вас нет активных розыгрышей <br />
      <v-btn rounded="lg" @click="$router.push({ name: 'create' })"
        >Создать</v-btn
      >
    </div>
  </v-container>
</template>

<script setup></script>
