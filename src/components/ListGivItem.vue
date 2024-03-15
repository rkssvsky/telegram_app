<template>
  <v-card rounded="lg" class="mb-2">
    <v-card-title class="pb-0 font-weight-bold" style="font-size: 16px">
      {{ props.draft.title }}
    </v-card-title>
    <v-card-text>
      {{ props.draft.desc }}
      <!--      <hr style="opacity: 10%; margin: 4px 0" />-->
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  draft: { type: Object }
})
</script>
