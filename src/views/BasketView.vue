<template>
  <v-container>
    <bread-crumbs :items="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="8" md="8" lg="8">
        <v-table v-if="basket.length > 0" class="rounded">
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Параметры</th>
              <th class="text-left">Цена</th>
              <th class="text-right">Управление</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="({ property_id, parameters, price }, index) in basket"
              :key="index"
            >
              <td data-label="ID">{{ property_id }}</td>
              <td data-label="Параметры">
                <v-icon v-if="parameters?.power?.value"
                  >mdi-power-plug-outline</v-icon
                >
                <v-icon v-if="parameters.window?.value"
                  >mdi-window-closed-variant</v-icon
                >
                <v-icon v-if="parameters.showcase?.value"
                  >mdi-table-furniture</v-icon
                >
                <v-icon v-if="parameters.desk?.value">mdi-desk</v-icon>
                <v-icon v-if="parameters.safe?.value">mdi-safe</v-icon>
              </td>
              <td data-label="Цена">{{ price }}</td>
              <td align="end" data-label="Управление">
                <v-btn
                  id="cy_deleteBasketItem"
                  color="red"
                  icon="mdi-trash-can-outline"
                  variant="text"
                  @click="deleteHandler(property_id)"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>

        <block-message v-else :text="'Нет товаров в корзине'" />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" v-if="basket.length > 0">
        <v-card rounded elevation="0">
          <!--          <v-card-text>Корзина</v-card-text>-->
          <!--          <v-divider />-->
          <v-card-text class="pb-2">
            Товаров в корзине: {{ basket.length }}
          </v-card-text>
          <v-card-text class="py-2">
            Товаров на сумму: {{ sumPrice }}
          </v-card-text>
          <div class="mx-2 my-2 px-2">
            <VueDatePicker
              v-model="date"
              placeholder="Срок аренды"
              cancel-text="Отмена"
              select-text="Выбрать"
              locale="ru-RU"
              range
              no-today
            ></VueDatePicker>
          </div>
          <v-card-actions>
            <v-btn
              :disabled="basket.length === 0 || date.length === 0"
              block
              variant="tonal"
              color="primary"
              @click="createRent"
              :loading="loaders.createRent"
              >Арендовать</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { dispatch, get } from 'vuex-pathify'
import BreadCrumbs from '@/components/common/BreadCrumbs.vue'
import BlockMessage from '@/components/common/BlockMessage.vue'
import { ref } from 'vue'

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref('')

const { basket, sumPrice } = get('basket/*')
const { walletTX } = get('user/*')
const { loaders } = get('squares/*')
const breadcrumbs = [
  {
    title: 'Главная',
    disabled: false,
    href: '/'
  },
  {
    title: 'Корзина',
    disabled: true,
    href: '/'
  }
]
function createRent() {
  dispatch('squares/createRent', { basket, date, walletTX })
}
function deleteHandler(property_id) {
  dispatch('basket/deleteBasketItem', property_id)
}
</script>
<style>
.dp__menu {
  position: relative !important;
  top: 10px;
}
</style>
