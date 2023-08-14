<template>
  <v-btn
    block
    size="large"
    append-icon="mdi-logout"
    @click="appLogout"
  >
    Выйти
  </v-btn>
</template>

<script setup>
import {useAuthStore} from '@/store/auth.store'

const {appLogout} = useAuthStore()
</script>
