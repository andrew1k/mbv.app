<template>
  <v-form class="px-2">
    <v-textarea
      rows="2"
      label="Напишите, о чем мы можем помолиться"
      v-model="prayer"
      counter
      maxlength="250"
    />
    <VCheckbox
      color="worship"
      label="Отправить анонимно (Ваши данные не будут видны молитвенному служителю)"
      v-model="anon"
    />
    <v-card-actions>
      <VSpacer/>
      <v-btn variant="outlined" block
             @click="sendForm('prayer', {prayer, anon}, 'Молитвенная нужда')">
        Отправить
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {ref} from 'vue'
import {useFormsStore} from '@/store/form.store'

const prayer = ref('')
const anon = ref(false)
const {sendForm} = useFormsStore()
</script>
