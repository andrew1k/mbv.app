import MainLayout from '@/layouts/MainLayout.vue'
import HomePage from '@/views/home/HomePage.vue'
import DiscoverPage from '@/views/discover/DiscoverPage.vue'

export default [
  {
    path: '/',
    component: MainLayout,
    meta: {
      auth: true,
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomePage,
        meta: {
          title: 'Главная',
        }
      }, {
        path: '/discover',
        name: 'Discover',
        component: DiscoverPage,
        meta: {
          title: 'Открой для себя церковь',
        }
      },{
        path: '/purposes/worship',
        name: 'worship',
        component: () => import('@/views/purposes/worship/purposeWorship.vue'),
        meta: {
          title: 'Поклонение',
          color: 'worship', // error
        }
      },{
        path: '/purposes/fellowship',
        name: 'fellowship',
        component: () => import('@/views/purposes/fellowship/purposeFellowship.vue'),
        meta: {
          title: 'Общение',
          color: 'fellowship', // warning
        }
      },{
        path: '/purposes/discepleship',
        name: 'discepleship',
        component: () => import('@/views/purposes/discepleship/purposeDiscepleship.vue'),
        meta: {
          title: 'Ученичество',
          color: 'discepleship', // success
        }
      },{
        path: '/purposes/ministry',
        name: 'ministry',
        component: () => import('@/views/purposes/ministry/purposeMinistry.vue'),
        meta: {
          title: 'Служение',
          color: 'ministry', // secondary
        }
      },{
        path: '/purposes/evangelism',
        name: 'evangelism',
        component: () => import('@/views/purposes/evangelism/purposeEvangelism.vue'),
        meta: {
          title: 'Благовестие',
          color: 'evangelism', // info
        }
      },{
        path: '/purposes/youth',
        name: 'youth',
        component: () => import('@/views/purposes/youth/purposeYouth.vue'),
        meta: {
          title: 'MBVYouth',
          color: 'secondary',
        }
      },
    ],
  }, {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    meta: {
      auth: false,
    },
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/components/auth/LoginForm.vue')
      },{
        path: '/auth/signup',
        name: 'Signup',
        component: () => import('@/components/auth/SignupForm.vue')
      },{
        path: '/auth/restorePassword',
        name: 'RestorePassword',
        component: () => import('@/components/auth/RestorePwdCmpnt.vue')
      },
    ]
  },
]
