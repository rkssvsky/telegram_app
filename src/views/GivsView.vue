<script setup>
import NoItems from '@/components/NoItems.vue'
import { computed, onMounted } from 'vue'
import { dispatch, sync } from 'vuex-pathify'
onMounted(() => {
  dispatch('givs/getAllLottery')
})

let { drafts } = sync('givs/*')

const draftLength = computed(() => {
  return drafts.value.length <= 0
})
</script>

<template>
  <v-container>
    <NoItems
      v-if="draftLength"
      msg-text="У вас нет розыгрышей"
      btnText="Создать"
      btn-link="create"
    />
  </v-container>
</template>
