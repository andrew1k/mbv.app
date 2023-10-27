<!--suppress JSUnresolvedReference -->
<template>
  <v-card-actions>
    <v-card-title>Создать новостную карточку</v-card-title>
    <VSpacer/>
    <v-btn @click="openCard = !openCard">Создать</v-btn>
  </v-card-actions>
  <v-expand-transition>
    <v-card class="ma-2 pa-2" v-if="openCard">
      <v-file-input
        label="Image"
        v-model="img"
        show-size
        prepend-icon="mdi-camera"
      />
      <v-text-field label="Title" v-model="title"/>
      <v-text-field label="Subtitle" v-model="subtitle"/>
      <QuillEditor v-model:content="text" content-type="html" placeholder="Text"/>
      <v-card-text>{{ text }}</v-card-text>
      <v-card-subtitle class="text-end">{{ `${leader?.leaderName} ${leader?.leaderTitle}` }}</v-card-subtitle>
      <VSelect
        v-model="leader"
        :items="leaders"
        item-title="leaderName"
        item-value="leaderName"
        return-object
        label="Leader"
      />
      <v-switch v-model="form" :label="`Создать форму ${form.toString()}`"/>
      <v-textarea label="form Schema" hint="В форме JSON object, для каждого вопроса, свой object" class="mt-2" v-model="formSchema"/>
      <v-card-actions>
        <v-btn
          block
          class="mt-6"
          @click="uploadNews(img, {title, subtitle, text, leader: leader.leaderTitle, form, formSchema: [JSON.parse(formSchema)]})"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
  <v-card class="ma-2" variant="text" v-for="(item, i) in news" :key="i">
    <v-card-subtitle>
      <v-btn @click="deleteNewsItem(item)" size="x-small" icon="mdi-delete" />
      {{ item.title }}
    </v-card-subtitle>
    <VDivider/>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useContentStore} from '@/store/content.store'
import {QuillEditor} from '@vueup/vue-quill'
import {storeToRefs} from 'pinia'

const {uploadNews, deleteNewsItem} = useContentStore()
const {news} = storeToRefs(useContentStore())
const img = ref(null)
const form = ref(false)
const title = ref('')
const subtitle = ref('')
const text = ref('')
const leader = ref()
const formSchema = ref()
const leaders = ref([
  {leaderName: 'Даниил Шатров', leaderTitle: 'DaDm'},
  {leaderName: 'Дмитрий Шатров', leaderTitle: 'DmDm'},
  {leaderName: 'Александр Холеменко', leaderTitle: 'AlHo'},
  {leaderName: 'Анастасия Кошелева', leaderTitle: 'AnKo'},
  {leaderName: 'Татьяна Ступа', leaderTitle: 'TaSt'},
  {leaderName: 'Виталий Голиков', leaderTitle: 'ViGo'},
  {leaderName: 'Миссия Благая Весть', leaderTitle: 'MBV'},
])
// const leaders = ref([
//   {leaderName: 'Даниил Шатров', leaderTitle: 'Ведущий пастор', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FDaniil%20Shatrov.jpg?alt=media&token=b63b150a-8c9d-4c48-a1fd-4bd72a808bfa'},
//   {leaderName: 'Дмитрий Шатров', leaderTitle: 'Епископ', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FDD.png?alt=media&token=7b1cf06a-7af4-4dc2-86ee-bd06f432d392'},
//   {leaderName: 'Александр Холеменко', leaderTitle: 'Пастор', leaderUrl: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/leaders%2FAH.jpg?alt=media&token=99ac13aa-ab4a-41d9-a791-e1d06165aec2'},
//   ])

const openCard = ref(false)
</script>
