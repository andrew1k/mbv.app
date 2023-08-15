<template>
  <v-card-actions>
    <v-btn variant="outlined" block @click="sendForm('fellowship', {'btn': 'Даю знать, что я помолился впервые'}, 'Я помолился впервые')">Я помолился впервые</v-btn>
  </v-card-actions>
</template>

<script setup>

import {useFormsStore} from '@/store/form.store'

const {sendForm} = useFormsStore()
</script>
