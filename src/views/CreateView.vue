<template>
  <v-container>
    <div class="text">Создание</div>
    <v-text-field
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Название"
      hide-details
    ></v-text-field>
    <v-text-field
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Описание"
      hide-details
    ></v-text-field>
    <v-text-field
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Цена участия"
      hide-details
    ></v-text-field>
    <v-text-field
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Дата проведения"
      hide-details
    ></v-text-field>
    <v-text-field
      class="mb-2"
      density="comfortable"
      variant="solo"
      label="Время проведения"
      hide-details
    ></v-text-field>
    <v-btn
      block
      rounded="lg"
      append-icon="mdi-arrow-right-bold"
      @click="$router.push({ name: 'conditions' })"
      >Задать условия
    </v-btn>
    <!--    <label for="avatar">Choose a profile picture:</label>-->

    <!--    <input-->
    <!--      type="file"-->
    <!--      id="avatar"-->
    <!--      name="avatar"-->
    <!--      accept="image/png, image/jpeg"-->
    <!--    />-->
  </v-container>
</template>

<script setup></script>
