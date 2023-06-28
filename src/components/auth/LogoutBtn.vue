<template>
  <v-btn
    append-icon="mdi-logout"
    flat
    @click="appLogout"
  >
    Выйти
  </v-btn>
</template>

<script setup>
import {useAuthStore} from '@/store/auth.store'

const {appLogout} = useAuthStore()
</script>
