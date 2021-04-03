import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locale';
import filters from './filters/Common';

import VueWechatTitle from 'vue-wechat-title';               // title
import VueLazyLoad from 'vue-lazyload';                      // 图片懒加载
import ECharts from "@/components/EchartsAll/ECharts";     // 挂载图表

import "./style/reset.scss";
import "./style/common.scss";
import '@/icons'

Vue.use(VueWechatTitle);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 1,
  listenEvents: ['scroll'],
  error: require('@/assets/error.jpg'),           // 报错需要的图片
  loading: require('@/assets/loadingTimg.png')	// 替换需要的图片
});
Vue.use(ECharts);

Vue.config.productionTip = false;
// 全局过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
