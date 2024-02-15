export default [
  {
    path: '/apps/calendar',
    name: 'apps-calendar',
    component: () => import('@/views/apps/calendar/Calendar.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/apps/invoice/list',
    name: 'apps-invoice-list',
    component: () => import('@/views/apps/invoice/List.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/apps/invoice/details/:id',
    name: 'apps-invoice-details',
    component: () => import('@/views/apps/invoice/Details.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/apps/invoice/edit/:id',
    name: 'apps-invoice-edit',
    component: () => import('@/views/apps/invoice/Edit.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/apps/invoice/add',
    name: 'apps-invoice-add',
    component: () => import('@/views/apps/invoice/Add.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/users/list',
    name: 'apps-user-list',
    component: () => import('@/views/apps/user/list/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/user/:tab',
    name: 'apps-user-profile',
    component: () => import('@/views/apps/user/profile/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
]
