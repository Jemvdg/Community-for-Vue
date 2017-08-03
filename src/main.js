// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'


import router from './router/index';
import jquery from '../static/jquery';
import bootstrap from '../static/bootstrap';



Vue.config.productionTip = false
Vue.use(vueResource);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
})
