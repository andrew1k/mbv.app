<template>
  <v-app-bar density="compact" color="background" />
  <TheAppBar :main-screen="mainScreen" :appbar-title="$route.meta.title"/>
  <TheNavDrawer/>
  <v-main>
    <router-view v-slot="{ Component }">
      <v-card variant="text" elevation="0" rounded="0" max-width="600" class="mx-auto">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </v-card>
    </router-view>
  </v-main>
  <TheBottomNavigation/>
</template>

<script setup>
import TheAppBar from '@/components/navigations/TheAppBar.vue'
import TheNavDrawer from '@/components/navigations/TheNavDrawer.vue'
import TheBottomNavigation from '@/components/navigations/TheBottomNavigation.vue'
import {computed, ref, watch} from 'vue'
import {useRoute} from 'vue-router'

const mainScreen = ref(true)
const route = useRoute()
const path = computed(() => route.path)
watch(path, () => {
  mainScreen.value = path.value === '/home' || path.value === '/calendar' || path.value === '/discover'
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
