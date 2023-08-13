<template>
  <the-card-toolbar toolbarTitle="Ваш профиль" :toolbar-color="'primary'">
    <template #rightSpace>
      <LogoutBtn />
    </template>
  </the-card-toolbar>
  <v-main>
    <v-card variant="text" class="mx-auto" max-width="600">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-card>
  </v-main>
</template>

<script setup>
import LogoutBtn from '@/components/auth/LogoutBtn.vue'
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
</script>
