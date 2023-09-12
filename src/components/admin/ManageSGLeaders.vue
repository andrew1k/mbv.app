<template>
  <v-card-actions>
    <v-card-title>Добавить МГ лидера</v-card-title>
    <VSpacer/>
    <v-btn @click="openCard = !openCard">Добавить</v-btn>
  </v-card-actions>
  <v-card class="ma-2 pa-2" v-if="openCard">
    <v-form>
      <VTextField
        class="ma-1"
        v-model="ageVal"
        label="Возраст"
        type="string"
      />
      <VTextField
        class="ma-1"
        v-model="day"
        label="День"
        type="string"
      />
      <VTextField
        class="ma-1"
        v-model="leader"
        label="Лидер"
        type="string"
      />
      <VTextField
        class="ma-1"
        v-model="subway"
        label="Метро"
        type="string"
      />
      <VTextField
        class="ma-1"
        v-model="type"
        label="Тип"
        type="string"
      />
      <v-btn block @click="setSGLeader({subway, ageVal, day, leader, type})">Добавить</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useContentStore} from '@/store/content.store'

const {setSGLeader} = useContentStore()

const openCard = ref(false)
const ageVal = ref('')
const day = ref('')
const leader = ref('')
const subway = ref('')
const type = ref('')
</script>
