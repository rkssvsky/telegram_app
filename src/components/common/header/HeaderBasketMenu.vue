<template>
  <v-menu v-model="menu" :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-badge
          :content="basket.length"
          offset-x="0"
          offset-y="-3"
          color="secondary"
        >
          <v-icon icon="mdi-shopping-outline"></v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card min-width="300">
      <v-list>
        <v-list-item
          prepend-icon="mdi-shopping"
          title="Корзина"
          subtitle="Добавьте товары"
        >
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list-item v-if="basket.length === 0" class="text-center my-6">
        Корзина пуста
      </v-list-item>
      <v-list v-else>
        <v-list-item v-for="({ property_id }, index) in basket" :key="index">
          {{ property_id }}
          <template #append>
            <v-btn
              id="cy_deleteBasketItem"
              color="grey-lighten-1"
              icon="mdi-close"
              variant="text"
              @click="deleteHandler(property_id)"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-btn
          variant="tonal"
          color="primary"
          dark
          block
          :disabled="basket.length === 0"
          @click="toBasketHandler"
        >
          Перейти в корзину
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup>
import { toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import { dispatch } from 'vuex-pathify'

const props = defineProps({
  basket: {
    type: Array,
    default: () => []
  }
})
const { basket } = toRefs(props)
const menu = ref(false)
const router = useRouter()

function deleteHandler(property_id) {
  dispatch('basket/deleteBasketItem', property_id)
}
function toBasketHandler() {
  router.push({ name: 'Basket' })
  menu.value = false
}
</script>
