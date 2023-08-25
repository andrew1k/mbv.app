<template>
  <v-card rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        btn="Написать лидеру"
        :img="vechno"
        :text="textVechno"
        @togglerBtn="vechnoBtn = !vechnoBtn"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="vechnoBtn" variant="text" elevation="0" rounded="0" class="ma-2">
        <v-textarea
          rows="2"
          class="mt-2"
          label="Ваш вопрос"
          v-model="tell_About_Yourself"
          counter
          maxlength="200"
        />
        <v-textarea
          rows="2"
          label="Опишите ваш опыт в организации мероприятий"
          v-model="tell_About_Experience"
          counter
          maxlength="200"
        />
        <v-card-actions>
          <VSpacer/>
          <v-btn variant="outlined" block
                 @click="sendForm('evangelism', {tell_About_Yourself, tell_About_Experience}, 'Присоединиться к VECHNO')">
            Отправить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import vechno from '@/assets/evangelismPics/vechno.png'
import PCard from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'
import {useFormsStore} from '@/store/form.store'

const vechnoBtn = ref(false)
const textVechno = ref(`Мы хотим, чтобы благовестие стало доступным каждому человеку нашей церкви. <br /><br />
Проект «Вечно» - это мероприятия со смыслом, через которых ваш друг может познакомиться с церковной семьей в неформальной обстановке. <br><br>
Если вы хотите узнать больше о проекте или помогать в организации мероприятий, напишите нам`)

const {sendForm} = useFormsStore()
const tell_About_Yourself = ref('')
const tell_About_Experience = ref('')
</script>
