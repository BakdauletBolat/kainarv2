export default [
  {
    path: '/extensions/quill-editor',
    name: 'extensions-quill-editor',
    component: () => import('@/views/extensions/quill-editor/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/extensions/toastify',
    name: 'extensions-toastify',
    component: () => import('@/views/extensions/toastify/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/extensions/masonry-wall',
    name: 'extensions-masonry-wall',
    component: () => import('@/views/extensions/masonry-wall/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/extensions/sortable',
    name: 'extensions-sortable',
    component: () => import('@/views/extensions/sortable/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/extensions/drop-zone',
    name: 'extensions-drop-zone',
    component: () => import('@/views/extensions/drop-zone/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/extensions/date-picker',
    name: 'extensions-date-picker',
    component: () => import('@/views/extensions/date-picker/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/extensions/cleave-input',
    name: 'extensions-cleave-input',
    component: () => import('@/views/extensions/cleave-input/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
  {
    path: '/extensions/swiper',
    name: 'extensions-swiper',
    component: () => import('@/views/extensions/swiper/index.vue'),
    meta: {
      layout: 'content',
      requiresAuth: true,
    },
  },
]
