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
    <v-card elevation="0" rounded="xl" :variant="purposes.worship.isOpen? 'text' : 'elevated'" class="mb-4 mt-2 mx-2">
      <v-card elevation="0" variant="text" @click="purposes.worship.isOpen = !purposes.worship.isOpen">
        <v-card-actions>
          <VIcon class="ml-4" :color="purposes.worship.color" :icon="purposes.worship.icon"/>
          <v-card-title>
            {{ purposes.worship.title }}
          </v-card-title>
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
              <PurposeSliderItem :title="pAct.title" :route="pAct.route" :img="pAct.img" :href="pAct.href"/>
            </v-slide-group-item>
          </v-slide-group>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card elevation="0" rounded="xl" :variant="purposes.fellowship.isOpen? 'text' : 'elevated'" class="mb-4 mt-2 mx-2">
      <v-card elevation="0" variant="text" @click="purposes.fellowship.isOpen = !purposes.fellowship.isOpen">
        <v-card-actions>
          <VIcon class="ml-4" :color="purposes.fellowship.color" :icon="purposes.fellowship.icon"/>
          <v-card-title>
            {{ purposes.fellowship.title }}
          </v-card-title>
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.fellowship.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.fellowship.isOpen" elevation="0" rounded="0" variant="text">
          <v-card class="ma-2" height="220" :image="firstMeeting">
            <div class="fill-height bottom-gradient-darker d-flex flex-column align-center justify-end">
              <h3 class="text-white">Встреча-знакомство</h3>
              <p class="text-mono text-white text-caption">Мы будем рады познакомиться с тобой</p>
              <v-btn class="ma-2" color="surface" variant="outlined" to="/purposes/fellowship/firstMeeting">Хочу</v-btn>
            </div>
          </v-card>
          <v-slide-group>
            <v-slide-group-item v-for="(pAct, i) in purposes.fellowship.actions" :key="i">
              <PurposeSliderItem :title="pAct.title" :route="pAct.route" :img="pAct.img"/>
            </v-slide-group-item>
          </v-slide-group>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card elevation="0" rounded="xl" class="mb-4 mt-2 mx-2">
      <v-card elevation="0" @click="purposes.discipleship.isOpen = !purposes.discipleship.isOpen">
        <v-card-actions>
          <VIcon class="ml-4" :color="purposes.discipleship.color" :icon="purposes.discipleship.icon"/>
          <v-card-title>
            {{ purposes.discipleship.title }}
          </v-card-title>
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.discipleship.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.discipleship.isOpen" elevation="0" rounded="0" variant="text">
          <v-card
            elevation="0"
            rounded="0"
            variant="text"
            class="ma-0"
            v-for="(pAct, i) in purposes.discipleship.actions"
            :key="i"
            :to="pAct.route"
          >
            <VDivider/>
            <v-card-actions>
              <VIcon :icon="pAct.icon" color="discipleship" class="ml-2"/>
              <VCardItem
                :title="pAct.title"
                :subtitle="pAct.subtitle"
              />
            </v-card-actions>
          </v-card>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card elevation="0" rounded="xl" :variant="purposes.ministry.isOpen? 'text' : 'elevated'" class="mb-4 mt-2 mx-2">
      <v-card variant="text" elevation="0" @click="purposes.ministry.isOpen = !purposes.ministry.isOpen">
        <v-card-actions>
          <VIcon class="ml-4" :color="purposes.ministry.color" :icon="purposes.ministry.icon"/>
          <v-card-title>
            {{ purposes.ministry.title }}
          </v-card-title>
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.ministry.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.ministry.isOpen" elevation="0" rounded="0" variant="text">
          <v-card class="ma-2" height="220" :image="ministry">
            <div class="fill-height bottom-gradient-darker d-flex flex-column align-center justify-end">
              <h3 class="text-white">Начни служить</h3>
              <p class="text-mono text-white text-caption">Раскрой свои дары и таланты</p>
              <v-btn class="ma-2" color="surface" variant="outlined" to="/purposes/ministry/signToMinistry">Хочу
                служить
              </v-btn>
            </div>
          </v-card>
          <v-card
            elevation="0"
            rounded="0"
            variant="text"
            class="ma-0"
            to="/purposes/ministry/step"
          >
            <VDivider/>
            <v-card-actions>
              <VIcon :icon="purposes.ministry.icon" color="ministry" class="ml-2"/>
              <VCardItem
                title="Шаг 3"
                subtitle="Место больших возможностей!"
              />
            </v-card-actions>
          </v-card>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card elevation="0" :variant="purposes.evangelism.isOpen? 'text' : 'elevated'" rounded="xl" class="mb-4 mt-2 mx-2">
      <v-card variant="text" elevation="0" @click="purposes.evangelism.isOpen = !purposes.evangelism.isOpen">
        <v-card-actions>
          <VIcon class="ml-4" :color="purposes.evangelism.color" :icon="purposes.evangelism.icon"/>
          <v-card-title>
            {{ purposes.evangelism.title }}
          </v-card-title>
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.evangelism.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.evangelism.isOpen" elevation="0" rounded="0" variant="text">
          <v-slide-group>
            <v-slide-group-item v-for="(pAct, i) in purposes.evangelism.actions" :key="i">
              <PurposeSliderItem :title="pAct.title" :route="pAct.route" :img="pAct.img" :href="pAct.href"/>
            </v-slide-group-item>
          </v-slide-group>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import PurposeSliderItem from '@/components/purposes/PurposeSliderItem.vue'

// import pics
import steiger from '@/assets/evangelismPics/steiger.jpg'
import vechno from '@/assets/evangelismPics/vechnoSq.jpg'
import step4 from '@/assets/evangelismPics/step.jpg'
import oneSq from '@/assets/evangelismPics/OneSq.jpg'
import sunday from '@/assets/worshipPics/sunday.jpg'
import praying from '@/assets/worshipPics/praying.jpg'
import songs from '@/assets/worshipPics/songs.jpg'
import firstMeeting from '@/assets/fellowshipPics/firstMeeting.jpg'
import step from '@/assets/fellowshipPics/step.jpg'
import SG from '@/assets/fellowshipPics/smallGroups.jpg'
import baptism from '@/assets/fellowshipPics/baptismSq.jpg'
import ministry from '@/assets/ministryPics/step.jpg'


const purposes = ref({
  worship: {
    title: 'Поклонение',
    route: '/purposes/worship',
    color: 'worship',
    icon: 'mdi-heart-outline',
    isOpen: true,
    actions: [
      {
        title: 'Воскресенье',
        img: sunday,
        route: '/sunday',
      }, {
        title: 'Молитвы',
        img: praying,
        href: 'https://www.youtube.com/playlist?list=PLjjvxd6WcKV04vM9MkM6Gd69-qdkzpRbj',
      },
      // {
      //   title: 'Конференции',
      //   img: '',
      //   route: '',
      // }, {
      //   title: 'Вечер Хвалы',
      //   img: '',
      //   route: '',
      // },
      {
        title: 'Песни',
        img: songs,
        href: 'https://www.youtube.com/playlist?list=PLjjvxd6WcKV0iJGU4PM6DR4EZ4ideQrR9',
      },
    ],
  },
  fellowship: {
    title: 'С чего начать?',
    route: '/purposes/fellowship',
    color: 'fellowship',
    icon: 'mdi-account-multiple-outline',
    isOpen: true,
    actions: [
      {
        title: 'Шаг 1',
        img: step,
        route: `/purposes/fellowship/step`,
      }, {
        title: 'Малые Группы',
        img: SG,
        route: `/purposes/fellowship/smallGroups`,
      }, {
        title: 'Крещение',
        img: baptism,
        route: `/purposes/fellowship/baptism`,
      },
    ],
  },
  discipleship: {
    title: 'Рост и обучение',
    route: '/purposes/discipleship',
    color: 'discipleship',
    icon: 'mdi-school-outline',
    isOpen: false,
    actions: [
      {
        title: 'Наставничество',
        subtitle: 'Мы поможем тебе начать',
        icon: 'mdi-account-arrow-up-outline',
        route: '/purposes/discipleship/mentoring',
      }, {
        title: 'Шаг 2',
        subtitle: 'Мы будем возрастать!',
        icon: 'mdi-school-outline',
        route: '/purposes/discipleship/step',
      }, {
        title: 'Курсы',
        subtitle: 'Изучай новое вместе с нами',
        icon: 'mdi-book-outline',
        route: '',
      }, {
        title: 'Семейное служение',
        subtitle: 'Твои корни',
        icon: 'mdi-human-male-female-child',
        route: '/home',
      },
    ],
  },
  ministry: {
    title: 'Начать служить',
    route: '/purposes/ministry',
    color: 'ministry',
    icon: 'mdi-hand-heart-outline',
    isOpen: false,
  },
  evangelism: {
    title: 'Рассказать об Иисусе',
    route: '/purposes/evangelism',
    color: 'evangelism',
    icon: 'mdi-torch',
    isOpen: true,
    actions: [
      {
        title: 'VECHNO',
        img: vechno,
        route: '/purposes/evangelism/vechno',
      }, {
        title: 'Шаг 4',
        img: step4,
        route: '/purposes/evangelism/step',
      }, {
        title: 'Кто твой один?',
        img: oneSq,
        route: '/purposes/evangelism/one',
      },
      // {
      //   title: 'Семинар',
      //   img: '',
      //   route: '',
      // }, {
      //   title: 'Спектакли',
      //   img: '',
      //   route: '',
      // },
      {
        title: 'OutReach',
        img: steiger,
        route: '/purposes/evangelism/outreach',
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

.bottom-gradient-darker {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0%,
    transparent 250px
  );
}
</style>
