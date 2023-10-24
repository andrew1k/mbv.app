<template>
  <v-card rounded="0" variant="text">
    <v-card rounded="xl" v-for="(question, i) in questionList" :key="i" class="mb-4 mt-2 mx-2">
      <v-card-item
        @click="question.isOpen = !question.isOpen"
        :subtitle="question.subtitle"
      >
        <template #prepend>
          <v-avatar variant="outlined" :color="question.color">
            <VIcon size="large" :color="question.color" :icon="question.icon"/>
          </v-avatar>
        </template>
        <template #title>
          <v-card-title>
            {{ question.title }}
          </v-card-title>
        </template>
        <template #subtitle>
          <h6 class="text-caption text-medium-emphasis">
            {{ question.subtitle }}
          </h6>
        </template>
      </v-card-item>
      <v-expand-transition>
        <v-card v-if="question.isOpen" elevation="0" rounded="0" variant="text">
          <VCardText v-html="question.text"/>
          <component v-if="question.component" :is="question.component"/>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import SignToBaptism from '@/components/purposes/fellowship/forms/SignToBaptism.vue'
import StepBtn from '@/components/connect/StepBtn.vue'
import MentoringBtn from '@/components/connect/MentoringBtn.vue'
import SignToSG from '@/components/purposes/fellowship/forms/SignToSG.vue'
import FirstPrayBtn from '@/components/connect/FirstPrayBtn.vue'
import SignToMinistry from '@/components/purposes/ministry/forms/SignToMinistry.vue'
import PrayerSupport from '@/components/purposes/help/forms/PrayerSupport.vue'
import OtherForm from '@/components/connect/OtherForm.vue'
import SpiritualCounsellingForm from '@/components/purposes/help/forms/SpiritualCounsellingForm.vue'
import SignToPastorsForm from '@/components/connect/SignToPastorsForm.vue'


const questionList = ref([
  {
    title: 'Молитва Покаяния',
    subtitle: 'Я произнес молитву покаяния, что это значит?',
    color: 'worship',
    icon: 'mdi-hands-pray',
    text: `Молитва покаяния - это молитва, которая открывает нашу жизнь для Бога. Это обращение к Богу, когда мы признаём свою нужду в Нём, что мы были не идеальны и раскаиваемся в том, что было неправильно, и просим Его стать частью нашей жизни, принимая Его спасение. <br><br>
Если вы произнесли её осознанно, с верой в сердце, что Иисус Христос умер за ваши грехи и воскрес, чтобы вы были оправданы, то это означает, что с этого момента у вас есть гарантия в спасении - то есть вечная жизнь в раю с Богом. А также Его любовь и помощь вам на земле. Так написано в Библии. <br><br>
Покаяние - это первый шаг новой жизни с Богом. Мы получаем спасение даром, и нам нужно делать дальнейшие шаги духовного роста, чтобы жить в этом спасении всю жизнь.<br><br>
Мы будем рады помочь вам в этих шагах, если вы помолились впервые, нажмите кнопку ниже`,
    component: FirstPrayBtn,
    isOpen: false,
  }, {
    title: 'Водное Крещение',
    subtitle: 'Хочу принять водное крещение?',
    color: 'evangelism',
    icon: 'mdi-waves',
    text: `Заполните небольшую анкету, и мы свяжемся с вами, чтобы записать вас`,
    component: SignToBaptism,
    isOpen: false,
  }, {
    title: 'Стать частью церкови',
    subtitle: 'Что делать, если я хочу стать частью церкви?',
    color: 'fellowship',
    icon: 'mdi-account-multiple-outline',
    text: 'Чтобы стать частью церкви, вам нужно пройти семинар - Шаг 1 «Общение»',
    component: StepBtn,
    isOpen: false,
  }, {
    title: 'Мне нужен наставник',
    subtitle: 'Кто поможет мне сделать первые шаги?',
    color: 'discipleship',
    icon: 'mdi-account-arrow-up-outline',
    text: 'Вы можете пройти бесплатную Программу наставничества в групповом формате онлайн, просматривая видео-уроки и получая обратную связь от наставников в групповом чате, или с индивидуальным наставником, встречаясь с ним раз в неделю.',
    component: MentoringBtn,
    isOpen: false,
  }, {
    title: 'Найти Малую Группу',
    subtitle: 'Малая Группа - это малая Церковь',
    color: 'fellowship',
    icon: 'mdi-home-city-outline',
    text: ``,
    component: SignToSG,
    isOpen: false,
  }, {
    title: 'Духовное консультация',
    subtitle: 'Забота о вашей душе',
    color: 'worship',
    icon: 'mdi-account-heart-outline',
    text: 'Если у вас есть что-то, что вас беспокоит и вы хотите помощи, сообщите нам об этом',
    component: SpiritualCounsellingForm,
    isOpen: false,
  }, {
    title: 'Найти служение',
    subtitle: 'Я хочу помогать моей церкви',
    color: 'ministry',
    icon: 'mdi-hand-heart-outline',
    text: `Если вы хотите, чтобы с вами связались по вопросам служения, заполните форму`,
    component: SignToMinistry,
    isOpen: false,
  }, {
    title: 'Записаться к пастору',
    subtitle: 'Я хочу лично поговорить с пастором',
    color: 'primary',
    icon: 'mdi-account-question-outline',
    text: 'Встречи с пасторами проходят в будние дни, дайте нам знать, если хотите записаться',
    component: SignToPastorsForm,
    isOpen: false,
  }, {
    title: 'Молитвенная поддержка',
    subtitle: 'Мне нужно, чтобы за меня помолились',
    color: 'worshipSec',
    icon: 'mdi-human-handsup',
    text: '',
    component: PrayerSupport,
    isOpen: false,
  }, {
    title: 'Другое',
    subtitle: 'Напишите нам',
    color: '',
    icon: 'mdi-chat-question-outline',
    text: 'Здесь вы можете написать ваш вопрос, обратную связь, идеи, предложения, свидетельства и тд...',
    component: OtherForm,
    isOpen: false,
  },
])
</script>
