<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class=" ma-2">
      <PCard
        title="Программа «Наставничество»"
        btn="Найти мне наставника"
        :img="onePlusOne"
        :text="textOnePlusOne"
        @toggler-btn="signToggle"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="sign" variant="text" elevation="0" rounded="0" class="ma-2">
        <v-radio-group v-model="answer" class="my-1" label="Как с вами удобнее связаться?" density="comfortable"
                       color="success" hide-details>
          <VRadio label="What's App" value="WhatsApp"/>
          <VRadio label="Telegram" value="Telegram"/>
          <VRadio label="По телефону" value="По телефону"/>
        </v-radio-group>
        <v-card-actions>
          <VSpacer/>
          <v-btn block variant="outlined" @click="sendForm('discipleship', {answer}, '1 + 1')">Отправить</v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import onePlusOne from '@/assets/fellowshipPics/onePlusOne.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import {useFormsStore} from '@/store/form.store'

const answer = ref('')
const {sendForm} = useFormsStore()

const textOnePlusOne = ref([
  `- это индивидуальное наставничество для людей, недавно принявших Иисуса Христа.<br /><br />
  На первых этапах христианской жизни у новообращенных христиан возникают множество вопросов, страхов, сомнений и искушений. Это абсолютно нормально.<br /><br />
  Программа «1+1» — это 3-х месячная программа, которая предполагает еженедельные встречи с наставником, где с помощью учебного пособия с примерами, иллюстрациями и домашними заданиями, раскрываются основы христианской жизни и подробно рассматриваются насущные вопросы и страхи, возникающие у большинства недавно уверовавших людей.<br /><br />
  Индивидуальный подход к каждому человеку позволяет достичь высоких результатов в том, чтобы человек утвердился в Божьей любви, укоренился в церкви и достигал духовной зрелости.`,
])

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
</script>
