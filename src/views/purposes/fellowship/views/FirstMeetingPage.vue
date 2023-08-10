<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Встреча-знакомство"
        btn="Записаться"
        :img="firstMeeting"
        :text="textFirstMeeting"
        @toggler-btn="signToFirstMeeting = !signToFirstMeeting"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="signToFirstMeeting" variant="text" elevation="0" rounded="0" class="ma-2">
        <VCardSubtitle>Ближайшая встреча-знакомство в календаре</VCardSubtitle>
        <VDivider/>
        <EventCard
          v-for="evnt in firstMeetingEvnt"
          :key="evnt.id"
          :event-title="evnt.title"
          :event-text="evnt.text"
          :event-time="evnt.start"
          :event-color="evnt.color"
          :event-icon="evnt.icon"
          :event-id="evnt.id"
          @sign-btn="signToEvent(evnt)"
          @unsign-btn="unsignToEvent(evnt)"
          :show="true"
        />
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import firstMeeting from '@/assets/fellowshipPics/firstMeeting.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import EventCard from '@/components/calendar/EventCard.vue'
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/store/calendar.store'
import {storeToRefs} from 'pinia'

const signToFirstMeeting = ref(false)

const textFirstMeeting = ref([
  `Если вы недавно присоединились к нашей церкви (в течение 2 месяцев) или сегодня пришли впервые, приглашаем вас на Встречу-Знакомство.<br /><br />
  Мы с пасторами, лидерами и служителями церкви будем рады познакомиться с вами и провести время в дружеском общении за чашечкой чая, рассказать о себе, о церкви, ответить на вопросы и помолиться за вас.`,
])

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const firstMeetingEvnt = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

firstMeetingEvnt.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('firstMeeting')) return evnt
})
</script>
