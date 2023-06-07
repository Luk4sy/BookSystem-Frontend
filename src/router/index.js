import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/user',
      name: '图书借阅系统首页',
      component: () => import('../layout/index2.vue'),
      children: [
        {
          path: '/usermain',
          name: '用户图书信息',
          component: () => import('@/views/main/index2.vue')
        },
        {
          path: '/borrow',
          name: 'borrowBook',
          component: () => import('@/views/borrow/index.vue'),
          props: {book: true}
        },
        {
          path: '/userrecord',
          name: '当前借书记录',
          component: () => import('@/views/record/index2.vue')
        },
      ]
    },
    
    {
      path: '/admin',
      name: '管理员首页',
      component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/main',
        name: '图书信息',
        component: () => import('@/views/main/index.vue')
      },
      
      {
        path: '/allrecord',
        name: '借书记录',
        component: () => import('@/views/record/index.vue')
      },
      {
        path: '/book',
        name: '添加书籍',
        component: () => import('@/views/book/index.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('@/views/orders/index.vue')
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('@/views/reports/index.vue')
      },
      {
        path: '/rights',
        name: 'rights',
        component: () => import('@/views/rights/index.vue')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('@/views/roles/index.vue')
      }
    ]
    }
  ]
})

export default router
