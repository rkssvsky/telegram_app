<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-avatar rounded="0" v class="mr-4 ml-4" size="32">
        <v-img
          @click="$router.push({ path: '/locations' })"
          :src="logo"
          alt="logo"
        ></v-img>
      </v-avatar>
      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        :prepend-icon="link.icon"
        @click="$router.push(link.patch)"
      >
        {{ link.title }}
      </v-btn>

      <v-spacer></v-spacer>
      <v-select
        v-if="!$vuetify.display.xs"
        label="Ваш город"
        style="max-width: 200px"
        variant="solo"
        density="compact"
        hide-details
        :items="['Сочи', 'Москва', 'Уфа']"
        class="mr-4"
      ></v-select>
      <v-btn
        :icon="
          theme.global.name.value === 'dark'
            ? 'mdi-weather-sunny'
            : 'mdi-weather-night'
        "
        @click="toggleTheme"
      ></v-btn>
      <header-basket-menu v-if="!$vuetify.display.xs" :basket="basket" />
      <v-btn icon class="ml-2" id="cy_profileIcon">
        <v-avatar size="large">
          <v-img
            @click="$router.push({ path: '/profile' })"
            :src="userIcon"
            alt="John"
          ></v-img>
        </v-avatar>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { get } from 'vuex-pathify'
import { useTheme } from 'vuetify'

import userIcon from '@/assets/user.svg'
import logo from '@/assets/logo.svg'
import HeaderBasketMenu from '@/components/common/header/HeaderBasketMenu.vue'

const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
const links = get('app/links')
const { basket } = get('basket/*')
</script>
