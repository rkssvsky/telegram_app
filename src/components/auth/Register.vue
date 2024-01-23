<template>
  <div style="width: 100%">
    <form class="pb-4">
      <v-text-field
        id="cy_email"
        v-model="state.email"
        :error-messages="v$.email.$errors.map(e => e.$message)"
        label="E-mail"
        variant="solo"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
        @change="loginHandler"
      ></v-text-field>

      <v-text-field
        id="cy_pwd"
        v-model="state.password"
        :error-messages="v$.password.$errors.map(e => e.$message)"
        :counter="10"
        label="Пароль"
        variant="solo"
        required
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
      ></v-text-field>

      <v-text-field
        id="cy_pwd2"
        v-model="state.rePassword"
        :error-messages="v$.rePassword.$errors.map(e => e.$message)"
        :counter="10"
        label="Пароль"
        variant="solo"
        required
        @input="v$.rePassword.$touch"
        @blur="v$.rePassword.$touch"
      ></v-text-field>

      <v-btn block @click="registerHandler" id="cy_createUser">
        Создать аккаунт
      </v-btn>
      <!--      <v-btn block @click="clear"> Очистить </v-btn>-->
    </form>
    <div class="d-flex justify-center mb-2">Уже зарегистрированы?</div>
    <div class="d-flex justify-center">
      <v-btn
        variant="flat"
        size="small"
        @click="$router.push({ path: '/login' })"
        >Войти</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required, sameAs } from '@vuelidate/validators'
import { dispatch } from 'vuex-pathify'

const initialState = {
  login: '',
  email: '',
  password: '',
  rePassword: ''
}

const state = reactive({
  ...initialState
})

const rules = {
  login: { required },
  email: { required, email },
  password: { required },
  rePassword: { required, sameAs: sameAs(computed(() => state.password)) }
}

const v$ = useVuelidate(rules, state)

function clear() {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}

function registerHandler() {
  v$.value.$validate()
  if (!v$.value.$invalid) {
    dispatch('user/register', state)
  }
}

function loginHandler(event) {
  state.login = event.target.value.replace('@', '_').replace('.', '')
}
</script>

<style scoped></style>
