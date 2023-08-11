<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card elevation="0" rounded="xl" v-for="(question, i) in questionList" :key="i" class="mb-4 mt-2 mx-1">
      <v-card elevation="0" rounded="0"
              @click="question.isOpen = !question.isOpen">
        <v-card-actions>
          <v-avatar variant="outlined" :color="question.color">
            <VIcon size="large" :color="question.color" :icon="question.icon"/>
          </v-avatar>
          <v-card-item class="ml-n2">
            <v-card-title>
              {{ question.title }}
            </v-card-title>
            <h6 class="text-caption text-medium-emphasis">
              {{ question.subtitle }}
            </h6>
          </v-card-item>
        </v-card-actions>
      </v-card>
      <v-expand-transition>
        <v-card v-if="question.isOpen" elevation="0" rounded="0" variant="text">
          <v-card-text>
            {{ question.text }}
          </v-card-text>
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


const questionList = ref([
  {
    title: 'Молитва Покаяния',
    subtitle: 'Я произнес молитву покаяния, что это значит?',
    color: 'worship',
    icon: 'mdi-hands-pray',
    text: 'Lorem ipsum dolor sit amet.',
    component: false,
    isOpen: false,
  },{
    title: 'Водное Крещение',
    subtitle: 'Хочу принять водное крещение?',
    color: 'evangelism',
    icon: 'mdi-waves',
    text: 'Lorem ipsum dolor sit amet.',
    component: SignToBaptism,
    isOpen: false,
  },{
    title: 'Стать частью семьи',
    subtitle: 'Что делать если я хочу стать членом церкви?',
    color: 'fellowship',
    icon: 'mdi-account-multiple-outline',
    text: 'Lorem ipsum dolor sit amet.',
    component: StepBtn,
    isOpen: false,
  },{
    title: 'Мне нужен наставник',
    subtitle: 'Кто поможет мне сделать первые шаги?',
    color: 'discipleship',
    icon: 'mdi-account-arrow-up-outline',
    text: 'Lorem ipsum dolor sit amet.',
    component: MentoringBtn,
    isOpen: false,
  },{
    title: 'Присоединиться к Малой Группе',
    subtitle: 'Здесь люди, которые',
    color: 'fellowship',
    icon: 'mdi-home-outline',
    text: 'Lorem ipsum dolor sit amet.',
    component: SignToSG,
    isOpen: false,
  },{
    title: 'Душепопечение',
    subtitle: 'Забота о вашей душе',
    color: 'worship',
    icon: 'mdi-account-heart-outline',
    text: 'Lorem ipsum dolor sit amet.',
    component: false,
    isOpen: false,
  },{
    title: 'Найти служение',
    subtitle: 'Я хочу помогать моей церкви',
    color: 'ministry',
    icon: 'mdi-hand-heart-outline',
    text: 'Lorem ipsum dolor sit amet.',
    component: false,
    isOpen: false,
  },{
    title: 'Записаться к пастору',
    subtitle: 'Я хочу лично поговорить с пастором',
    color: 'primary',
    icon: 'mdi-account-question-outline',
    text: 'Lorem ipsum dolor sit amet.',
    component: false,
    isOpen: false,
  },{
    title: 'Молитвенная поддержка',
    subtitle: 'Мне нужно, чтобы за меня помолились',
    color: 'worshipSec',
    icon: 'mdi-human-handsup',
    text: 'Lorem ipsum dolor sit amet.',
    component: false,
    isOpen: false,
  },{
    title: 'Другое',
    subtitle: 'Есть нерешенные вопросы',
    color: '',
    icon: 'mdi-chat-question-outline',
    text: 'Lorem ipsum dolor sit amet.',
    component: false,
    isOpen: false,
  },
])
</script>
