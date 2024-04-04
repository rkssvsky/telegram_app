<script setup>
import NoItems from '@/components/NoItems.vue'
import { onMounted } from 'vue'
onMounted(() => {})
</script>

<template>
  <v-container>
    <NoItems
      msg-text="У вас нет активных розыгрышей"
      btnText="Создать"
      btn-link="create"
    />
  </v-container>
</template>
