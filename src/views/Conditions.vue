<template>
  <v-container>
    <div class="page-title">Условия розыгрыша</div>
    <v-text-field
      v-model="newGiv.ticket_price"
      @input="v$.ticket_price.$touch()"
      :error-messages="
        v$.ticket_price.$dirty && v$.ticket_price.$invalid
          ? 'Обязательное поле'
          : ''
      "
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Стоимость участия"
    >
      <template v-slot:append-inner>
        <v-icon
          v-if="v$.ticket_price.$dirty && v$.ticket_price.$invalid"
          class="v-icon__invalid"
        >
          mdi-alert-circle-outline
        </v-icon>
        <v-icon
          color="green"
          v-if="v$.ticket_price.$dirty && !v$.ticket_price.$invalid"
          class="v-icon__invalid"
        >
          mdi-check
        </v-icon>
      </template>
    </v-text-field>
    <v-text-field
      v-model="newGiv.prize"
      disabled
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Приз"
      hide-details
    ></v-text-field>
    <v-text-field
      v-model="newGiv.users_count"
      @input="v$.users_count.$touch()"
      :error-messages="
        v$.users_count.$dirty && v$.users_count.$invalid
          ? 'Обязательное поле'
          : ''
      "
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Количество участников"
    >
      <template v-slot:append-inner>
        <v-icon
          v-if="v$.users_count.$dirty && v$.users_count.$invalid"
          class="v-icon__invalid"
        >
          mdi-alert-circle-outline
        </v-icon>
        <v-icon
          color="green"
          v-if="v$.users_count.$dirty && !v$.users_count.$invalid"
          class="v-icon__invalid"
        >
          mdi-check
        </v-icon>
      </template>
    </v-text-field>
    <v-btn
      disabled
      block
      rounded="lg"
      append-icon="mdi-content-save"
      @click="$router.push({ name: 'conditions' })"
      >Сохранить в черновики
    </v-btn>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { sync } from 'vuex-pathify'
import { BackBtnHandle, MainBtnHandle } from '@/services/buttonHandle'
import { useRouter } from 'vue-router'
import { required } from '@vuelidate/validators'
const router = useRouter()
let { newGiv } = sync('givs/*')

import { useVuelidate } from '@vuelidate/core'
onMounted(() => {
  MainBtnHandle('Продолжить ➜')
  if (router.options.history.state.back) {
    BackBtnHandle()
  }
})

const rules = {
  ticket_price: { required },
  users_count: { required }
}

const v$ = useVuelidate(rules, newGiv)

Telegram.WebApp.MainButton.onClick(function () {
  if (v$.value.$invalid) {
    v$.value.$touch()
    Telegram.WebApp.showPopup({
      title: 'Ошибка валидации',
      message: 'Не все поля заполнены'
    })
  } else {
    router.push({ name: 'chaincode' })
  }
})
</script>
