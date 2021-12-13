import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layouts/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/user-manage/list' },
  {
    path: '/user-manage',
    component: Layout,
    children: [
      {
        path: 'list',
        component: () => import('@/views/user-manage/list.vue')
      },
      {
        path: 'add',
        component: () => import('@/views/user-manage/form.vue')
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/user-manage/form.vue')
      },
      {
        path: 'detail/:id',
        component: () => import('@/views/user-manage/detail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((to, from, next) => {
  const {
    meta: { title }
  } = to
  document.title = (title as string) ? (title as string) : 'vue-vant-template'
  next()
})

export default router
