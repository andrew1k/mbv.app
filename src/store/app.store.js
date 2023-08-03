import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useAppState = defineStore('appState', () => {
  const drawer = ref(null)
  const theme = ref('mbvLight')
  const isPending = ref(false)


  const handleTheme = () => {
    if (theme.value === 'dark') {
      theme.value = 'mbvLight'
    } else {
      theme.value = 'dark'
    }
  }
  return {
    drawer,
    theme,
    isPending,
    handleTheme,
  }
})
