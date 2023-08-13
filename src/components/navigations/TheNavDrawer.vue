<template>
  <v-navigation-drawer
    v-model="drawer"
    elevation="0"
    color="background"
    width="350"
  >
    <template v-slot:prepend>
      <v-list-item
        class="py-2"
        :title="`${dbUser.firstName} ${dbUser.secondName}`"
        :subtitle="email"
        to="/profile"
      >
        <template v-slot:prepend>
          <v-avatar variant="outlined">
            <VIcon icon="mdi-account" color="primary"/>
          </v-avatar>
        </template>
      </v-list-item>
    </template>
    <VDivider/>
    <!--    <v-list-group value="start">-->
    <!--      <template v-slot:activator="{ props }">-->
    <!--        <VListItem-->
    <!--          v-bind="props"-->
    <!--          title="С чего начать"-->
    <!--        />-->
    <!--      </template>-->
    <!--      <VListItem title="Встреча знакомство" />-->
    <!--    </v-list-group>-->
    <v-card class="mx-2 mt-2 mb-4" rounded="lg" elevation="0">
      <VCardItem
        title="С чего начать"
        subtitle="здесь впервые?"
        :append-icon="start ? 'mdi-chevron-up': 'mdi-chevron-down'"
        @click="start = !start"
      />
      <VDivider v-if="start"/>
      <v-expand-transition>
        <v-card elevation="0" rounded="0" v-if="start">
          <v-card class="ma-2" height="120" :image="firstMeeting">
            <div class="fill-height bottom-gradient-darker d-flex flex-column align-center justify-end">
              <h3 class="text-white">Встреча-знакомство</h3>
              <p class="text-mono text-white text-caption">Мы будем рады познакомиться с тобой</p>
              <v-btn class="ma-2" color="surface" variant="outlined" to="/purposes/fellowship/firstMeeting">Узнать
                больше
              </v-btn>
            </div>
          </v-card>
          <VDivider/>
          <v-list-item
            class="py-2"
            title="Шаг 1"
            subtitle="Узнай больше о церкви"
            to="/purposes/fellowship/step"
          >
            <template #prepend>
              <v-avatar color="fellowship" size="small" variant="outlined">
                <VIcon color="fellowship" icon="mdi-account-multiple-outline"/>
              </v-avatar>
            </template>
          </v-list-item>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!--  ----------------------------------------------------------------------------------------------------------------  -->
    <v-card class="mx-2 mt-2 mb-4" rounded="lg" elevation="0">
      <VCardItem
        title="Рост и обучение"
        subtitle="начни расти"
        :append-icon="grows ? 'mdi-chevron-up': 'mdi-chevron-down'"
        @click="grows = !grows"
      />
      <VDivider v-if="grows"/>
      <v-expand-transition>
        <v-card elevation="0" rounded="0" v-if="grows">
          <v-list-item
            class="py-2"
            title="Шаг 2"
            subtitle="в учении Апостолов"
            to="/purposes/discipleship/step"
          >
            <template #prepend>
              <v-avatar color="discipleship" size="small" variant="outlined">
                <VIcon color="discipleship" icon="mdi-school-outline"/>
              </v-avatar>
            </template>
          </v-list-item>
          <VDivider/>
          <v-list-item
            class="py-2"
            title="Наставничество"
            subtitle="Мы поможем))"
            to="/purposes/discipleship/mentoring"
          >
            <template #prepend>
              <v-avatar color="discipleship" size="small" variant="outlined">
                <VIcon color="discipleship" icon="mdi-account-arrow-up-outline"/>
              </v-avatar>
            </template>
          </v-list-item>
          <VDivider/>
          <v-list-item
            class="py-2"
            title="Семейное служение"
            subtitle="Распространи свои пределы"
            to="/purposes/discipleship/family"
          >
            <template #prepend>
              <v-avatar color="discipleship" size="small" variant="outlined">
                <VIcon color="discipleship" icon="mdi-human-male-female-child"/>
              </v-avatar>
            </template>
          </v-list-item>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!--   ----------------------------------------------------------------------------------------------------------------- -->
    <v-card class="mx-2 mt-2 mb-4" rounded="lg" elevation="0">
      <VCardItem
        title="Начать служить"
        subtitle="и развиваться"
        :append-icon="serv ? 'mdi-chevron-up': 'mdi-chevron-down'"
        @click="serv = !serv"
      />
      <VDivider v-if="serv"/>
      <v-expand-transition>
        <v-card elevation="0" rounded="0" v-if="serv">
          <v-card class="ma-2" height="120" :image="ministry">
            <div class="fill-height bottom-gradient-darker d-flex flex-column align-center justify-end">
              <h3 class="text-white">Начни служить</h3>
              <p class="text-mono text-white text-caption">Раскрой свои дары и таланты</p>
              <v-btn class="ma-2" color="surface" variant="outlined" to="/purposes/ministry/signToMinistry">
                Хочу служить
              </v-btn>
            </div>
          </v-card>
          <VDivider/>
          <v-list-item
            class="py-2"
            title="Шаг 3"
            subtitle="Узнай больше о своей уникальности"
            to="/purposes/ministry/step"
          >
            <template #prepend>
              <v-avatar color="ministry" size="small" variant="outlined">
                <VIcon color="ministry" icon="mdi-hand-heart-outline"/>
              </v-avatar>
            </template>
          </v-list-item>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!--   ----------------------------------------------------------------------------------------------------------------- -->
    <v-card class="mx-2 mt-2 mb-4" rounded="lg" elevation="0">
      <VCardItem
        title="Расскажи об Иисусе"
        subtitle="Научим благовествовать"
        :append-icon="eva ? 'mdi-chevron-up': 'mdi-chevron-down'"
        @click="eva = !eva"
      />
      <VDivider v-if="eva"/>
      <v-expand-transition>
        <v-card elevation="0" rounded="0" v-if="eva">
          <v-card class="ma-2" height="120" :image="outreach">
            <div class="fill-height bottom-gradient-darker d-flex flex-column align-center justify-end">
              <h3 class="text-white">Начни благовествовать</h3>
              <p class="text-mono text-white text-caption">И люди спасутся</p>
              <v-btn class="ma-2" color="surface" variant="outlined" to="/purposes/evangelism/outreach">
                Хочу
              </v-btn>
            </div>
          </v-card>
          <VDivider/>
          <v-list-item
            class="py-2"
            title="Шаг 4"
            subtitle="Научись благовествовать"
            to="/purposes/evangelism/step"
          >
            <template #prepend>
              <v-avatar color="evangelism" size="small" variant="outlined">
                <VIcon color="evangelism" icon="mdi-torch"/>
              </v-avatar>
            </template>
          </v-list-item>
        </v-card>
      </v-expand-transition>
    </v-card>
    <!--  ----------------------------------------------------------------------------------------------------------------  -->
    <v-card class="mx-2 mt-2 mb-4" rounded="lg" elevation="0">
      <VCardItem
        title="Помощь"
        :append-icon="help ? 'mdi-chevron-up': 'mdi-chevron-down'"
        @click="help = !help"
      />
      <VDivider v-if="help"/>
      <v-expand-transition>
        <v-card elevation="0" rounded="0" v-if="help">
          <v-list-item
            class="py-2"
            title="Молитвенная Поддержка"
            to="/purposes/help/prayerSupport"
          >
            <template #prepend>
              <v-avatar size="small" variant="outlined">
                <VIcon icon="mdi-hands-pray"/>
              </v-avatar>
            </template>
          </v-list-item>
          <VDivider/>
          <v-list-item
            class="py-2"
            title="Духовная консультация"
            to="/purposes/help/spiritualCounselling"
          >
            <template #prepend>
              <v-avatar size="small" variant="outlined">
                <VIcon icon="mdi-account-question-outline"/>
              </v-avatar>
            </template>
          </v-list-item>
          <VDivider/>
<!--          <v-list-item-->
<!--            title="Связь с церковью"-->
<!--            to="/connect"-->
<!--          >-->
<!--            <template #prepend>-->
<!--              <v-avatar size="small" variant="outlined">-->
<!--                <VIcon icon="mdi-list-box-outline"/>-->
<!--              </v-avatar>-->
<!--            </template>-->
<!--          </v-list-item>-->
        </v-card>
      </v-expand-transition>
    </v-card>
    <!-- ----------------------------------------------------------------- -->
    <v-card class="mx-2 mt-2 mb-4" rounded="lg" elevation="0" to="/connect">
      <VCardItem
        title="Связь с церковью"
        append-icon="mdi-chevron-right"
      />
    </v-card>
    <!-- ----------------------------------------------------------------- -->
    <v-card class="mx-2 mt-2 mb-4" rounded="lg" elevation="0" to="/aboutChurch">
      <VCardItem
        title="Контакты"
        append-icon="mdi-chevron-right"
      />
    </v-card>
    <!-- --------------------------------------------------------------------------------------------------------------------- -->
    <template v-slot:append>
      <v-btn block size="large" to="/giving">Пожертвовать</v-btn>
      <v-card-actions>
        <VSpacer/>
        <VBtn density="compact" icon="mdi-youtube" color="error" href="https://www.youtube.com/@120SPD"/>
        <VSpacer/>
        <VBtn density="compact" icon="mdi-send-outline" color="evangelism" href="t.me/mbv"/>
        <VSpacer/>
      </v-card-actions>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import {useAppState} from '@/store/app.store'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'
import {useAuthStore} from '@/store/auth.store'
import firstMeeting from '@/assets/fellowshipPics/firstMeeting.jpg'
import ministry from '@/assets/ministryPics/step.jpg'
import outreach from '@/assets/evangelismPics/steiger.jpg'

const appState = useAppState()
const {drawer} = storeToRefs(appState)

const authStore = useAuthStore()
const {email, dbUser} = storeToRefs(authStore)

const start = ref(false)
const grows = ref(false)
const serv = ref(false)
const eva = ref(false)
const help = ref(false)

// const navList = ref([
//   {
//     icon: 'mdi-home',
//     color: 'black',
//     title: 'Главная',
//     routeTo: {name: 'Home'},
//   }, {
//     icon: 'mdi-calendar',
//     color: 'pink',
//     title: 'Календарь',
//     routeTo: {name: 'Calendar'},
//   }, {
//     icon: 'mdi-compass',
//     color: 'indigo',
//     title: 'Открой для себя церковь',
//     routeTo: {name: 'Discover'},
//   },
//   // {
//   //   icon: 'mdi-clock',
//   //   color: 'cyan',
//   //   title: 'В это воскресенье',
//   //   routeTo: '/sunday',
//   // },
// ])
//
// const purposeNavList = ref([
//   {
//     icon: 'mdi-heart',
//     color: 'red',
//     title: 'Поклонение',
//     routeTo: '/purposes/worship',
//   }, {
//     icon: 'mdi-account-multiple',
//     color: 'orange',
//     title: 'Общение',
//     routeTo: '/purposes/fellowship',
//   }, {
//     icon: 'mdi-school',
//     color: 'green',
//     title: 'Ученичество',
//     routeTo: '/purposes/discipleship',
//   }, {
//     icon: 'mdi-hand-heart',
//     color: 'brown',
//     title: 'Служение',
//     routeTo: '/purposes/ministry',
//   }, {
//     icon: 'mdi-torch',
//     color: 'blue',
//     title: 'Благовестие',
//     routeTo: '/purposes/evangelism',
//   }, {
//     icon: 'mdi-run',
//     color: 'purple',
//     title: 'МБВ.Youth',
//     routeTo: '/purposes/youth',
//   },
// ])
</script>
