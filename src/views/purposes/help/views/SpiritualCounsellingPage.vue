<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <purposes-cards title="Духовное консультирование" :img="img" :text="text" btn="Записаться" @toggler-btn="signToggle" />
    </v-card>
    <v-expand-transition>
      <v-form v-if="sign" class="pa-2 ma-2">
        Что сюда добавить? - простить у Ирины
        <v-radio-group v-model="answer" class="my-1" label="Как с вами удобнее связаться?" density="comfortable"
                       color="success" hide-details>
          <VRadio label="What's App" value="WhatsApp"/>
          <VRadio label="Telegram" value="Telegram"/>
          <VRadio label="По телефону" value="По телефону"/>
        </v-radio-group>
        <v-card-actions>
          <v-btn block variant="outlined" @click="sendForm('counseling', {answer}, 'Консультация с пастором')">Отправить</v-btn>
        </v-card-actions>
      </v-form>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import img from '@/assets/helpPics/Counseling.jpg'
import PurposesCards from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'
import {useFormsStore} from '@/store/form.store'

const text = ref(`В нашей церкви можно получить консультацию и помощь, встретившись как с пасторами и служителями, так и с профессиональными психологами и специалистами различных направлений.
<br/><br/>
Оказывая духовную поддержку, пасторы и служители помогают людям утвердиться в вере и преодолевать различные жизненные трудности на основании Слова Божьего.
<br/><br/>
Психологи-консультанты помогают человеку сделать самостоятельный выбор и помочь найти лучшее решение в духе христианских ценностей.`)

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

const answer = ref('')
const {sendForm} = useFormsStore()
</script>
