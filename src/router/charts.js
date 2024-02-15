export default [
  {
    path: '/charts/apex-chart',
    name: 'charts-apex-chart',
    component: () => import('@/views/charts/apex-chart/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/charts/chart-js',
    name: 'charts-chart-js',
    component: () => import('@/views/charts/chartjs/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
]
