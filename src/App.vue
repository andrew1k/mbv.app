<template>
  <v-app :theme="theme">
    <v-snackbar
      v-model="snackbarMessage"
      multi-line
      location="top"
    >
      {{ snackbarMessage }}
    </v-snackbar>
    <RouterView />
  </v-app>
</template>

<script setup>
  import {useSnackbarMessages} from '@/store/snackbarmessages'
  import {storeToRefs} from 'pinia'
  import {useAppState} from '@/store/appstate'

  const snackbarMessages = useSnackbarMessages()
  const {snackbarMessage} = storeToRefs(snackbarMessages)
  const {theme} = storeToRefs(useAppState())
</script>
