export const routes = [
  {
    path: '/',
    redirect: '/chapter1',
    component: () => import('@/layout/basic/index.vue'),
    children: [
      {
        path: 'chapter1',
        component: () => import('@/views/chapter1/index.vue'),
        meta: {
          title: 'chapter1',
          keepAlive: true,
        },
      },
      {
        path: 'chapter2',
        component: () => import('@/views/chapter2/index.vue'),
        meta: {
          title: 'chapter2',
          keepAlive: true,
        },
      },
    ],
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/chapter1',
  },
];

export default routes;
