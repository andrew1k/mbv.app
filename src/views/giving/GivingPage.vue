<template>
<v-card>
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
        class="ma-2"
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

</script>
