<template>
  <v-card class="mx-auto pa-0" elevation="0">
    <v-list>
      <v-list-item
        :prepend-avatar="userIcon"
        :title="userObj.login"
        :subtitle="userObj.email"
      >
        <template v-slot:append>
          <v-btn
            v-if="$vuetify.display.mdAndDown"
            @click="logoutHandler"
            size="small"
            variant="tonal"
            color="primary"
            icon="mdi-logout"
          ></v-btn>
          <v-btn
            v-else
            @click="edit = !edit"
            size="small"
            variant="text"
            :color="!edit ? '' : 'primary'"
            icon="mdi-pencil-outline"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list-item
      v-if="!$vuetify.display.smAndDown"
      :color="!edit ? '' : 'primary'"
      :subtitle="edit ? 'Редактирование' : 'Учетные данные'"
    />

    <div v-if="!$vuetify.display.smAndDown">
      <v-list-item
        id="cy_wallet"
        variant="tonal"
        v-if="props.wallet && !edit"
        prepend-icon="mdi-wallet"
      >
        <div class="text-body-2 text-truncate">{{ props.wallet }}</div>
      </v-list-item>
      <v-list-item class="d-inline-flex" v-if="!props.wallet">
        Кошелек:
        <v-btn
          @click="walletHandler(userObj.login)"
          class="ml-2"
          flat
          color="primary"
          rounded
          size="small"
          :loading="!props.loadWallet"
        >
          Создать
        </v-btn>
      </v-list-item>
      <v-list-item v-if="!edit" :title="`Роль: ${userObj.roles}`"></v-list-item>
      <!--    <v-list-item :title="`Логин: ${user.login}`"></v-list-item>-->
      <!--    <v-list-item :title="`Email: ${user.email}`"></v-list-item>-->
      <v-list-item :title="`Имя: ${userObj.first_name}`">
        <v-text-field
          v-if="edit"
          v-model="userObj.first_name"
          variant="outlined"
          hide-details
          density="compact"
          color="primary"
        />
      </v-list-item>
      <v-list-item :title="`Фамилия: ${userObj.last_name}`">
        <v-text-field
          v-if="edit"
          v-model="userObj.last_name"
          variant="outlined"
          hide-details
          density="compact"
          color="primary"
        />
      </v-list-item>
      <v-list-item :title="`Отчество: ${userObj.middle_name}`">
        <v-text-field
          v-if="edit"
          v-model="userObj.middle_name"
          variant="outlined"
          density="compact"
          color="primary"
        />
      </v-list-item>
      <v-divider></v-divider>
    </div>

    <v-card-actions v-if="!$vuetify.display.smAndDown">
      <v-btn
        v-if="!edit"
        prepend-icon="mdi-logout"
        @click="logoutHandler"
        block
        size="small"
        variant="tonal"
        color="primary"
      >
        Выйти
      </v-btn>
      <v-btn
        v-else
        prepend-icon="mdi-content-save-outline"
        @click="editUserHandler"
        block
        size="small"
        variant="tonal"
        color="primary"
      >
        Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { dispatch } from 'vuex-pathify'
import { ref, defineProps } from 'vue'
import userIcon from '@/assets/user.svg'

const props = defineProps({
  user: {
    type: Object,
    default: () => {}
  },
  wallet: {
    type: String,
    default: ''
  },
  loadWallet: {
    type: Boolean,
    default: false
  }
})
const userObj = ref({ ...props.user })
const edit = ref(false)

function logoutHandler() {
  dispatch('user/logout')
}
function editUserHandler() {
  dispatch('user/edit', userObj)
  edit.value = false
}

function walletHandler(userObj) {
  dispatch('user/createWallet', userObj)
}
</script>

<style>
.v-list-item__prepend > .v-icon {
  margin-inline-end: 12px !important;
}
</style>
