<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <purposes-cards title="Духовное консультирование" :img="img" :text="text" btn="Записаться" @toggler-btn="signToggle" />
    </v-card>
    <v-expand-transition>
      <SpiritualCounsellingForm v-if="sign" />
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import img from '@/assets/helpPics/Counseling.jpg'
import PurposesCards from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'
import SpiritualCounsellingForm from '@/components/purposes/help/forms/SpiritualCounsellingForm.vue'

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
</script>
