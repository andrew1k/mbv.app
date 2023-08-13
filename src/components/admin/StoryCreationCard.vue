<template>
  <v-card-actions>
    <v-card-title>Создать Story карточку</v-card-title>
    <VSpacer/>
    <v-btn @click="openCard = !openCard">Создать</v-btn>
  </v-card-actions>
  <v-expand-transition>
    <v-card class="ma-2 pa-2" v-if="openCard">
      <VTextField
        v-model="title"
        label="Описание"
      />
      <VTextField
        v-model="link"
        label="link"
      />
      <VTextField
        v-model="linkColor"
        label="linkColor"
      />
      <VTextField
        v-model="linkLabel"
        label="linkLabel"
      />
      <VFileInput
        clearable
        label="Preview pic"
        v-model="previewIgm"
      />
      <VFileInput
        multiple
        clearable
        chips
        label="Story pics"
        v-model="storyImgs"
      />
      <v-card-actions>
        <VSpacer/>
        <v-btn block @click="uploadStory(previewIgm, storyImgs, title, link, linkColor, linkLabel)">
          Upload story
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import {ref} from 'vue'
import {useContentStore} from '@/store/content.store'

const previewIgm = ref(null)
const storyImgs = ref(null)
const title = ref('')
const link = ref('')
const linkColor = ref('')
const linkLabel = ref('')

const {uploadStory} = useContentStore()

const openCard = ref(false)
</script>
