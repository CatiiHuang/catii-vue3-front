import { createRouter, createWebHistory } from 'vue-router';
import Page404 from '@/pages/Page404.vue';

const TestPageOne = () => import('@/pages/TestPageOne/Index.vue');
const TestPageTwo = () => import('@/pages/TestPageTwo/Index.vue');

const routes = [
  {
    path: '/',
    redirect: '/page-one',
  },

  {
    path: '/page-one',
    component: TestPageOne,
  },
  {
    path: '/page-two',
    component: TestPageTwo,
  },
  // 404
  {
    path: '/:path(.*)',
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
