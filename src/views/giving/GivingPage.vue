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
<!--  <form-->
  <!--    class="form-donate header__form-donate"-->
  <!--    method="post"-->
  <!--    action="https://oos.pscb.ru/pay/simple?marketPlace=44217984"-->
  <!--  >-->
  <!-- TODO: yarn add @capacitor/browser and integrate with payments -->
  <VTextField
        type="number"
        name="amount"
        label="Введите сумму пожертвования"
        required="required"
        class="mx-2 mt-4"
        v-model="amount"
      />
<!--      <input-->
<!--        type="hidden"-->
<!--        name="details"-->
<!--        value="Пожертвование с приложения"-->
<!--        class="input__input"-->
<!--      />-->
<!--      <input-->
<!--        type="hidden"-->
<!--        name="customerComment"-->
<!--        value=""-->
<!--        class="input__input"-->
<!--      />-->
<!--      <input-->
<!--        type="hidden"-->
<!--        name="customerAccount"-->
<!--        value="47607"-->
<!--        class="input__input"-->
<!--      />-->
<!--      <input-->
<!--        type="hidden"-->
<!--        name="account"-->
<!--        value="47607"-->
<!--        class="input__input"-->
<!--      />-->
    <v-card-actions>
      <v-btn variant="outlined" block :href="`https://oos.pscb.ru/pay/simple?marketPlace=44217984&account=${+new Date()}&amount=${amount}&customerComment=\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0435\u000a`">
        Пожертвовать
      </v-btn>
    </v-card-actions>
<!--  </form>-->
</v-card>
</template>

<script setup>
import img from '@/assets/GivingImg.jpg'
import {ref} from 'vue'
const amount = ref()

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
