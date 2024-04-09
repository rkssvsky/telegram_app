<template>
  <v-container>
    <div class="logo">
      <div class="logo__bg"></div>
      <v-img
        style="border-radius: 12px"
        class="mb-2 mx-auto"
        width="300"
        src="../assets/giveo_logo.svg"
      ></v-img>
    </div>
    <v-btn
      class="mb-2 mt-6"
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
      @click="$router.push({ name: 'givs' })"
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

<style lang="scss">
.logo {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  &__bg {
    position: absolute;
    animation: animFilter 5s linear infinite;
    width: 300px;
    height: 300px;
    transform: scale(1.05);
    background-image: url('../assets/giveo_logo.svg');
  }
}
@keyframes animFilter {
  0% {
    filter: blur(20px) saturate(0) opacity(0.7);
  }
  25% {
    filter: blur(25px) saturate(3) opacity(0.9);
    transform: rotate(5deg);
  }
  50% {
    filter: blur(30px) saturate(5) opacity(0.9);
    transform: rotate(-5deg);
  }
  100% {
    filter: blur(20px) saturate(0) opacity(0.7);
    transform: rotate(0deg);
  }
}
</style>

<script setup></script>
