// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Test from './components/Tetst';
import User from './components/User';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/user',
      component: User,
    }
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
