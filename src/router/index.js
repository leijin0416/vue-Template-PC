import Vue from 'vue';
import Router from 'vue-router';
import { constantRouterMaps } from './routersMaps.js';
import { getStore } from '@/common/localUtil';

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

const router = createRouter();
/**
 *  做些什么，通常权限控制就在这里做哦
 */
router.beforeEach((to, from, next) => {
    let token = getStore('hasSessionToken');
    if (token == null) {
        next();
    } else {
        next();
    }
})

export default router;
