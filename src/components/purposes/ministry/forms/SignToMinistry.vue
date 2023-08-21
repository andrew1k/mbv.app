<template>
  <v-form class="ma-2">
    <VTextField
      label="Cфера вашей деятельности"
      v-model="action"
      variant="outlined"
      class="ma-2"
      counter
      maxlength="50"
      :rules="[rules.counter]"
    />
    <VTextField
      label="Предпочтения по служению"
      v-model="choice"
      variant="outlined"
      class="ma-2"
      counter
      maxlength="50"
      :rules="[rules.counter]"
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

const rules = ref({
  required: value => !!value || 'Обязательно.',
  counter: value => value.length <= 50 || 'Максимум 50 символов'
})
</script>
