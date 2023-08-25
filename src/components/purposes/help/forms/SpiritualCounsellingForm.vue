<template>
  <v-form class="pa-2">
    <v-textarea
      rows="2"
      label="Напишите, что нам важно знать"
      v-model="question"
      counter
      maxlength="250"
    />
    <v-radio-group v-model="answer" class="my-1" label="Как с вами удобнее связаться?" density="comfortable"
                   color="success" hide-details>
      <VRadio label="What's App" value="WhatsApp"/>
      <VRadio label="Telegram" value="Telegram"/>
      <VRadio label="По телефону" value="По телефону"/>
    </v-radio-group>
    <v-card-actions>
      <v-btn
        block
        variant="outlined"
        @click="sendForm('counseling', {question,answer}, 'Духовная консультация')"
      >
        Отправить
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {ref} from 'vue'
import {useFormsStore} from '@/store/form.store'


const question = ref('')
const answer = ref('')
const {sendForm} = useFormsStore()

</script>
