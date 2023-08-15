<template>
  <v-form class="pa-2">
    <v-radio-group
      v-model="question1"
      class="mt-4"
      density="comfortable"
      color="error"
    >
      <VRadio label="Я хочу стать ведущим Малой Группы"
              value="Я хочу стать ведущим Малой Группы"/>
      <VRadio label="Я готов предоставить свой дом для Малой Группы"
              value="Я готов предоставить свой дом для Малой Группы"/>
      <VRadio label="Готов проводить группу, но не в своем доме"
              value="Готов проводить группу, но не в своем доме"/>
    </v-radio-group>
    <VDivider />
    <v-radio-group
      v-model="question2"
      class="mt-4"
      density="comfortable"
      color="fellowship"
    >
      <VRadio label="Я проходил Шаг 1"
              value="Я проходил Шаг 1"/>
      <VRadio label="Я не проходил Шаг 1"
              value="Я не проходил Шаг 1"/>
    </v-radio-group>
    <VDivider/>
    <v-radio-group
      v-model="question3"
      class="mt-4"
      density="comfortable"
      color="fellowship"
    >
      <VRadio label="Я посещал Малую Группу до этого"
              value="Я посещал Малую Группу до этого"/>
      <VRadio label="Я не посещал Малую Группу"
              value="Я не посещал Малую Группу"/>
    </v-radio-group>
    <v-card-actions>
      <v-btn
        block
        variant="outlined"
        @click="sendForm('fellowship', {question1, question2, question3}, 'Открыть МГ')"
      >
        Отправить заявку
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {useFormsStore} from '@/store/form.store'
import {ref} from 'vue'

const question1 = ref('')
const question2 = ref('')
const question3 = ref('')
const {sendForm} = useFormsStore()
</script>
