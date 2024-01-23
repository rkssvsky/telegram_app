<template>
  <v-container>
    <bread-crumbs :items="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12" md="3" lg="3" class="pb-0">
        <UserProfile :user="user" :wallet="walletTX" :loadWallet="loadWallet" />
      </v-col>
      <v-col cols="12" sm="12" md="9" lg="9">
        <ActionsBar
          @link-click="ActionBarClickHandle($event)"
          :links="tabs"
          :activeTab="activeTab"
        />
        <Component
          :is="components[activeTab]"
          :items="activeTab === 'MyObjectsList' ? myLocations : rentedList"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ActionsBar from '@/components/profile/ActionsBar.vue'
import UserProfile from '@/components/profile/UserProfile.vue'
import BreadCrumbs from '@/components/common/BreadCrumbs.vue'

import { sync, get } from 'vuex-pathify'
import { shallowReactive } from 'vue'
const breadcrumbs = [
  {
    title: 'Главная',
    disabled: false,
    href: '/'
  },
  {
    title: 'Профиль',
    disabled: true,
    href: '/'
  }
]

let { user, activeTab, tabs, walletTX, loadWallet } = sync('user/*')
let { rentedList, myLocations } = get('squares/*')
function ActionBarClickHandle(activeLink) {
  activeTab.value = activeLink.value
  loadComponent()
}
const components = shallowReactive({})

async function loadComponent() {
  console.log('start load dynamic import')
  // Динамический импорт компонента на основе значения ActiveTab
  const component = await import(`@/components/profile/${activeTab.value}.vue`)
  components[activeTab.value] = component.default
}
</script>
<style>
td {
  padding: 0 8px !important;
}
@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table thead {
    display: none;
  }

  table tr {
    display: block;
  }

  table td {
    display: flex;
    justify-content: space-between;
    text-align: right;
    align-items: center;
    font-size: 14px;
    border-bottom: 1px solid #e2e2e2;
    border-right: 1px solid transparent;
  }

  table td:last-child {
    border-bottom: 0;
  }

  table td:before {
    content: attr(data-label);
    float: left;
    text-transform: uppercase;
    font-weight: bolder;
  }
}
</style>
