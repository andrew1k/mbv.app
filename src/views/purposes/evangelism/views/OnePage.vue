<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        btn="узнать больше"
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
          Брошюра «КТО ТВОЙ ОДИН?»
        </v-btn>
        <v-btn
          size="large"
          href="https://mbv.spb.ru/wp-content/uploads/2020/03/Kak_sostavit_lichnoe_svidetelstvo_1_pdf.pdf"
          rounded="xl"
          class="my-2 w-100"
        >
          Брошюра личное свидетельство
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

const yourOneText = ref(`Проект «Кто твой один?» служит помощью в личном благовестии и способен сделать вас эффективнее в достижении людей для Христа. <br><br>
Проект проходит 2 раза в год и длится 3 недели, в которые мы объединяемся для молитвы за наших неспасенных родных и друзей и верим, что Бог особенно будет действовать в это время. `)

</script>
