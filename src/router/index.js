import { createRouter, createWebHistory } from 'vue-router'
import apps from './apps'
import charts from './charts'
import components from './components'
import ecommerce from './ecommerce'
import extensions from './extensions'
import forms from './forms'
import pages from './pages'
import tables from './tables'
import { isUserLoggedIn } from './utils'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => {
    // always scroll to top
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'dashboard-ecommerce',
      component: () => import('@/views/dashboard/ecommerce/index.vue'),
      meta: {
        layout: 'content',
        requiresAuth: true,
      },
    },
    {
      path: '/dashboard/crm',
      name: 'dashboard-crm',
      component: () => import('@/views/dashboard/crm/index.vue'),
      meta: {
        layout: 'content',
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'blank',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        layout: 'blank',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/ForgotPassword.vue'),
      meta: {
        layout: 'blank',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        layout: 'blank',
      },
    },

    // components
    ...components,
    ...pages,
    ...apps,
    ...ecommerce,
    ...forms,
    ...tables,
    ...extensions,
    ...charts,
  ],
})

router.beforeEach(to => {
  const isLoggedIn = isUserLoggedIn()
  if (to.meta.requiresAuth && !isLoggedIn)
    return { name: 'login', query: { to: to.fullPath } }
  if (to.meta.redirectIfLoggedIn && isLoggedIn)
    return { name: 'home' }
})
export default router
