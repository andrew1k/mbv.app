<template>
  <v-card rounded="0" variant="text">
    <v-card class="ma-2">
      <v-img :src="img" :options="{threshold: 0}" eager>
        <div class="fill-height bottom-gradient d-flex align-end">
          <h3 class="ma-2 text-white">Где получить молитвенную поддержку</h3>
        </div>
      </v-img>
      <VCardText v-html="text"/>
      <v-card-actions>
        <VBtn block variant="outlined" @click="signToggle">Помолитесь за меня</VBtn>
      </v-card-actions>
    </v-card>
    <v-expand-transition>
      <v-card class="pa-4" v-if="sign" rounded="0" variant="text">
        <PrayerSupport />
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import img from '@/assets/helpPics/Prayer.jpg'
import PrayerSupport from '@/components/purposes/help/forms/PrayerSupport.vue'

const text = ref(`<b>Молитвенный сад</b><br>
Каждое воскресенье после богослужений вы можете подойти к Молитвенному саду в холле Церкви, и наши служители помолятся за вас
<br><br>
<b>Вечерняя молитва</b>
<br/>
Каждую среду на вечерних молитвах команда служителей готова выслушать вас и оказать молитвенную поддержку <br> <i>По средам в 19:00, Малый Зал Церкви</i>
<br/><br/>
<b>Малые Группы</b><br>
Каждую неделю в разных районах города проходят малые группы, где верующие молятся друг за друга, и вы можете получить молитвенную поддержку
<br><br>
<b>Молитвенное служение «Скорая помощь»</b>
<br/>
Вы можете оставить свою молитвенную нужду прямо сейчас в молитвенной карточке ниже
или на стойке информации в Церкви, а также позвонить по телефону
офиса Церкви - <br><a class="text-decoration-underline text-mono" href="tel:88005555525">8-800-555-55-25</a>,
и наши служители будут молиться за вас
`)

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

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    transparent 90px
  );
}
</style>
