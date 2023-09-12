<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Встреча-знакомство"
        btn="Записаться"
        :img="firstMeeting"
        :text="textFirstMeeting"
        @toggler-btn="sendForm('fellowship', {'btn': 'Я хочу на встречу-знакомство'}, 'Встреча-Знакомство')"
      />
    </v-card>
  </v-card>
</template>

<script setup>
import firstMeeting from '@/assets/fellowshipPics/firstMeeting.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'

const textFirstMeeting = ref([
  `Если Вы недавно присоединились к нашей церкви (в течение 2 месяцев) или сегодня пришли впервые, приглашаем Вас на Встречу-Знакомство.<br /><br />
  Мы с пасторами, лидерами и служителями церкви будем рады познакомиться с Вами и провести время в дружеском общении за чашечкой чая, рассказать о себе, о церкви, ответить на вопросы и помолиться за Вас. <br><br>
  Встреча-Знакомство проходит по воскресеньям в 15:00. Служитель встретит вас у стойки информации`,
])

import {useFormsStore} from '@/store/form.store'
const {sendForm} = useFormsStore()
</script>
