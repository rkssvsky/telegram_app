<template>
  <div>
    <v-sheet></v-sheet>
    <v-form>
      <v-text-field
        id="cy_id"
        v-model="state.property_id"
        label="Уникальный ID объекта"
        variant="solo"
      />
      <v-text-field
        id="cy_price"
        v-model.number="state.price"
        label="Цена за кв/метр"
        variant="solo"
        hide-details
      />
      <div class="py-4">
        <v-checkbox
          v-model="param.value"
          :label="param.name"
          v-for="(param, index) in state.parameters"
          :key="index"
          hide-details
          density="compact"
        ></v-checkbox>
      </div>
      <v-btn id="cy_createObj" @click="create" :loading="loaders.createObj"
        >Создать</v-btn
      >
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { dispatch, get } from 'vuex-pathify'

const { walletTX } = get('user/*')
const { loaders } = get('squares/*')

const initialState = {
  owner: walletTX,
  parameters: {
    power: { name: 'Розетка', value: false },
    window: { name: 'Окно', value: false },
    showcase: { name: 'Стеллажи', value: false },
    desk: { name: 'Стол', value: false },
    safe: { name: 'Сейф', value: false }
  },
  price: '',
  property_id: ''
}

const state = ref({ ...initialState })
function create() {
  dispatch('squares/createObject', state)
}
</script>
