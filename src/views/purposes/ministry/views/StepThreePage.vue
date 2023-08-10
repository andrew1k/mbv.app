<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Семинар «Шаг 3. Служение»"
        :img="step"
        :text="stepText"
        btn="Записаться на Шаг 3"
        color="ministry"
        @togglerBtn="signToStep = !signToStep"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="signToStep" variant="text" elevation="0" rounded="0" class="ma-2">
        <VCardText>
          Запишитесь на ближайший шаг в календаре и вам придет уведомление за день до семинара
        </VCardText>
        <EventCard
          v-for="evnt in filteredEvents"
          :key="evnt.id"
          :event-title="evnt.title"
          :event-text="evnt.text"
          :event-time="evnt.start"
          :event-color="evnt.color"
          :event-icon="evnt.icon"
          :event-id="evnt.id"
          :show="true"
          @sign-btn="signToEvent(evnt)"
          @unsign-btn="unsignToEvent(evnt)"/>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import step from '@/assets/ministryPics/step.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import EventCard from '@/components/calendar/EventCard.vue'
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/store/calendar.store'
import {storeToRefs} from 'pinia'

const stepText = ref(`Узнавая больше о своей уникальности!<br/><br/>
Мы верим, что каждый член церковной семьи — служитель! <br/> Бог не планировал, что участвовать в деле церкви могут только выпускники семинарий — это может делать каждый из нас! Шаг 3 предназначен для того, чтобы определить вашу уникальность, выявить ваши дары и таланты и помочь выбрать то направление или служение, которое подойдет вам лучше всего! На семинаре с помощью расширенного, многопрофильного теста, вы узнаете, как Бог может направить ваше сердце, опыт, способности, уникальность личности и духовные дары для служения другим людям.`)
const signToStep = ref(false)

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('third')) return evnt
})
</script>
