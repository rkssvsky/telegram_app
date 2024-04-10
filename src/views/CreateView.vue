<template>
  <v-container>
    <div class="page-title">Создание</div>
    <v-text-field
      v-model="newGiv.name"
      @focus="v$.name.$touch()"
      @blur="v$.name.$touch()"
      :error-messages="
        v$.name.$dirty && v$.name.$invalid ? v$.name.$errors[0].$message : ''
      "
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Название"
      :hide-details="!v$.name.$invalid"
    >
      <template v-slot:append-inner>
        <v-icon v-if="v$.name.$invalid" class="v-icon__invalid">
          mdi-alert-circle-outline
        </v-icon>
        <v-icon color="green" v-if="!v$.name.$invalid" class="v-icon__invalid">
          mdi-check
        </v-icon>
      </template>
    </v-text-field>
    <v-textarea
      v-model="newGiv.description"
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Описание"
      hide-details
    >
      <template v-slot:append-inner>
        <v-icon class="v-icon__invalid">mdi-alert-circle-outline</v-icon>
      </template>
    </v-textarea>
  </v-container>
</template>

<script setup>
import { sync } from 'vuex-pathify'
import { onMounted } from 'vue'
import { MainBtnHandle, BackBtnHandle } from '@/services/buttonHandle'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
const router = useRouter()
let { newGiv } = sync('givs/*')

onMounted(() => {
  MainBtnHandle('Продолжить ➜', true)
  if (router.options.history.state.back) {
    BackBtnHandle()
  }
})

const rules = {
  name: { required },
  description: { required }
}

const v$ = useVuelidate(rules, newGiv)

// telegram handlers
Telegram.WebApp.MainButton.onClick(function () {
  router.push({ name: 'conditions' })
  // Telegram.WebApp.showAlert('Main Button was clicked')
})
Telegram.WebApp.BackButton.onClick(function () {
  router.go(-1)
})
</script>
