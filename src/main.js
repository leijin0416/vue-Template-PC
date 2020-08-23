import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locale';
import filters from './filters';

import VueWechatTitle from 'vue-wechat-title';           // title
import VueLazyLoad from 'vue-lazyload';                 // 图片懒加载
import myCharts from "@/components/echartsTable/myCharts";   // 挂载图表
import VideoPlayer from 'vue-video-player';

import "./style/reset.scss";
import "./style/common.scss";

import 'iview/dist/styles/iview.css';
import "./style/animation.scss";
require('vue-video-player/src/custom-theme.css');

Vue.use(VueWechatTitle);
Vue.use(myCharts);
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    attempt: 1,
    listenEvents: ['scroll'],
    error: require('@/assets/error.jpg'),           // 报错需要的图片
    loading: require('@/assets/loadingTimg.png')	// 替换需要的图片
});
Vue.use(VideoPlayer);
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
