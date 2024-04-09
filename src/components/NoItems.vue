<template>
  <v-sheet rounded="lg" class="no-item py-5">
    <div class="mb-4">{{ props.msgText }}</div>
    <v-btn
      class=""
      size="small"
      rounded="lg"
      @click="$router.push({ name: props.btnLink })"
    >
      {{ props.btnText }}
    </v-btn>
  </v-sheet>
</template>

<script setup>
const props = defineProps({
  msgText: { default: 'Нет данных для отображения', type: String },
  btnText: { default: null, type: String },
  btnLink: { default: null, type: String }
})
</script>

<style scoped>
.no-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  background-color: var(--tg-theme-secondary-bg-color) !important;
}
</style>
