import Vue from 'vue';
import App from './App.vue';
// import 'core-js/modules/es.promise';
// import 'core-js/modules/es.array.iterator';
import router from './router';

import store from './store';
import './plugins/ant-design-vue';
import './assets/css/reset.less';
import './assets/css/home.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
