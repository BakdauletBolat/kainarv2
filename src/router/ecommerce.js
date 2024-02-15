export default [
  {
    path: '/parts/',
    name: 'parts-list',
    component: () => import('@/views/ecommerce/parts/list/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/parts/:id',
    name: 'parts-list-detail',
    component: () => import('@/views/ecommerce/parts/list/detail.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/ecommerce/products/overview',
    name: 'ecommerce-products-overview',
    component: () => import('@/views/ecommerce/products/overview/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/ecommerce/products/edit',
    name: 'ecommerce-products-edit',
    component: () => import('@/views/ecommerce/products/edit/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/ecommerce/products/add',
    name: 'ecommerce-products-add',
    component: () => import('@/views/ecommerce/products/add/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/ecommerce/order/list',
    name: 'ecommerce-order-list',
    component: () => import('@/views/ecommerce/order/list/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/ecommerce/order/overview',
    name: 'ecommerce-order-overview',
    component: () => import('@/views/ecommerce/order/overview/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
]
