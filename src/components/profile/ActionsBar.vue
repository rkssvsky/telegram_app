<template>
  <v-slide-group>
    <v-slide-group-item v-for="(link, index) in props.links" :key="index">
      <v-btn
        size="small"
        :prepend-icon="`mdi-${link.icon}`"
        elevation="0"
        class="mr-2 mb-4"
        :color="link.value === activeTab ? 'primary' : 'secondary'"
        @click="onClick(link)"
      >
        {{ link.title }}
      </v-btn>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
import { onMounted, defineProps } from 'vue'

const props = defineProps({
  links: {
    type: Array,
    default: () => []
  },
  activeTab: {
    type: String,
    default: () => ''
  }
})

onMounted(() => {
  onClick(props.links[0])
})

const emit = defineEmits(['link-click'])
const onClick = link => {
  // Отправляем элемент меню текущей ссылки
  emit('link-click', link)
}
</script>
<style scoped></style>
