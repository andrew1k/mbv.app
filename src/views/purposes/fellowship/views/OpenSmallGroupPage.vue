<template>
  <v-card rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Хочу открыть Малую Группу"
        btn="Подать заявку"
        :img="smallGroups"
        :text="sgText"
        @toggler-btn="toggleOpen"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="togglerSG" variant="text" rounded="0" class="ma-2">
        <OpenSG />
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import smallGroups from '@/assets/fellowshipPics/openSmallGroup.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'
import OpenSG from '@/components/purposes/fellowship/forms/OpenSG.vue'

const togglerSG = ref(false)

const toggleOpen = () => {
  togglerSG.value = !togglerSG.value
  if (togglerSG.value)
    setTimeout(() => {
      window.scrollBy({
        top: 500,
        left: 0,
        behavior: "smooth",
      })
    }, 300)
}

const sgText = ref(`Малые Группы - это не одно из направлений и служений нашей Церкви, это и есть наша Церковь.
Мы хотим, чтобы Малые Группы были во всех районах города и будем рады помочь вам открыть группу в своем доме`)


</script>
