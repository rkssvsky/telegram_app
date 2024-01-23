<template>
  <v-container>
    <bread-crumbs :items="breadcrumbs" />
    <v-row>
      <v-col
        cols="12"
        sm="6"
        :class="$vuetify.display.xs ? 'pb-0' : ''"
        v-for="(obj, index) in locations"
        :key="index"
      >
        <PreviewCard :obj="obj" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BreadCrumbs from '@/components/common/BreadCrumbs.vue'
import PreviewCard from '@/components/objects/PreviewCard.vue'

import { get } from 'vuex-pathify'

let { locations } = get('squares/*')
const breadcrumbs = [
  {
    title: 'Главная',
    disabled: false,
    href: '/'
  },
  {
    title: 'Локации',
    disabled: false,
    href: '/locations'
  }
]
</script>
