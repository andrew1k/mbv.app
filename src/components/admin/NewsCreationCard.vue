<template>
  <v-card class="ma-2" elevation="0" variant="text">
    <v-file-input
      class="ma-2"
      label="Image"
      v-model="img"
      show-size
      prepend-icon="mdi-camera"
    />
    <v-text-field class="ma-2" label="Title" hide-details v-model="title"/>
    <v-text-field class="ma-2" label="Subtitle" hide-details v-model="subtitle"/>
    <v-textarea class="ma-2" label="Text" hide-details v-model="text"/>
    <VSelect
      v-model="leader"
      variant="solo"
      class="ma-2"
      :items="leaders"
      :hint="`${leader?.leaderName} ${leader?.leaderTitle}`"
      item-title="leaderName"
      item-value="leaderName"
      return-object
      label="Leader"
    />
    <v-card-actions>
      <VSpacer/>
      <v-btn variant="flat" @click="uploadNews(img, {title, subtitle, text, leader: leader.leaderTitle})">
        Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
  <VDivider/>
</template>

<script setup>
import {ref} from 'vue'
import {useContentStore} from '@/store/content.store'

const {uploadNews} = useContentStore()
const img = ref(null)
const title = ref('')
const subtitle = ref('')
const text = ref('')
const leader = ref()
const leaders = ref([
  {leaderName: 'Даниил Шатров', leaderTitle: 'DaDm'},
  {leaderName: 'Дмитрий Шатров', leaderTitle: 'DmDm'},
  {leaderName: 'Александр Холеменко', leaderTitle: 'AlHo'},
  {leaderName: 'Анастасия Кошелева', leaderTitle: 'AnKo'},
  {leaderName: 'Татьяна Ступа', leaderTitle: 'TaSt'},
  {leaderName: 'Виталий Голиков', leaderTitle: 'ViGo'},
])
// const leaders = ref([
//   {leaderName: 'Даниил Шатров', leaderTitle: 'Ведущий пастор', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FDaniil%20Shatrov.jpg?alt=media&token=b63b150a-8c9d-4c48-a1fd-4bd72a808bfa'},
//   {leaderName: 'Дмитрий Шатров', leaderTitle: 'Епископ', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FDD.png?alt=media&token=7b1cf06a-7af4-4dc2-86ee-bd06f432d392'},
//   {leaderName: 'Александр Холеменко', leaderTitle: 'Пастор', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FAH.jpg?alt=media&token=99ac13aa-ab4a-41d9-a791-e1d06165aec2'},
//   ])
</script>
