<script setup>
let tg = window.Telegram.WebApp

</script>

<template>

  {{ tg }}

  <input type="text" :value="JSON.stringify(tg)">

  <button @click="tg.close()">Закрыть окно</button>

</template>

<style scoped>
</style>
