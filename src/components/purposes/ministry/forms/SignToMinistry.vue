<template>
  <v-form class="ma-2">
    <VTextField
      label="Cфера вашей деятельности"
      v-model="action"
      variant="outlined"
      class="ma-2"
    />
    <VTextField
      label="Предпочтения по служению"
      v-model="choice"
      variant="outlined"
      class="ma-2"
    />
    <v-radio-group v-model="answer" class="my-1" label="Как ответить Вам на заполненную анкету?" density="comfortable"
                   color="success" hide-details>
      <VRadio label="What's App" value="WhatsApp"/>
      <VRadio label="Telegram" value="Telegram"/>
      <VRadio label="По телефону" value="По телефону"/>
    </v-radio-group>
  </v-form>
  <v-card-actions>
    <v-btn
      block
      variant="outlined"
      @click="sendForm('ministry', {action, choice, answer}, 'Записаться на консультацию')">
      Записаться на консультацию
    </v-btn>
  </v-card-actions>
</template>

<script setup>
import {useFormsStore} from '@/store/form.store'
import {ref} from 'vue'

const action = ref('')
const choice = ref('')
const answer = ref('')
const {sendForm} = useFormsStore()
</script>
