<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Семинар «Шаг 4. Благовестие» "
        btn="Записаться на шаг 4"
        :img="step"
        :text="stepText"
        @togglerBtn="signToStep = !signToStep"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="signToStep" variant="text" elevation="0" rounded="0" class="ma-2">
        <VCardText>Запишитесь на ближайший шаг в календаре и Вам придет уведомление за день до семинара</VCardText>
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
import step from '@/assets/evangelismPics/step.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import EventCard from '@/components/calendar/EventCard.vue'
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/store/calendar.store'
import {storeToRefs} from 'pinia'

const signToStep = ref(false)
const stepText = ref(`Это 4-х часовой семинар, на котором Вы узнаете о том, как привлекать людей к Иисусу Христу, способствуя изменению их жизни, а также узнаете о том, как рассказывать о вере, надежде и Божьей любви так, чтобы Божье спасение достигало как можно большего числа людей.`)

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('fourth')) return evnt
})
</script>
