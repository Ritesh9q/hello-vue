import { createRouter, createWebHistory } from 'vue-router';
import VueBasics from '../components/VueBasics.vue';
import HelloTest from '../components/hello-test';

const routes = [
  {
    path: '/',
    component: VueBasics
  },
  {
    path: '/test',
    component: HelloTest
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router;