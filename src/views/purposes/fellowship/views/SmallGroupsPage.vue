<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Малые группы"
        btn="Найти Малую Группу"
        :img="smallGroups"
        :text="sgText"
        @toggler-btn="toggleOpen"
      />
    </v-card>
    <v-expand-transition>
      <v-card v-show="togglerSG" variant="text" elevation="0" rounded="0" class="ma-2">
        <SignToSG/>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import smallGroups from '@/assets/fellowshipPics/smallGroups.jpg'
import SignToSG from '@/components/purposes/fellowship/forms/SignToSG.vue'
import PCard from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'

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

const sgText = ref([
  `Малая группа - это встречи верующих людей среди недели в тёплой, домашней, дружеской обстановке для общения, изучения Библии, совместных молитв и помощи друг другу. <br /><br />
  Это то, что нужно каждому христианину, чтобы возрастать во Христе и чувствовать себя частью церковной семьи. <br /><br />
  Малые группы проходят еженедельно в разных районах города. Напишите нам, чтобы найти свою Малую группу`,
])


</script>
