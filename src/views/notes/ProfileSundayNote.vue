<template>
  <v-card variant="text" rounded="0">
    <v-card class="ma-2">
      <LiteYouTubeEmbed :id="note.id" :title="note.title"/>
    </v-card>
    <h3 class="text-center my-3">{{ note.title }}</h3>
    <v-card class="ma-2 pa-2">
      <h4 class="ma-2">Конспект проповеди</h4>
      <QuillEditor v-model:content="note.text" content-type="html" toolbar="minimal"/>
      <v-card-actions>
        <vSpacer/>
        <v-btn
          @click="saveSundayNotes(note)"
          variant="outlined"
          prepend-icon="mdi-bookmark-outline"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script setup>
import {QuillEditor} from '@vueup/vue-quill'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import {storeToRefs} from 'pinia'
import {useAuthStore} from '@/store/auth.store'
import {computed, ref} from 'vue'
import {useContentStore} from '@/store/content.store'

const {saveSundayNotes} = useContentStore()

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const {savedNotes} = storeToRefs(useAuthStore())
const note = ref(computed(() => savedNotes.value.find(item => item.timeId === props.id)))
</script>
