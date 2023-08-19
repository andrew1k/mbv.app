<template>
  <v-card-actions>
    <v-card-title>Создать календарное событие</v-card-title>
    <VSpacer/>
    <v-btn @click="openCard = !openCard">Создать</v-btn>
  </v-card-actions>
  <v-expand-transition>
    <v-card class="ma-2 pa-2" v-if="openCard">
      <VTextField
        class="ma-1"
        v-model="eventDate"
        label="Дата"
        type="date"
      />
      <VTextField
        class="ma-1"
        v-model="eventTime"
        label="Время"
        type="time"
      />
      <VSelect
        :color="eventColor"
        class="ma-1"
        v-model="eventColor"
        label="Цвет"
        :items="['gray', 'red', 'orange', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink', 'brown']"
      >
        <template #prepend>
          <VIcon :color="eventColor" size="x-large" icon="mdi-circle"/>
        </template>
      </VSelect>
      <VTextField
        class="ma-1"
        v-model="eventTitle"
        label="Заголовок"
        type="string"
      />
      <VTextarea
        class="ma-1"
        v-model="eventText"
        label="html Текст"
        type="string"
      />
      <VSelect
        v-model="chipValues"
        class="ma-1"
        :items="chipItems"
        chips
        label="Принадлежность"
        multiple
      />
      <VSelect
        :prepend-icon="chipIcon"
        v-model="chipIcon"
        class="ma-1"
        :items="chipIcons"
        chips
        label="Иконка"
      />
      <v-card-actions>
        <VSpacer/>
        <v-btn block
               @click="saveEventToDB({eventTitle,eventText,eventDate,eventColor,eventTime, chipValues, chipIcon})">
          Создать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/store/calendar.store'

const {saveEventToDB} = useCalendarEventsStore()

const chipItems = ref(['ministry', 'fellowship', 'discepleship', 'evangelism', 'worship', 'youth', 'retreat', 'first', 'second', 'third', 'fourth', 'baptism', 'firstMeeting'])
const chipIcons = ref(['mdi-heart', 'mdi-account-multiple', 'mdi-school', 'mdi-hand-heart', 'mdi-torch', 'mdi-run', 'mdi-waves'])
const chipIcon = ref()
const chipValues = ref([])
const eventDate = ref('')
const eventTime = ref('')
const eventColor = ref('gray')
const eventTitle = ref('')
const eventText = ref('')

const openCard = ref(false)
</script>
