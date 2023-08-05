<template>
  <v-card elevation="0" rounded="0" variant="text" max-width="600" class="mx-auto">
    <v-card class="ma-2">
      <v-img :src="step">
        <div class="fill-height bottom-gradient d-flex align-end">
          <VCardTitle class="text-white">Семинар «Шаг 2. Ученичество»</VCardTitle>
        </div>
      </v-img>
      <VCardText>{{ stepText }}</VCardText>
      <v-card-actions>
        <VSpacer/>
        <VBtn color="discipleship" @click="signToStep = !signToStep">Записаться на шаг 2</VBtn>
      </v-card-actions>
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
          :show="true"
          @sign-btn="signToEvent(evnt)"
          @unsign-btn="unsignToEvent(evnt)"/>
      </v-card>
    </v-expand-transition>
    <VCardTitle class="mt-4">Разбор Библии | Даниил Шатров</VCardTitle>
    <v-card class="ma-2">
      <LiteYouTubeEmbed playlist="true" title="Разбор Библии | Даниил Шатров" id="PLjjvxd6WcKV0y6SrODLnJBOWYaUjzTHfE"
                        playlistCoverId="CJOmxv5D8dg"/>
    </v-card>
    <VCardTitle class="mt-4">Библейская школа | онлайн</VCardTitle>
    <v-card class="ma-2">
      <LiteYouTubeEmbed playlist="true" title="Библейская школа | онлайн" id="PLjjvxd6WcKV2oN8Gv8aIvdZ657hLS_KNR"
                        playlistCoverId="W9oUvW2VdTA"/>
    </v-card>
  </v-card>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import {ref} from 'vue'
import step from '@/assets/discepleshipPics/step.jpg'
import EventCard from '@/components/calendar/EventCard.vue'
import {useCalendarEventsStore} from '@/store/calendar.store'
import {storeToRefs} from 'pinia'

const stepText = ref(`Это 4-х часовой семинар, который является второй ступенью процесса духовного роста человека.<br/> На семинаре рассказываются о том, какие привычки и навыки нужно иметь каждому христианину, чтобы стать духовно зрелым учеником, а также узнать о том, как понять Библию, как правильно молиться, зачем нужно отдавать десятину и почему так важно быть частью малой группы.<br/> На семинаре предоставляется материал, который служит хорошим помощником для того, чтобы духовное возрастание было максимально легким и комфортным.`)
const signToStep = ref(false)

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('second')) return evnt
})
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    transparent 90px
  );
}
</style>
