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
    <v-card elevation="0" rounded="xl" class="mb-4 mt-2 mx-2">
      <v-card elevation="0" @click="purposes.worship.isOpen = !purposes.worship.isOpen">
        <v-card-actions>
          <VCardItem
            :prepend-icon="purposes.worship.icon"
            :title="purposes.worship.title"
          />
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.worship.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.worship.isOpen" elevation="0" rounded="0" variant="text">
          <v-slide-group>
            <v-slide-group-item v-for="(pAct, i) in purposes.worship.actions" :key="i">
              <v-card
                class="my-2 ml-2"
                height="200"
                width="200"
                :image="pAct.route"
                :to="pAct.img"
              >
                <div class="fill-height justify-center bottom-gradient d-flex align-end">
                  <h3 class="text-white my-3">{{ pAct.title }}</h3>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-card>
      </v-expand-transition>
    </v-card>
<!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card elevation="0" rounded="xl" class="mb-4 mt-2 mx-2">
      <v-card elevation="0" @click="purposes.fellowship.isOpen = !purposes.fellowship.isOpen">
        <v-card-actions>
          <VCardItem
            :prepend-icon="purposes.fellowship.icon"
            :title="purposes.fellowship.title"
          />
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.fellowship.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.fellowship.isOpen" elevation="0" rounded="0" variant="text">

        </v-card>
      </v-expand-transition>
    </v-card>
<!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card elevation="0" rounded="xl" class="mb-4 mt-2 mx-2">
      <v-card elevation="0" @click="purposes.discipleship.isOpen = !purposes.discipleship.isOpen">
        <v-card-actions>
          <VCardItem
            :prepend-icon="purposes.discipleship.icon"
            :title="purposes.discipleship.title"
          />
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.discipleship.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.discipleship.isOpen" elevation="0" rounded="0" variant="text">

        </v-card>
      </v-expand-transition>
    </v-card>
<!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card elevation="0" rounded="xl" class="mb-4 mt-2 mx-2">
      <v-card elevation="0" @click="purposes.ministry.isOpen = !purposes.ministry.isOpen">
        <v-card-actions>
          <VCardItem
            :prepend-icon="purposes.ministry.icon"
            :title="purposes.ministry.title"
          />
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.ministry.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.ministry.isOpen" elevation="0" rounded="0" variant="text">

        </v-card>
      </v-expand-transition>
    </v-card>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const purposes = ref({
  worship: {
    title: 'Поклонение',
    route: '/purposes/worship',
    color: 'worship',
    icon: 'mdi-heart',
    isOpen: true,
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
  },
  fellowship: {
    title: 'С чего начать?',
    route: '/purposes/fellowship',
    color: 'fellowship',
    icon: 'mdi-account-multiple',
    isOpen: false,
    actions: [
      {
        title: 'Встреча-знакомство',
        img: '',
        route: '',
      }, {
        title: 'Шаг 1',
        img: '',
        route: '',
      }, {
        title: 'Малые Группы',
        img: '',
        route: '',
      }, {
        title: 'Крещение',
        img: '',
        route: '',
      }, {
        title: 'Наставничество',
        img: '',
        route: '',
      },
    ],
  },
  discipleship: {
    title: 'Рост и обучение',
    route: '/purposes/discipleship',
    color: 'discipleship',
    icon: 'mdi-school',
    isOpen: false,
    actions: [
      {
        title: 'Наставничество',
        img: '',
        route: '',
      }, {
        title: 'Шаг 2',
        img: '',
        route: '',
      }, {
        title: 'Ретрит',
        img: '',
        route: '',
      }, {
        title: 'Семейное служение',
        img: '',
        route: '',
      }, {
        title: 'Книги',
        img: '',
        route: '',
      }, {
        title: 'Курсы',
        img: '',
        route: '',
      },
    ],
  },
  ministry: {
    title: 'Начать служить',
    route: '/purposes/ministry',
    color: 'ministry',
    icon: 'mdi-hand-heart',
    isOpen: false,
    actions: [
      {
        title: 'Служения',
        img: '',
        route: '',
      }, {
        title: 'Консультация',
        img: '',
        route: '',
      }, {
        title: 'Шаг 3',
        img: '',
        route: '',
      },
    ],
  }
  ,
  evangelism: {
    title: 'Рассказать об Иисусе',
    route: '/purposes/evangelism',
    color: 'evangelism',
    icon: 'mdi-torch',
    isOpen: false,
    actions: [
      {
        title: 'VECHNO',
        img: '',
        route: '',
      }, {
        title: 'Шаг 4',
        img: '',
        route: '',
      }, {
        title: 'Кто твой один?',
        img: '',
        route: '',
      }, {
        title: 'Семинар',
        img: '',
        route: '',
      }, {
        title: 'Спектакли',
        img: '',
        route: '',
      }, {
        title: 'OutReach',
        img: '',
        route: '',
      },
    ],
  },
  help: {
    title: 'Помощь',
    route: '/home',
    actions: [
      {
        title: 'Молитвенная поддержка',
        img: '',
        route: '',
      }, {
        title: 'Молитвенный сад',
        img: '',
        route: '',
      }, {
        title: 'Духовная консультация',
        img: '',
        route: '',
      }, {
        title: 'Ретрит',
        img: '',
        route: '',
      }, {
        title: 'Связь с церковью',
        img: '',
        route: '',
      },
    ],
  },
})
</script>

<style>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.25) 0%,
    transparent 250px
  );
}
</style>
