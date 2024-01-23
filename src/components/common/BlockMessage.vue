<template>
  <v-sheet
    min-height="100"
    rounded
    class="d-flex justify-center align-center"
    >{{ props.text }}</v-sheet
  >
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: () => ''
  }
})
</script>
