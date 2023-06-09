<template>
  <v-card>
    <v-slide-y-transition>
      <v-img v-if="_logo" :src="logo" class="my-5"/>
    </v-slide-y-transition>
    <v-card-actions class="mt-16">
      <v-slide-x-reverse-transition>
        <v-btn block="" v-if="btn1" to="/auth/login">
          Войти
        </v-btn>
      </v-slide-x-reverse-transition>
    </v-card-actions>
    <v-card-actions>
      <v-slide-x-reverse-transition>
        <v-btn block="" v-if="btn2">
          Зарегистрироваться
        </v-btn>
      </v-slide-x-reverse-transition>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import logo from '@/assets/logo.svg'
import {onMounted, ref} from 'vue'

const _logo = ref(false)
const btn1 = ref(false)
const btn2 = ref(false)
const logoAnimation = () => {
  _logo.value = true
}

onMounted(async () => {
  logoAnimation()
  setTimeout(() => {
    btn1.value = true
  }, 2000)
  setTimeout(() => {
    btn2.value = true
  }, 3000)
})
</script>
