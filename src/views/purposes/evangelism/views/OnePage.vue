<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        btn="Хочу больше"
        :img="YoursOne"
        :text="yourOneText"
        @togglerBtn="yoursOneBtn = !yoursOneBtn"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="yoursOneBtn" variant="text" elevation="0" rounded="0" class="my-2 mx-5">
        <v-btn
          size="large"
          href="https://mbv.spb.ru/wp-content/uploads/2020/03/Kto-tvoi-odin-1.pdf.pdf"
          rounded="xl"
          class="my-2 w-100"
        >
          «КТО ТВОЙ ОДИН?»
        </v-btn>
        <v-btn
          size="large"
          href="https://mbv.spb.ru/wp-content/uploads/2020/03/Kak_sostavit_lichnoe_svidetelstvo_1_pdf.pdf"
          rounded="xl"
          class="my-2 w-100"
        >
          личное свидетельство
        </v-btn>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import YoursOne from '@/assets/evangelismPics/YoursOne.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'

const yoursOneBtn = ref(false)

const yourOneText = ref(`Бог думает о каждом человеке! Его сердце полно сострадания и любви к людям, и Он продолжает достигать человечество, желая спасти каждого.<br /><br />
Для осуществления Своего Божественного плана спасения, Бог рассчитывает на каждого из нас.<br/><br/>
Инструмент «КТО ТВОЙ ОДИН?» — это помощник для каждого человека, кто хочет возрастать в личном благовестии и исполнять Великое Божье Поручение — распространение Евангелия.`)

</script>
