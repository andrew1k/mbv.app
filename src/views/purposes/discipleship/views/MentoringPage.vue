<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class=" ma-2">
      <v-img :src="onePlusOne" :options="{threshold: 0}" eager>
        <div class="fill-height bottom-gradient d-flex align-end">
          <VCardTitle class="text-white">Программа «Наставничество» </VCardTitle>
        </div>
      </v-img>
      <VCardText v-html="textOnePlusOne"/>
        <v-btn block variant="outlined" size="large" @click="signToggle">с индивидуальным наставником</v-btn>
        <v-btn class="text-mono my-2" block variant="text" href="https://t.me/mbvprogramma">Присоединиться к группе</v-btn>
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
          <v-btn block variant="outlined" @click="sendForm('discipleship', {answer}, 'Наставничество')">Отправить</v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import onePlusOne from '@/assets/fellowshipPics/onePlusOne.jpg'
import {useFormsStore} from '@/store/form.store'

const answer = ref('')
const {sendForm} = useFormsStore()
// todo: сделать все одинаковым программа наставничество
const textOnePlusOne = ref(`Программа наставничества в нашей церкви существует для того, чтобы у каждого, кто недавно уверовал в Иисуса Христа, была возможность разобраться в возникающих в вопросах, а также, чтобы справиться с сомнениями, с которыми сталкиваются многие люди в начале своего христианского пути.
<br><br>
В это время очень важно укрепляться в вере и иметь общение с другими верующими, чтобы Ваше решение пригласить Бога в свою жизнь стало твердым и изменила Вашу жизнь к лучшему.
<br><br>
Вы можете пройти бесплатную Программу наставничества или в групповом формате онлайн, просматривая видео-уроки и получая обратную связь от наставников в групповом чате Telegram, или с индивидуальным наставником, встречаясь с ним раз в неделю.
<br><br>
Индивидуальный подход к каждому человеку позволяет достичь высоких результатов в том, чтобы человек утвердился в Божьей любви, укоренился в церкви и достигал духовной зрелости. `)

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
