<template>
  <v-table density="compact" v-if="props.items.length > 0">
    <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Срок аренды</th>
        <th class="text-left">Цена</th>
        <th class="text-left">Владелец</th>
        <th class="text-left">Действия</th>
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
            size="small"
            id="cy_propertyID"
            class="my-2"
            elevation="0"
            variant="tonal"
            color="secondary"
            append-icon="mdi-open-in-new"
            >{{ item.property_id }}</v-btn
          >
        </td>
        <td data-label="Срок аренды">
          с {{ convertRFC3339ToCustomFormat(item.start_date).slice(0, -5) }}
          <br />
          до {{ convertRFC3339ToCustomFormat(item.end_date).slice(0, -5) }}
        </td>
        <td data-label="Цена">{{ item.price }}</td>
        <td data-label="Владелец">{{ item.tenant_id }}</td>
        <td data-label="Действия" align="right">
          <v-btn
            size="small"
            variant="tonal"
            color="primary"
            :prepend-icon="$vuetify.display.mdAndDown ? false : 'mdi-trash-can'"
            @click="deleteHandler(item.id)"
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
import convertRFC3339ToCustomFormat from '@/utils/convertRFC3339ToCustomFormat'
import BlockMessage from '@/components/common/BlockMessage.vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

function deleteHandler(id) {
  dispatch('squares/deleteRent', id)
}
onMounted(() => {
  dispatch('squares/getMyRents')
})
</script>
