<template>
  <v-container>
    <div class="align-center text">
      У вас нет завершенных розыгрышей <br />
      <v-btn rounded="lg">Создать</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { dispatch } from 'vuex-pathify'

onMounted(() => {
  dispatch('givs/getLotteries')
})
</script>
