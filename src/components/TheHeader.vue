<!--<template>-->
<!--  <div>-->
<!--    <v-container-->
<!--      style="background-color: red; border-radius: 18px"-->
<!--      class="d-flex align-center"-->
<!--    >-->
<!--      <v-btn-->
<!--        v-for="link in links"-->
<!--        :key="link"-->
<!--        variant="text"-->
<!--        :prepend-icon="link.icon"-->
<!--        @click="$router.push({ name: link.value })"-->
<!--      >-->
<!--      </v-btn>-->

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>-->
<!--      -->
<!--    </v-container>-->
<!--  </div>-->
<!--</template>-->

<template>
  <v-slide-group v-model="tab" style="border-radius: 8px" class="mx-auto">
    <v-slide-group-item v-for="n in links" :key="n">
      <v-btn
        class="ma-1 my-2"
        rounded="lg"
        elevation="0"
        size="small"
        :color="tab === n.value ? 'primary' : undefined"
        @click="routerHandle(toggle, n.value)"
      >
        {{ n.title }}
      </v-btn>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
import { get } from 'vuex-pathify'
import { useTheme } from 'vuetify'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter()

const theme = useTheme()

const tab = ref('active')
function routerHandle(toggle, link) {
  tab.value = link
  route.push({ name: link })
}
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
const links = get('app/links')
</script>
