<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ Component }">
        <Transition type="transition" name="slide-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
      <v-btn id="test" @click="$store.dispatch('app/tonConnect')">
        connect
      </v-btn>
      <v-btn id="test" @click="$store.dispatch('app/tonDisconnect')">
        disconnect
      </v-btn>
      <v-btn id="test" @click="$store.dispatch('app/tonTransaction')">
        walletInfo
      </v-btn>
      {{ UserFriendlyAddress }}
      {{ userAddress }}
      <!--      <pallete />-->
    </v-main>
  </v-app>
</template>

<script setup>
import { get } from 'vuex-pathify'
import { UserFriendlyAddress } from '@/services/tonConnect'

import Pallete from '@/components/Pallete.vue'

let { mobile, userAddress } = get('app/*')
</script>
<style lang="scss">
* {
  color: var(--tg-theme-text-color);
}
.v-application {
  background-color: var(--tg-theme-bg-color) !important;
}
.v-btn {
  background-color: var(--tg-theme-button-color) !important;
  &__content {
    color: var(--tg-theme-button-text-color) !important;
  }
  &__prepend > .v-icon {
    color: var(--tg-theme-button-text-color) !important;
  }
  &__append > .v-icon {
    color: var(--tg-theme-button-text-color) !important;
  }
  &--elevated {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px !important;
  }
  &--disabled {
    .v-btn__overlay {
      opacity: 0.2 !important;
    }
    .v-btn__prepend > .v-icon {
      color: var(--tg-theme-button-text-color) !important;
    }
    .v-btn__append > .v-icon {
      color: var(--tg-theme-button-text-color) !important;
    }
    .v-btn__content {
      color: var(--tg-theme-button-text-color) !important;
    }
  }
}
/* fields */
.v-field {
  border-radius: 8px !important;
  border: 1px solid var(--tg-theme-button-color) !important;
  background-color: var(--tg-theme-secondary-bg-color) !important;
  .v-icon {
    &__invalid {
      color: var(--tg-theme-destructive-text-color);
    }
  }
  &--variant-solo {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px !important;
  }
}

.page-title {
  font-weight: bolder;
  font-size: 16px;
  margin: 0 4px 12px 4px;
  color: var(--tg-theme-accent-text-color) !important;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  transform: translateX(400px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}

/*.fade-enter-active,*/
/*.fade-leave-active {*/
/*  transition: opacity 0.1s ease;*/
/*}*/
/*.fade-enter-from,*/
/*.fade-leave-to {*/
/*  opacity: 0;*/
/*}*/
</style>
