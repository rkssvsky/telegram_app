<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height">
      <v-col cols="0" md="6" lg="8">
        <v-sheet
          rounded
          color="white"
          style="height: 100%"
          class="d-flex align-center justify-center"
        >
          <div>
            <v-img width="200px" :src="data.img"></v-img>
          </div>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="4"
        class="d-flex flex-column justify-center px-16"
      >
        <div
          class="font-weight-medium mb-2 text-h4 text-secondary"
          id="cy_authTitle"
        >
          {{ data.title }}
        </div>
        <div class="mb-6 text-secondary">{{ data.subTitle }}</div>
        <Component :is="data.component" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'

import loginImg from '@/assets/login.svg'
import registerImg from '@/assets/register.svg'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const data = computed(() => {
  if (route.path.includes('login')) {
    return {
      title: 'Добро пожаловать! 👋🏻',
      subTitle:
        'Пожалуйста, войдите в свою учетную запись и начните знакомство.',
      component: Login,
      img: loginImg
    }
  } else if (route.path.includes('register')) {
    return {
      title: 'Регистрация',
      subTitle: 'Пожалуйста, заполните все поля.',
      component: Register,
      img: registerImg
    }
  }
})
</script>
