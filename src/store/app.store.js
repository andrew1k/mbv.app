import {defineStore} from 'pinia'
import {ref} from 'vue'
import {StatusBar, Style} from '@capacitor/status-bar'

export const useAppState = defineStore('appState', () => {
  const drawer = ref(null)
  const theme = ref('mbvLight')
  // const theme = ref('mbvLight')
  const isPending = ref(false)
  const setStatusBarStyleDark = async () => {
    await StatusBar.setStyle({style: Style.Dark})
    await StatusBar.setBackgroundColor('#1C1B1F')
  }

  const setStatusBarStyleLight = async () => {
    await StatusBar.setStyle({style: Style.Light})
    await StatusBar.setBackgroundColor('#f4f4f4')
  }

  const handleTheme = () => {
    if (theme.value === 'dark') {
      theme.value = 'mbvLight'
      setStatusBarStyleLight()
    } else {
      theme.value = 'dark'
      setStatusBarStyleDark()
    }
  }
  return {
    drawer,
    theme,
    isPending,
    handleTheme,
  }
})
