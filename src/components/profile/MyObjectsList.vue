<template>
  <v-table density="compact" v-if="props.items.length > 0">
    <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Параметры</th>
        <th class="text-left">Цена</th>
        <th class="text-left">Владелец</th>
        <th class="text-right">Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in props.items"
        :key="item.name"
        style="border-bottom: 12px solid #f2f2f2"
      >
        <td data-label="ID">
          <v-btn
            id="cy_propertyID"
            class="my-2 text-truncate"
            elevation="0"
            variant="tonal"
            size="small"
            color="secondary"
            append-icon="mdi-open-in-new"
            >{{ item.property_id }}</v-btn
          >
        </td>
        <td data-label="Параметры">
          <div class="d-flex align-content-end">
            <v-icon v-if="item.parameters?.power?.value"
              >mdi-power-plug-outline</v-icon
            >
            <v-icon v-if="item.parameters?.window?.value"
              >mdi-window-closed-variant</v-icon
            >
            <v-icon v-if="item.parameters?.showcase?.value"
              >mdi-table-furniture</v-icon
            >
            <v-icon v-if="item.parameters?.desk?.value">mdi-desk</v-icon>
            <v-icon v-if="item.parameters?.safe?.value">mdi-safe</v-icon>
          </div>
        </td>
        <td data-label="Цена">{{ item.price }}</td>
        <td data-label="Владелец">{{ item.owner }}</td>
        <td data-label="Действия" align="right">
          <v-btn
            size="small"
            variant="tonal"
            color="primary"
            :prepend-icon="$vuetify.display.mdAndDown ? '' : 'mdi-trash-can'"
            @click="dispatch('squares/deleteObject', item.ID)"
          >
            <v-icon v-if="$vuetify.display.mdAndDown ? 'mdi-trash-can' : false"
              >mdi-trash-can</v-icon
            >
            <div v-if="!$vuetify.display.mdAndDown">Удалить</div>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <block-message v-else :text="'Нет локаций'" />
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { dispatch } from 'vuex-pathify'
import BlockMessage from '@/components/common/BlockMessage.vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
onMounted(() => {
  dispatch('squares/getMyObjects')
})
</script>
