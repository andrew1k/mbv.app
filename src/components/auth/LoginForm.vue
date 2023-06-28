<template>
  <v-toolbar color="background" density="compact">
    <VSpacer/>
    <v-btn to="/auth/signup">Зарегистрироваться</v-btn>
  </v-toolbar>
  <v-card variant="text" elevation="0" rounded="0" max-width="600" class="mx-auto">
    <v-fade-transition>
      <VImg v-if="_pic" :src="mobileLogin"/>
    </v-fade-transition>
    <v-fade-transition>
      <v-card class="mx-2 mt-n5 mb-2 pa-2" v-if="_card">
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
          <VBtn to="/auth/restorePassword" variant="text" block text="забыли пароль?" class="mt-5"/>
        </v-form>
      </v-card>
    </v-fade-transition>
  </v-card>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {useAuthStore} from '@/store/auth.store'
import mobileLogin from '@/assets/illustrations/Mobile login.svg'

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

const _pic = ref(false)
const _card = ref(false)

onMounted(() => {
  setTimeout(() => {
    _pic.value = true
  }, 1000)
  setTimeout(() => {
    _card.value = true
  }, 2000)

})
</script>
