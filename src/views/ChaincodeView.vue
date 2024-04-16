<template>
  <v-container>
    <div class="page-title">Внимание!</div>
    <div class="px-1">
      Вы создаете новую лотерею. Платформой GiveawayBot будет сгенерирован
      смарт-контракт с условиями проведения лотереи и размещен в сети TON. Для
      его публикации и запуска лотереи в сети блокчейн вам потребуется 1 TON на
      вашем сече. Адрес кошелька невозможно будет изменить после запуска
      розыгрыша!
    </div>
    <v-text-field
      v-model="newGiv.contract_wallet"
      @input="v$.contract_wallet.$touch()"
      :error-messages="
        v$.contract_wallet.$dirty && v$.contract_wallet.$invalid
          ? 'Обязательное поле'
          : ''
      "
      class="my-2"
      density="comfortable"
      variant="solo"
      label="Адрес кошелька"
      prepend-inner-icon="mdi-wallet-outline"
    >
      <template v-slot:append-inner>
        <v-icon
          v-if="v$.contract_wallet.$dirty && v$.contract_wallet.$invalid"
          class="v-icon__invalid"
        >
          mdi-alert-circle-outline
        </v-icon>
        <v-icon
          color="green"
          v-if="v$.contract_wallet.$dirty && !v$.contract_wallet.$invalid"
          class="v-icon__invalid"
        >
          mdi-check
        </v-icon>
      </template>
    </v-text-field>

    <v-btn
      block
      class="mb-2"
      rounded="lg"
      append-icon="mdi-checkbox-marked-circle-outline"
      @click="$router.push({ name: '' })"
    >
      Подтвердить адрес
    </v-btn>
    <!--    <v-btn-->
    <!--      block-->
    <!--      rounded="lg"-->
    <!--      append-icon="mdi-arrow-right"-->
    <!--      @click="$router.push({ name: 'thanks' })"-->
    <!--      >Создать смарт-контракт-->
    <!--    </v-btn>-->
  </v-container>
</template>

<script setup>
import { sync } from 'vuex-pathify'
import { required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { ref } from 'vue'

let { newGiv } = sync('givs/*')

const rules = {
  contract_wallet: { required, minLength: minLength(48) }
}

const v$ = useVuelidate(rules, newGiv)

const confirmWalletAdress = ref(false)

Telegram.WebApp.MainButton.onClick(function () {
  if (v$.value.$invalid && !confirmWalletAdress.value) {
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
