import { createRouter, createWebHistory } from 'vue-router';
const TestPageOne = () => import('@/pages/TestPageOne/Index.vue');
const TestPageTwo = () => import('@/pages/TestPageTwo/Index.vue');
const routes = [
  {
    path: '/',
    component: TestPageOne,
  },
  {
    path: '/one',
    component: TestPageOne,
  },
  {
    path: '/two',
    component: TestPageTwo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
