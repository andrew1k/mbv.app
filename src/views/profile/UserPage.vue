<template>
  <v-card rounded="0" variant="text">
    {{ user?.firstName }}
  </v-card>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '@/plugins/firebase.config'

const props = defineProps({
  id: {
    type: String,
  },
})

const user = ref({})

onMounted(async () => {
  const snap = await getDoc(doc(db, 'users', props.id))
  if (snap.exists()) user.value = snap.data()
})

</script>
