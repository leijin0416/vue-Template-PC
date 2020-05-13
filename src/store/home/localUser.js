import { setStore } from '@/common/localUtil';

export default {
	namespaced: true,
	//1、要设置的全局访问的state对象
    state: {
        registerRouteFresh: false,
	},

	//2、实时监听state值的变化(最新状态)
    getters: {
        roleId: (state) => state.roleId
	},

	//3、自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性，list 为要变化的形参
	actions: {
	},

	//4、如何变化 datalist
	mutations: {
		//用户id
		handleUserSession: (state, hasSessionToken) => {
            state.hasSessionToken = hasSessionToken;
			setStore('hasSessionToken', hasSessionToken);
        }
	}
};