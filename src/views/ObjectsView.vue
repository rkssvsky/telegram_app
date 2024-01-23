<template>
  <v-container>
    <v-row>
      <v-col>
        <bread-crumbs :items="breadcrumbs" />
        <map-objects />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import MapObjects from '@/components/objects/MapObjects.vue'
import BreadCrumbs from '@/components/common/BreadCrumbs.vue'

const breadcrumbs = [
  {
    title: 'Главная',
    disabled: false,
    href: '/'
  },
  {
    title: 'Локации',
    active: false,
    href: '/locations'
  },
  {
    title: `ЖД Вокзал Адлерский`,
    disabled: true,
    active: true,
    href: '/locations'
  }
]
</script>
