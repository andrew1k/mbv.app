<template>
  <TheAppBar :appbar-title="$route.meta.title"/>
  <TheNavDrawer/>
  <v-main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </v-main>
  <TheBottomNavigation/>
</template>

<script setup>
import TheAppBar from '@/components/navigations/TheAppBar.vue'
import TheNavDrawer from '@/components/navigations/TheNavDrawer.vue'
import TheBottomNavigation from '@/components/navigations/TheBottomNavigation.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
