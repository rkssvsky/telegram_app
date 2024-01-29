<template>
  <v-container>
    <div class="text">GiveAway Bot</div>
    <v-img
      style="border-radius: 12px"
      class="mb-2"
      src="../assets/img.png"
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
    >
      Мои розыгрыши
    </v-btn>
    <v-btn rounded="lg" block prepend-icon="mdi-content-save-all-outline">
      Черновики
    </v-btn>
    <!--    <div class="bottom-menu">test</div>-->
  </v-container>
</template>

<script setup></script>
