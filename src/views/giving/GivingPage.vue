<template>
<v-card class="ma-2">
  <v-img :src="img" :options="{threshold: 0}" eager>
    <div class="fill-height bottom-gradient d-flex align-end">
      <VCardTitle class="text-white">Сделать пожертвование</VCardTitle>
    </div>
  </v-img>
  <h4 class="mt-2 font-weight-light text-center">
    «…и сеющий и жнущий вместе радоваться будут»<br>
    Евангелие от Иоанна 4:36
  </h4>
  <v-form @submit.prevent="submit()">
    <VTextField
      type="number"
      name="amount"
      label="Введите сумму пожертвования"
      required="required"
      class="mx-2 mt-4"
      v-model="amount"
    />
    <v-card-actions>
      <v-btn variant="outlined" block type="submit">
        Пожертвовать
      </v-btn>
    </v-card-actions>
  </v-form>
</v-card>
</template>

<script setup>
import img from '@/assets/GivingImg.jpg'
import {ref} from 'vue'
import {Browser} from '@capacitor/browser'

const amount = ref()
const submit = async () => {
  await Browser.open({
    url: `https://oos.pscb.ru/pay/simple?marketPlace=44217984&account=${+(new Date())}&amount=${amount.value}`
  })
}
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    transparent 90px
  );
}
</style>
