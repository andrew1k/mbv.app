<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Семинар - Шаг 1 «Общение»"
        btn="Записаться на Шаг 1"
        :img="step"
        :text="stepText"
        @toggler-btn="signToStep = !signToStep"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="signToStep" variant="text" elevation="0" rounded="0" class="ma-2">
        <VCardText>Запишитесь на ближайший шаг в календаре и вам придет уведомление за день до семинара</VCardText>
        <EventCard
          v-for="evnt in filteredEvents"
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
import {ref} from 'vue'
import step from '@/assets/fellowshipPics/step.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import EventCard from '@/components/calendar/EventCard.vue'
import {useCalendarEventsStore} from '@/store/calendar.store'
import {storeToRefs} from 'pinia'

const signToStep = ref(false)

const stepText = ref([
  `Шаг 1 «Общение» или «Узнавая больше о нашей церковной семье» – это первый из основополагающих курсов церкви «Миссия Благая Весть». Его важно пройти и тем, кто недавно в вере, и кто уже давно верующий, но недавно в нашей церкви. <br /><br />
  Церковь «Миссия Благая Весть» хочет стать для вас местом, где вам будет комфортно как дома. Каждая здоровая семья имеет общие убеждения, цели и обязательства и на этом семинаре мы хотим поделиться с вами тем, кто мы, во что мы верим и куда мы идём.<br /><br />
  Мы поговорим о том, как устроена наша церковь, какова её история, видение и структура. Раскроем пять жизненных целей, которые были предназначены для нас Богом, поговорим о преимуществах церковной семьи, а также о том, как стать членом церкви «Миссия Благая Весть».`,
])

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('first')) return evnt
})
</script>
