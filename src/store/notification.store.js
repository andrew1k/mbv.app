import {defineStore} from 'pinia'
import {LocalNotifications} from '@capacitor/local-notifications'
import {useSnackbarMessages} from '@/store/snackbarmessages.store'

export const useNotificationsStore = defineStore('notificationsStore', () => {
  const {setMessage} = useSnackbarMessages()


  // TODO: https://capawesome.io/blog/the-push-notifications-guide-for-capacitor/
  const scheduleCalendarNotification = (event) => {
    LocalNotifications.checkPermissions()
      .then(() => {
        LocalNotifications.schedule({
          notifications: [{...event}],
        }).then(() => {
          setMessage(`Отлично, вы записались на ${event.title}`)
        }).catch((e) => {
          setMessage('Что-то пошло не так, обновите настройки уведомлений: ' + e)
          LocalNotifications.requestPermissions()
            .catch(() => {
              setMessage('Что-то не так, проверьте настройки вручную')
            })
        })
      }).catch(() => {
      setMessage('Разрешите отправлять вам уведомления')
    })
  }
  return {
    scheduleCalendarNotification,
  }
})
