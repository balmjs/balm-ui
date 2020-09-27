import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './main';
import { initRouter } from './middleware';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes
});

initRouter(router);

export default router;
