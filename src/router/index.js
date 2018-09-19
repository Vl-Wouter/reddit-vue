import Vue from 'vue';
import Router from 'vue-router';
import Webdev from '@/components/Webdev';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Webdev',
      component: Webdev,
    },
  ],
});
