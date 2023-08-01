<template>
  Sunday Card
  <v-card class="ma-2">
    <VTextField
      class="ma-2"
      v-model="title"
      label="Описание"
      hide-details
    />

    <VTextField
      class="ma-2"
      v-model="id"
      label="ID"
      hide-details
    />
    <FormKit type="textarea" placeholder="Проповедь в формате html" class="mx-2" v-model="text"/>
    <v-card-actions>
      <VSpacer/>
      <v-btn @click="updateSunday({text, title, id})">Обновить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useContentStore} from '@/store/content.store'

const {updateSunday} = useContentStore()

const title = ref('')
const text = ref('')
const id = ref('')
</script>
