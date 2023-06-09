// Composables
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import {App} from '@capacitor/app'
import {storeToRefs} from 'pinia'
import {useAuthStore} from '@/store/authstore'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

App.addListener('backButton', () => {router.back()}) // для Android слушает кнопку назад

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const {isAuthed} = storeToRefs(authStore)
  const requireAuth = to.meta.auth
  if (requireAuth && !isAuthed.value) next('/auth/login')
  else if (requireAuth && isAuthed.value) next()
  else if (!requireAuth && isAuthed.value) next('/')
  else next()
})

export default router
