<template>
  <v-card-actions>
    <v-card-title>Обновить воскресную карточку</v-card-title>
    <VSpacer/>
    <v-btn @click="openCard = !openCard">Обновить</v-btn>
  </v-card-actions>
  <v-expand-transition>
    <v-card class="ma-2" v-if="openCard">
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
<!--      <FormKit type="textarea" placeholder="Проповедь в формате html" class="mx-2" v-model="text"/>-->
      <QuillEditor class="ma-2" v-model:content="text" content-type="html" />
      <v-card-actions>
        <VSpacer/>
        <v-btn @click="updateSunday({text, title, id})">Обновить</v-btn>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import {ref} from 'vue'
import {useContentStore} from '@/store/content.store'
import {QuillEditor} from '@vueup/vue-quill'

const {updateSunday} = useContentStore()

const title = ref('')
const text = ref('')
const id = ref('')

const openCard = ref(false)
</script>
