<!--suppress JSUnresolvedReference -->
<template>
  <v-card rounded="0" variant="text">
    <v-btn @click="$router.back()" variant="text" size="x-large" prepend-icon="mdi-chevron-left">Назад</v-btn>
    <v-card class="ma-2">
      <v-tabs v-model="tab">
        <v-tab value="start" variant="text" rounded="0">Начало</v-tab>
        <v-tab value="forms" variant="text" rounded="0">Формы</v-tab>
        <v-tab value="fellowship" variant="text" rounded="0">Общение</v-tab>
        <v-tab value="discipleship" variant="text" rounded="0">Ученичество</v-tab>
        <v-tab value="ministry" variant="text" rounded="0">Служение</v-tab>
        <v-tab value="evangelism" variant="text" rounded="0">Благовестие</v-tab>
        <v-tab value="counseling" variant="text" rounded="0">Консультация</v-tab>
        <v-tab value="prayer" variant="text" rounded="0">Молитва</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="start">
          <v-card-title>Таблицы заполненных форм</v-card-title>
        </v-window-item>
        <v-window-item value="forms" @group:selected="getForms('forms')">
          <FormsTable :table-header="tableHeader" :forms-data="formsData.forms"/>
        </v-window-item>
        <v-window-item value="fellowship" @group:selected="getForms('fellowship')">
          <FormsTable :table-header="tableHeader" :forms-data="formsData.fellowship"/>
        </v-window-item>
        <v-window-item value="discipleship" @group:selected="getForms('discipleship')">
          <FormsTable :table-header="tableHeader" :forms-data="formsData.discipleship"/>
        </v-window-item>
        <v-window-item value="ministry" @group:selected="getForms('ministry')">
          <FormsTable :table-header="tableHeader" :forms-data="formsData.ministry"/>
        </v-window-item>
        <v-window-item value="evangelism" @group:selected="getForms('evangelism')">
          <FormsTable :table-header="tableHeader" :forms-data="formsData.evangelism"/>
        </v-window-item>
        <v-window-item value="counseling" @group:selected="getForms('counseling')">
          <FormsTable :table-header="tableHeader" :forms-data="formsData.counseling"/>
        </v-window-item>
        <v-window-item value="prayer" @group:selected="getForms('prayer')">
          <FormsTable :table-header="tableHeader" :forms-data="formsData.prayer"/>
        </v-window-item>
      </v-window>
    </v-card>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
import {useFormsStore} from '@/store/form.store'
import FormsTable from '@/components//admin/FormsAnswersTable.vue'

const formsStore = useFormsStore()
const {getForms} = formsStore
const {formsData} = storeToRefs(formsStore)

const tableHeader = ref([
  {
    title: 'Время',
    key: 'time',
  }, {
    title: 'Имя',
    key: 'fullName',
  }, {
    title: 'Телефон',
    key: 'phoneNumber',
  }, {
    title: 'Ответ',
    key: 'answer',
  },
])
const tab = ref('start')
</script>
