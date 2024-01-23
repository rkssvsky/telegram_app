<template>
  <v-breadcrumbs
    class="mb-4"
    color="secondary"
    active-color="red"
    bg-color="surface"
    divider="»"
    :items="props.items"
    rounded
    :style="$vuetify.display.smAndDown ? 'height:24px' : 'height:40px'"
  >
  </v-breadcrumbs>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style>
.v-breadcrumbs-item--disabled {
  opacity: 0.7 !important;
}
</style>
