<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Водное крещение"
        btn="Хочу принять водное крещение"
        :img="baptism"

        :text="textBaptism"
        @toggler-btn="baptismToggler = !baptismToggler"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="baptismToggler" variant="text" elevation="0" rounded="0" class="ma-2">
        <SignToBaptism/>
      </v-card>
    </v-expand-transition>

  </v-card>
</template>

<script setup>
import PCard from '@/components/purposes/PurposesCards.vue'
import baptism from '@/assets/fellowshipPics/baptism.jpg'
import SignToBaptism from '@/components/purposes/fellowship/forms/SignToBaptism.vue'
import {ref} from 'vue'

const textBaptism = ref([
  `- это первое важнейшее таинство в жизни верующего человека. Оно не делает человека христианином, но оно показывает, что он им является. Это внешний символ внутреннего посвящения, которое делает человек в своём сердце, обретая новую жизнь в Иисусе Христе.<br /><br />
  Мы верим, что крещение нужно принимать по вере, в осознанном возрасте, исповедуя Иисуса Христа Господом и Спасителем.`,
])
const baptismToggler = ref(false)
</script>
