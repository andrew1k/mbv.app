<!--<template>-->
<!--  <v-card elevation="0" rounded="0" variant="text" max-width="600" class="mx-auto">-->
<!--    <v-card-->
<!--      class="ma-2"-->
<!--      v-for="(card, i) in purposesCards"-->
<!--      :key="i"-->
<!--      @click="$router.push(card.routerTo)"-->
<!--      rounded="xl"-->
<!--    >-->
<!--      <v-card-actions>-->
<!--        <VAvatar class="mx-3" :image="card.img" rounded="0" />-->
<!--        <VCardItem :title="card.title" :subtitle="card.subtitle"/>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->
<!--  </v-card>-->
<!--</template>-->

<!--<script setup>-->
<!--import worship from '@/assets/icons/worship.svg'-->
<!--import evangelism from '@/assets/icons/evangelism.svg'-->
<!--import discipleship from '@/assets/icons/discipleship.svg'-->
<!--import ministry from '@/assets/icons/ministry.svg'-->
<!--import fellowship from '@/assets/icons/fellowship.svg'-->
<!--const purposesCards = [-->
<!--  {-->
<!--    title: 'ПОКЛОНЕНИЕ',-->
<!--    subtitle: 'Мы Бога Восхваляем!',-->
<!--    img: worship,-->
<!--    text: 'Возлюби Господа Бога твоего всем сердцем твоим. Матфея 22:37',-->
<!--    routerTo: '/purposes/worship',-->
<!--    color: '#015366 '-->
<!--  },{-->
<!--    title: 'ОБЩЕНИЕ',-->
<!--    subtitle: 'Можем больше вместе!',-->
<!--    img: fellowship,-->
<!--    text: `И они постоянно пребывали ... в общении Деяния 2:42`,-->
<!--    routerTo: '/purposes/fellowship',-->
<!--    color: '#0093b7 '-->
<!--  },{-->
<!--    title: 'УЧЕНИЧЕСТВО',-->
<!--    subtitle: 'Мы будем возрастать!',-->
<!--    img: discipleship,-->
<!--    text: 'И они постоянно пребывали в учении Апостолов. Деяния 2:42',-->
<!--    routerTo: '/purposes/discipleship',-->
<!--    color: '#a0c5cf'-->
<!--  },{-->
<!--    title: 'СЛУЖЕНИЕ',-->
<!--    subtitle: 'Место больших возможностей!',-->
<!--    img: ministry,-->
<!--    text: 'Разделяли всем, смотря по нужде каждого. Деяния 2:45',-->
<!--    routerTo: '/purposes/ministry',-->
<!--    color: '#e6eceb'-->
<!--  },{-->
<!--    title: 'БЛАГОВЕСТИЕ',-->
<!--    subtitle: 'Мы благовествуем всем!',-->
<!--    img: evangelism,-->
<!--    text: 'Господь же ежедневно прилагал спасаемых к Церкви. Деяния 2:47',-->
<!--    routerTo: '/purposes/evangelism',-->
<!--    color: '#63cdd7 '-->
<!--  }-->
<!--]-->
<!--</script>-->
<template>
  <v-card
    elevation="0"
    rounded="0"
    variant="text"
    max-width="600"
    class="mx-auto"
  >
    <v-card
      v-for="(purpose, i) in purposes"
      :key="i"
      elevation="0"
      rounded="0"
      variant="text"
    >
      <PurposeCard
        :purpose-title="purpose.title"
        :purpose-route="purpose.route"
        :purpose-color="purpose.color"
        :purpose-acts="purpose.actions"
      />
    </v-card>
  </v-card>
</template>

<script setup>
import PurposeCard from '@/components/discover/PurposeCard.vue'
import {ref} from 'vue'

const purposes = ref([
  {
    title: 'Поклонение',
    route: '/purposes/worship',
    color: 'worship',
    actions: [
      {
        title: 'Воскресенье',
        img: '',
        route: '/home',
      }, {
        title: 'Молитвы',
        img: '',
        route: '',
      }, {
        title: 'Конференции',
        img: '',
        route: '',
      }, {
        title: 'Вечер Хвалы',
        img: '',
        route: '',
      }, {
        title: 'Песни',
        img: '',
        route: '',
      },
    ],
  }, {
    title: 'С чего начать?',
    route: '/purposes/fellowship',
    color: 'fellowship',
    actions: [
      {
        title: 'Встреча-знакомство',
        img: '',
        route: '',
      },{
        title: 'Шаг 1',
        img: '',
        route: '',
      },{
        title: 'Малые Группы',
        img: '',
        route: '',
      },{
        title: 'Крещение',
        img: '',
        route: '',
      },{
        title: 'Наставничество',
        img: '',
        route: '',
      },
    ],
  },{
    title: 'Рост и обучение',
    route: '/purposes/discipleship',
    color: 'discipleship',
    actions: [
      {
        title: 'Наставничество',
        img: '',
        route: '',
      },{
        title: 'Шаг 2',
        img: '',
        route: '',
      },{
        title: 'Ретрит',
        img: '',
        route: '',
      },{
        title: 'Семейное служение',
        img: '',
        route: '',
      },{
        title: 'Книги',
        img: '',
        route: '',
      },{
        title: 'Курсы',
        img: '',
        route: '',
      },
    ],
  },{
    title: 'Начать служить',
    route: '/purposes/ministry',
    color: 'ministry',
    actions: [
      {
        title: 'Служения',
        img: '',
        route: '',
      },{
        title: 'Консультация',
        img: '',
        route: '',
      },{
        title: 'Шаг 3',
        img: '',
        route: '',
      },
    ],
  },{
    title: 'Рассказать об Иисусе',
    route: '/purposes/evangelism',
    color: 'evangelism',
    actions: [
      {
        title: 'VECHNO',
        img: '',
        route: '',
      },{
        title: 'Шаг 4',
        img: '',
        route: '',
      },{
        title: 'Кто твой один?',
        img: '',
        route: '',
      },{
        title: 'Семинар',
        img: '',
        route: '',
      },{
        title: 'Спектакли',
        img: '',
        route: '',
      },{
        title: 'OutReach',
        img: '',
        route: '',
      },
    ],
  },{
    title: 'Помощь',
    actions: [
      {
        title: 'Молитвенная поддержка',
        img: '',
        route: '',
      },{
        title: 'Молитвенный сад',
        img: '',
        route: '',
      },{
        title: 'Духовная консультация',
        img: '',
        route: '',
      },{
        title: 'Ретрит',
        img: '',
        route: '',
      },{
        title: 'Связь с церковью',
        img: '',
        route: '',
      },
    ],
  },
])
</script>
