<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <PCard
        title="Деяния - уличная евангелизация"
        color="evangelism"
        :img="steiger"
        :text="textSteiger"
      />
      <v-card-actions>
        <VSpacer/>
        <v-btn  href="https://t.me/silchuuk" block variant="outlined">
          <VIcon class="mx-2" icon="mdi-send"/>
          Написать лидеру
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script setup>
import steiger from '@/assets/evangelismPics/steiger.jpg'
import PCard from '@/components/purposes/PurposesCards.vue'
import {ref} from 'vue'

const textSteiger = ref(`Деяния - это международное миссионерское молодёжное движение, которое призвано достигать глобальную молодёжную культура для Христа с помощью творчества, музыки и искусства. <br /><br />
Последние несколько лет наша команда успешно выходит на улицу нашего города с творческими проектами, которые вдохновляют задуматься о важных вопросах современного мира и о вечности.<br /><br />
<b>Узнать больше об уличной евангелизации</b>`)

</script>
