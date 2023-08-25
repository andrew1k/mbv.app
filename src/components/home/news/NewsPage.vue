<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <VImg :src="newsItem?.url"/>
    </v-card>
    <v-card class="ma-2">
      <h3 class="font-weight-bold mx-4 my-2">{{newsItem?.title}}</h3>
<!--      <VCardText class="text-mono py-0">{{newsItem?.subtitle}}</VCardText>-->
      <component :is="leader"/>
      <VCardText v-html="newsItem?.text"></VCardText>
    </v-card>
    <v-card v-if="newsItem?.form" class="ma-2 pa-2" elevation="0" rounded="0" variant="text">
      <FormKit type="form" @submit="sendForm('forms',{...forma}, newsItem.title)" :actions="false" v-model="forma">
        <FormKitSchema :schema="newsItem?.formSchema"/>
        <v-card-actions>
          <VSpacer/>
          <VBtn type="submit">Отправить</VBtn>
        </v-card-actions>
      </FormKit>
    </v-card>
  </v-card>
</template>

<script setup>
import { onBeforeMount, computed, ref} from 'vue'
import {useContentStore} from '@/store/content.store'
import {storeToRefs} from 'pinia'
import AlHo from '@/components/leaders/AlHo.vue'
import DaDm from '@/components/leaders/DaDm.vue'
import DmDm from '@/components/leaders/DmDm.vue'
import MBV from '@/components/leaders/MBV.vue'
import ViGo from '@/components/leaders/ViGo.vue'
import TaSt from '@/components/leaders/TaSt.vue'
import AnKo from '@/components/leaders/AnKo.vue'
import {useFormsStore} from '@/store/form.store'

const contentStore = useContentStore()
const {getNewsItem} = contentStore
const {newsItem} = storeToRefs(contentStore)
const props = defineProps({
  id: {
    type: String,
  },
})

onBeforeMount(() => {
  getNewsItem(props.id)
})
let leader = computed(() => {
  switch (newsItem.value?.leader) {
    case 'MBV' : return MBV
    case 'AlHo' :
      return AlHo
    case 'DaDm':
      return DaDm
    case 'DmDm':
      return DmDm
    case 'ViGo':
      return ViGo
    case 'TaSt':
      return TaSt
    case 'AnKo':
      return AnKo
    default:
      return MBV
  }
})

const forma = ref({})
const {sendForm} = useFormsStore()
</script>
