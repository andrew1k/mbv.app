<template>
<v-card class="ma-2">
  <v-img :src="img" :options="{threshold: 0}" eager>
    <div class="fill-height bottom-gradient d-flex align-end">
      <VCardTitle class="text-white">Сделать пожертвование</VCardTitle>
    </div>
  </v-img>
  <h4 class="mt-2 font-weight-light text-center">
    «… и сеющий и жнущий вместе радоваться будут» <br>
    Евангелие от Иоанна 4:36
  </h4>
  <form
    class="form-donate header__form-donate"
    method="post"
    action="https://oos.pscb.ru/pay/simple?marketPlace=44217984"
  >
      <VTextField
        type="number"
        name="amount"
        label="Введите сумму пожертвования"
        required="required"
        class="mx-2 mt-4"
      />
      <input
        type="hidden"
        name="details"
        value="Пожертвование с приложения"
        class="input__input"
      />
      <input
        type="hidden"
        name="customerComment"
        value=""
        class="input__input"
      />
      <input
        type="hidden"
        name="customerAccount"
        value="47607"
        class="input__input"
      />
      <input
        type="hidden"
        name="account"
        value="47607"
        class="input__input"
      />
    <v-card-actions>
      <v-btn variant="outlined" block type="submit">
        Внести
      </v-btn>
    </v-card-actions>
  </form>
</v-card>
</template>

<script setup>
import img from '@/assets/GivingImg.jpg'
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
