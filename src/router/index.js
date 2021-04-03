import Vue from 'vue';
import Router from 'vue-router';
import { constantRouterMaps } from './routersMaps';
import { sessionData } from '@/filters/storage';

Vue.use(Router);

let base = `${process.env.BASE_URL}`;
const createRouter = () => new Router({
    mode: 'history',
    base: base,
    routes: constantRouterMaps,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

// 登陆页面路由 name
const LOGIN_PAGE_NAME = 'Login';
const router = createRouter();
/**
 *  做些什么，通常权限控制就在这里做哦
 */
router.beforeEach((to, from, next) => {
    const token = sessionData('get', 'StateSessionToken');
    // console.log(token);
    if (token !== null) next();
    else {
      // 未登陆且要跳转的页面是登录页
      if (to.name === LOGIN_PAGE_NAME) next();
      else {
        // 未登录且要跳转的页面不是登录页，则跳转到登录页
        next({
          name: LOGIN_PAGE_NAME
        });
      }
    }
})

export default router;
