<template>
  <v-form class="pa-2">
    <v-textarea
      rows="2" label="Напишите нам здесь"
      v-model="text"
    />
    <v-card-actions>
      <VSpacer/>
      <v-btn
        variant="outlined"
        block
        @click="sendForm('prayer', {text}, 'Другое')"
      >
        Отправить
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>


import {ref} from 'vue'
import {useFormsStore} from '@/store/form.store'

const text = ref('')
const {sendForm} = useFormsStore()
</script>
