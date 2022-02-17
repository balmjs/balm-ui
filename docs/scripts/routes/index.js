import { createRouter, createWebHistory } from 'vue-router';
import routes from './main';
import { initRouter } from './middleware';

const history = createWebHistory();
const router = createRouter({
  history,
  routes
});

initRouter(router);

export default router;
