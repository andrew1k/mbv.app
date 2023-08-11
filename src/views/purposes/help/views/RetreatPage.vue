<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <purposes-cards :img="retreat" :text="text" title="Ретрит «Преображение»" @toggler-btn="signToggle" btn="Записаться"/>
    </v-card>
    <v-expand-transition>
      <v-card v-if="sign" variant="text" elevation="0" rounded="0" class="ma-2">
        <VCardText>Запишитесь на ближайший ретрит в календаре и вам придет уведомление за день до семинара</VCardText>
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
import retreat from '@/assets/helpPics/retreat.jpg'
import PurposesCards from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'
import EventCard from '@/components/calendar/EventCard.vue'
import {useCalendarEventsStore} from '@/store/calendar.store'
import {storeToRefs} from 'pinia'

const text = ref(`Когда жизнь утратила вкус и заботы века сего ввергают нас в рутину повседневности, когда страх перед будущим лишает нас надежды и радости – пора сделать остановку и вновь пережить встречу с реальностью Живого Бога. Ретрит «Преображение» — это возможность на время остановить текущие дела и погрузиться в атмосферу Божественного Присутствия, поговорить с Богом о самом важном, обновиться в благодати и обрести силу для решения своих жизненных вызовов и задач.
<br/><br/>
Ретриты «Преображение» имеют различную направленность
<br/><br/>
Тема «Совершенная любовь» будет полезна людям, которым важно найти точку опоры в своей жизни и обрести внутренний источник силы, избавиться от деструктивных чувств вины или обиды, преодолеть страх перед вызовами сегодняшнего дня, и уверенно открыться совершенной любви Небесного Отца и Его благому будущему, в которое Он приготовил для каждого из нас.
<br/><br/>
Тема: «Благодать Духа» призвана помочь верующим пережить или вновь обновить опыт глубокого исполнения Святым Духом, ещё больше осознать руководящую роль Духа Святого в жизни человека, понять, как Бог говорит лично с нами, и постараться достичь единения (синергии) с Богом в наших желаниях, планах и действиях в контексте нашей текущей жизненной ситуации.`)

const sign = ref(false)

const signToggle = () => {
  sign.value = !sign.value
  if (sign.value)
    setTimeout(() => {
      window.scrollBy({
        top: 500,
        left: 0,
        behavior: "smooth",
      })
    }, 300)
}

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('retreat')) return evnt
})
</script>
