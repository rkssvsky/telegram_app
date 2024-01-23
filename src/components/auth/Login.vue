<template>
  <div style="width: 100%">
    <form class="pb-4">
      <v-text-field
        id="cy_email"
        v-model="state.email"
        :error-messages="v$.email.$errors.map(() => 'Неверный email')"
        label="E-mail"
        variant="solo"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      ></v-text-field>

      <v-text-field
        id="cy_pwd"
        v-model="state.password"
        :error-messages="v$.password.$errors.map(() => 'Обязательное поле')"
        :counter="10"
        label="Пароль"
        variant="solo"
        required
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
        append-inner-icon="mdi-eye"
      ></v-text-field>

      <v-checkbox
        color="secondary"
        v-model="state.checkbox"
        label="Запомнить меня"
        required
        hide-details
      ></v-checkbox>

      <v-btn id="cy_login" block @click="loginHandler"> войти в систему </v-btn>
      <!--      <v-btn block @click="clear"> Очистить </v-btn>-->
    </form>
    <div class="d-flex justify-center mb-2">Нет аккаунта?</div>
    <div class="d-flex justify-center">
      <v-btn
        id="cy_createUser"
        variant="flat"
        size="small"
        @click="$router.push({ path: '/register' })"
      >
        Создать аккаунт
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { dispatch } from 'vuex-pathify'

const initialState = {
  email: '',
  password: '',
  checkbox: null
}

const state = reactive({
  ...initialState
})

const rules = {
  email: { required, email },
  password: { required }
}

const v$ = useVuelidate(rules, state)

function clear() {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}

function loginHandler() {
  v$.value.$validate()
  if (!v$.value.$invalid) {
    dispatch('user/login', state)
  }
}
</script>

<style scoped></style>
