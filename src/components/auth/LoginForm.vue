<template>
  <v-card variant="text" rounded="0" max-width="600" class="mx-auto">
      <v-card class="ma-2 pa-2">
        <VProgressLinear indeterminate v-if="isSubmitting"/>
        <v-card-title>Войти</v-card-title>
        <v-form @submit.prevent="submit">
          <vTextField
            label="Email"
            type="email"
            v-model="email"
            :error-messages="eError"
            @blur="eBlur"
          />
          <vTextField
            label="Пароль"
            :type="passwordEye ? 'text' : 'password'"
            v-model="password"
            :error-messages="pError"
            @blur="pBlur"
            :append-inner-icon="passwordEye ?'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="passwordEye = !passwordEye"
          />
          <v-btn class="my-2" size="x-large" :disabled="!!eError || !!pError" block type="submit">Войти</v-btn>
          <v-btn block variant="outlined" size="large" to="/auth/signup">Зарегистрироваться</v-btn>
          <VBtn to="/auth/restorePassword" variant="text" block text="забыли пароль?" class="mt-5"/>
        </v-form>
      </v-card>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {useAuthStore} from '@/store/auth.store'

const {appLogin} = useAuthStore()
const passwordEye = ref(false)
const {handleSubmit, isSubmitting} = useForm()
const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email',
  yup
    .string()
    .trim()
    .required('Поле email должно быть заполнено')
    .email('Введите валидный email'),
)
const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password',
  yup
    .string()
    .trim()
    .required('Это поле должно быть заполнено')
    .min(6, 'Это поле должно иметь не менее 6 символов')
    .max(32, 'Не должно иметь более 32 символов'),
)

const submit = handleSubmit(async values => {
  await appLogin({...values})
})
</script>
