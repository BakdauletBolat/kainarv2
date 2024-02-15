export default [
  {
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/tables/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/datatables',
    name: 'datatables',
    component: () => import('@/views/datatables/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
]
