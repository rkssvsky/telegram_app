<template>
  <v-sheet color="red" class="pa-4 ma-4" rounded="lg">
    Информация для разработчика

    <v-btn size="small" @click="$store.dispatch('app/tonConnect')">
      connect
    </v-btn>
    <v-btn size="small" @click="$store.dispatch('app/tonDisconnect')">
      disconnect
    </v-btn>
    <v-btn size="small" @click="$store.dispatch('app/tonTransaction')">
      walletInfo
    </v-btn>
    <br />
    tma: {{ tgClient }}
    <br />
    mobile: {{ mobile }}
    <br />
    userAddress: {{ userAddress }}
    <br />

    <div
      v-if="tgClient"
      class="mt-2"
      style="display: flex; align-items: center; font-size: 12px"
    >
      <div v-for="(item, index) in tgColors" :key="item">
        <abbr :title="index">
          <div
            :style="{ 'background-color': item }"
            style="
              height: 20px;
              width: 20px;
              margin-left: 4px;
              margin-top: 0px;
              border-radius: 4px;
            "
          ></div>
        </abbr>
      </div>
    </div>
  </v-sheet>
</template>
<script setup>
import { computed } from 'vue'
import { get } from 'vuex-pathify'

const tgColors = computed(() => {
  return window.Telegram.WebApp.themeParams
})

let { tgClient, mobile, userAddress } = get('app/*')
</script>
