<template>
  <v-btn
    append-icon="mdi-logout"
    flat
    @click="appLogout"
  >Выйти</v-btn>
</template>

<script setup>
import {useAuthStore} from '@/store/authstore'
const { appLogout } = useAuthStore()
</script>
