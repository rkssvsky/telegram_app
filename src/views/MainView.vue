<template>
  <v-container>
    <v-img
      style="border-radius: 12px"
      class="mb-2 mx-auto"
      width="300"
      src="../assets/giveo_logo.svg"
    ></v-img>
    <v-btn
      class="mb-2"
      rounded="lg"
      block
      prepend-icon="mdi-plus"
      @click="$router.push({ name: 'create' })"
    >
      Создать
    </v-btn>
    <v-btn
      class="mb-2"
      rounded="lg"
      block
      prepend-icon="mdi-format-list-bulleted"
      @click="$router.push({ name: 'active' })"
    >
      Мои розыгрыши
    </v-btn>
    <v-btn
      rounded="lg"
      block
      prepend-icon="mdi-content-save-all-outline"
      @click="$router.push({ name: 'drafts' })"
    >
      Черновики
    </v-btn>
  </v-container>
</template>

<script setup></script>
