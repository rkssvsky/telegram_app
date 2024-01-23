<template>
  <v-card elevation="0" class="customCard">
    <v-card-title class="text-h">{{ props.obj?.title }}</v-card-title>
    <v-card-text></v-card-text>
    <v-card-actions>
      <v-btn
        :disabled="props.obj?.disable"
        @click="$router.push({ path: '/objects/view' })"
        variant="tonal"
        color="primary"
      >
        Посмотреть
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  obj: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>
.customCard {
  min-height: 120px;
  background-image: url('@/assets/map.svg');
  background-repeat: no-repeat;
  background-position: right bottom;
}
</style>
