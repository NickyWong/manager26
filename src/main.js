import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/base.css'

import VueAxios from './lib/vue-axios'
import router from './lib/router'
import myBreadcrumb from './components/myBreadcrumb.vue'

Vue.component('myBreadcrumb',myBreadcrumb);

Vue.use(VueAxios);

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
