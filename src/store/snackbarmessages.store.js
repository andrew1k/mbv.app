import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useSnackbarMessages = defineStore('snackbarMessages', () => {
  const snackbarMessage = ref(null)
  const setMessage = (message) => {
    snackbarMessage.value = message
    setTimeout(() => snackbarMessage.value = null, 7000)
  }
  return {
    snackbarMessage,
    setMessage,
  }
})
