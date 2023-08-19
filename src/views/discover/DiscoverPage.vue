<template>
  <v-card
    elevation="0"
    rounded="0"
    variant="text"
    max-width="600"
    class="mx-auto"
  >
    <v-card rounded="xl" :variant="purposes.worship.isOpen? 'text' : 'elevated'" class="mb-4 mt-2 mx-2">
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
    <v-card rounded="xl" :variant="purposes.fellowship.isOpen? 'text' : 'elevated'"
            class="mb-4 mt-2 mx-2">
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
        <v-card v-if="purposes.fellowship.isOpen" rounded="0" variant="text">
          <v-card class="ma-2" height="220" :image="firstMeeting">
            <div class="fill-height bottom-gradient-darker d-flex flex-column align-center justify-end">
              <h3 class="text-white">Встреча-знакомство</h3>
              <!--  Добавить обращение на ты для людей, которые младше 35    -->
              <p class="text-mono text-white text-caption">Мы будем рады познакомиться с вами</p>
              <v-btn
                class="ma-2"
                color="surface"
                variant="outlined"
                to="/purposes/fellowship/firstMeeting"
              >
                Узнать больше
              </v-btn>
            </div>
          </v-card>
          <v-slide-group>
            <v-slide-group-item v-for="(pAct, i) in purposes.fellowship.actions" :key="i">
              <PurposeSliderItem :title="pAct.title" :route="pAct.route" :img="pAct.img"/>
            </v-slide-group-item>
          </v-slide-group>
          <VDivider/>
          <v-card class="ma-2" height="220" :image="SG">
            <div class="fill-height bottom-gradient-darker d-flex flex-column align-center justify-end">
              <h3 class="text-white">Малые Группы</h3>
              <!--  Добавить обращение на ты для людей, которые младше 35    -->
              <p class="text-mono text-white text-caption">Станьте частью семьи</p>
              <v-btn
                class="ma-2"
                color="surface"
                variant="outlined"
                to="/purposes/fellowship/smallGroups"
              >
                Хочу узнать больше
              </v-btn>
            </div>
          </v-card>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card rounded="xl" class="mb-4 mt-2 mx-2">
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
    <v-card rounded="xl" :variant="purposes.ministry.isOpen? 'text' : 'elevated'" class="mb-4 mt-2 mx-2">
      <v-card variant="text" @click="purposes.ministry.isOpen = !purposes.ministry.isOpen">
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
        <v-card v-if="purposes.ministry.isOpen" rounded="0" variant="text">
          <v-card class="ma-2" height="220" :image="ministry">
            <div class="fill-height bottom-gradient-darker d-flex flex-column align-center justify-end">
              <h3 class="text-white">Найдите своё служение</h3>
              <p class="text-mono text-white text-caption">Раскрой свои дары и таланты</p>
              <v-btn
                class="ma-2"
                color="surface"
                variant="outlined"
                to="/purposes/ministry/signToMinistry"
              >
                Узнать о служениях в церкви
              </v-btn>
            </div>
          </v-card>
          <v-card
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
                subtitle="Узнавая больше о своей уникальности"
              />
            </v-card-actions>
          </v-card>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card
      :variant="purposes.evangelism.isOpen ? 'text' : 'elevated'"
      class="mb-4 mt-2 mx-2"
    >
      <v-card variant="text" @click="purposes.evangelism.isOpen = !purposes.evangelism.isOpen">
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
        <v-card v-if="purposes.evangelism.isOpen" rounded="0" variant="text">
          <v-slide-group>
            <v-slide-group-item v-for="(pAct, i) in purposes.evangelism.actions" :key="i">
              <PurposeSliderItem :title="pAct.title" :route="pAct.route" :img="pAct.img" :href="pAct.href"/>
            </v-slide-group-item>
          </v-slide-group>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card rounded="xl" class="mb-4 mt-2 mx-2">
      <v-card rounded="0" to="/aboutChurch">
        <v-card-actions>
          <VIcon class="ml-4" icon="mdi-church-outline"/>
          <v-card-title>О церкви</v-card-title>
          <VSpacer/>
        </v-card-actions>
      </v-card>
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <v-card rounded="xl" class="mb-4 mt-2 mx-2">
      <v-card :color="purposes.help.color" rounded="0" @click="purposes.help.toggleOpen()">
        <v-card-actions>
          <VIcon class="ml-4" :icon="purposes.help.icon"/>
          <v-card-title>
            {{ purposes.help.title }}
          </v-card-title>
          <VSpacer/>
          <VIcon
            class="mx-4"
            :icon="purposes.help.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="purposes.help.isOpen" rounded="0" variant="text">
          <v-card
            elevation="0"
            rounded="0"
            variant="text"
            class="ma-0"
            v-for="(pAct, i) in purposes.help.actions"
            :key="i"
            :to="pAct.route"
          >
            <VDivider/>
            <v-card-actions>
              <v-avatar variant="outlined" class="ml-2">
                <VIcon :icon="pAct.icon" size="large" color="primary"/>
              </v-avatar>
              <VCardItem
                :title="pAct.title"
                :subtitle="pAct.subtitle"
              />
            </v-card-actions>
          </v-card>
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
import openSG from '@/assets/fellowshipPics/openSG.jpg'
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
      },
      {
        title: 'Молитвы',
        img: praying,
        route: '/purposes/worship/prayer',
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
        title: 'Крещение',
        img: baptism,
        route: `/purposes/fellowship/baptism`,
      }, {
        title: 'Хочу открыть Малую Группу',
        img: openSG,
        route: `/purposes/fellowship/OpenSmallGroup`,
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
        subtitle: 'Мы поможем вам узнать основы',
        icon: 'mdi-account-arrow-up-outline',
        route: '/purposes/discipleship/mentoring',
      }, {
        title: `Шаг 2`,
        subtitle: 'Узнавая больше о духовном развитии',
        icon: 'mdi-school-outline',
        route: '/purposes/discipleship/step',
      },
      // {
      //   title: 'Курсы',
      //   subtitle: 'Изучай новое вместе с нами',
      //   icon: 'mdi-book-outline',
      //   route: '',
      // },
      {
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
    color: 'primary',
    icon: 'mdi-handshake-outline',
    isOpen: false,
    toggleOpen() {
      this.isOpen = !this.isOpen
      if (this.isOpen)
        setTimeout(() => {
          window.scrollBy({
            top: 500,
            left: 0,
            behavior: 'smooth',
          })
        }, 300)
    },
    actions: [
      {
        title: 'Молитвенная поддержка',
        icon: 'mdi-hands-pray',
        route: '/purposes/help/prayerSupport',
      },
      // {
      //   title: 'Молитвенный сад',
      //   icon: 'mdi-tree-outline',
      //   route: '/purposes/help/prayerGarden',
      // },
      {
        title: 'Духовная консультация',
        icon: 'mdi-account-question-outline',
        route: '/purposes/help/spiritualCounselling',
      }, {
        title: 'Ретрит',
        icon: 'mdi-account-supervisor-outline',
        route: '/purposes/help/retreat',
      }, {
        title: 'Связь с церковью',
        icon: 'mdi-list-box-outline',
        route: '/connect',
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
