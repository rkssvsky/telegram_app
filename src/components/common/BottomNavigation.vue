<script setup>
import { get } from 'vuex-pathify'

const { basket } = get('basket/*')
</script>
<template>
  <v-bottom-navigation grow density="comfortable">
    <v-btn
      :active="$route.path.includes('locations')"
      @click="$router.push({ path: '/locations' })"
      value="recent"
    >
      <v-icon>mdi-map-marker-radius-outline</v-icon>

      <span>Локации</span>
    </v-btn>
    <v-btn
      :active="$route.path.includes('profile')"
      @click="$router.push({ path: '/profile' })"
      value="recent"
    >
      <v-icon>mdi-account-outline</v-icon>

      <span>Профиль</span>
    </v-btn>
    <v-btn
      :active="$route.path.includes('basket')"
      @click="$router.push({ path: '/basket' })"
      value="recent"
    >
      <v-badge
        v-if="basket.length > 0"
        :content="basket.length"
        offset-x="-12"
        offset-y="4"
        color="red"
      >
        <v-icon>mdi-shopping-outline</v-icon>
      </v-badge>
      <v-icon v-else>mdi-shopping-outline</v-icon>
      <span>Корзина</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.v-btn--active {
  color: #ed202e;
}
</style>
