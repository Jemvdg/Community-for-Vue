import Vue from 'vue'
import VueRouter from 'vue-router';


import home from '../components/main/main.vue';
import about from '../components/about/about.vue';
import login from '../components/login/login.vue';
import topics from '../components/titles/titles.vue';
import user from '../components/user/user.vue';

Vue.use(VueRouter);


var router = new VueRouter({
  routes: [{
      path: '/',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/topic/:id',
      component: topics
    },
    {
      path: '/user/:id',
      component: user
    },
  ]
})

export default router;
