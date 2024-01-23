<template>
  <v-dialog
    transition="slide-y-transition"
    max-width="1200"
    v-model="bottomDrawer"
  >
    <v-sheet style="border-radius: 16px">
      <v-container fluid class="ma-0">
        <v-row>
          <v-col cols="12" sm="12" md="7" lg="7">
            <div
              v-if="$vuetify.display.smAndDown"
              class="d-flex justify-space-between align-center mb-6"
            >
              <div class="text-h4">
                Объект: {{ currentMeterInfo.property_id }}
              </div>
              <v-btn
                variant="tonal"
                color="rgb(129, 191, 255)"
                @click="bottomDrawer = !bottomDrawer"
                icon="mdi-close"
                size="40"
              ></v-btn>
            </div>
            <v-carousel
              :height="$vuetify.display.smAndDown ? '280' : '100%'"
              style="border-radius: 8px; width: 100%"
            >
              <v-carousel-item
                src="https://adsstatic.adsfactory.ru/tmp_media/tmp_68899/media_68899m1632847826.jpeg"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" sm="12" md="5" lg="5">
            <div
              v-if="!$vuetify.display.smAndDown"
              class="d-flex justify-space-between align-center mb-6"
            >
              <div class="text-h4">
                Объект: {{ currentMeterInfo.property_id }}
              </div>
              <v-btn
                variant="tonal"
                color="rgb(129, 191, 255)"
                @click="bottomDrawer = !bottomDrawer"
                icon="mdi-close"
                size="40"
              ></v-btn>
            </div>
            <parameters-info />
            <v-btn
              class="mt-2"
              :color="isEmptyBasket ? 'primary' : 'green'"
              variant="tonal"
              @click="basketHandler"
              :prepend-icon="isEmptyBasket ? 'mdi-cart-plus' : 'mdi-cart-check'"
              >{{ isEmptyBasket ? 'В корзину' : 'В корзине' }}</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import ParametersInfo from '@/components/objects/ParametersInfo.vue'
import { dispatch, get, sync } from 'vuex-pathify'
import { computed } from 'vue'

const { bottomDrawer } = sync('squares/*')
const { currentMeterInfo } = get('squares/*')
const { basketItems } = get('basket/*')

const isEmptyBasket = computed(() => {
  return !basketItems.value.includes(currentMeterInfo.value.property_id)
})
function basketHandler() {
  isEmptyBasket.value
    ? dispatch('basket/addBasketHandle', currentMeterInfo.value)
    : dispatch('basket/deleteBasketItem', currentMeterInfo.value.id)
}
</script>
