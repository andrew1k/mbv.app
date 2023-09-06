<template>
  <VAppBar v-if="platform === 'ios'" density="compact" color="background" />
  <v-main>
    <router-view v-slot="{ Component }">
      <v-card variant="text" elevation="0" rounded="0" max-width="600" class="mx-auto">
        <v-img :src="logo" class="ma-10" />
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </v-card>
    </router-view>
  </v-main>
  <v-footer color="background" class="text-center text-caption">
    Местная религиозная организация христиан веры евангельской (пятидесятников) «Церковь евангельских христиан в духе апостолов «Миссия «Благая весть»
    <br>
    ОГРН 1037858004964 30 января 2003 г.
    <br>
    ИНН 7802073302
  </v-footer>
</template>

<script setup>
import {ref} from 'vue'
import {Device} from '@capacitor/device'
import logo from '@/assets/logo.svg'

const platform = ref('')
Device.getInfo().then(i => {
  platform.value = i.platform
})
</script>
