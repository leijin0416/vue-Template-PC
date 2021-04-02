import { sessionData } from '@/filters/storage';
import { apiWebUserFindCountry, apiWebUserContractFindCountry, apiWebUserList, apiWebUserFindOrganizationList } from "@/api/index";

export default {
	namespaced: true,
	/**
	 *  1、要设置的全局访问的state对象
	 */
  state: {
    getSessionToken: '',
		getFindCountry: [],
		getUserContractFindCountry: [],
		getUserList: [],
		getUserFindOrganizationList: [],
	},

	/**
	 *  2、实时监听state值的变化(最新状态)
	 */
  getters: {
    getSessionToken: (state) => state.getSessionToken,
    getFindCountry: (state) => state.getFindCountry,
    getUserContractFindCountry: (state) => state.getUserContractFindCountry,
    getUserList: (state) => state.getUserList,
    getUserFindOrganizationList: (state) => state.getUserFindOrganizationList,
	},

	/**
	 *  3、自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性，list 为要变化的形参
	 */
	actions: {
		async ActionsUserFindCountry(context, addValue) {
			let {data} = await apiWebUserFindCountry();
			// console.log(data);
			context.commit('CommitUserFindCountry', data.data);
		},
		async ActionsUserContractFindCountry(context, addValue) {
			let {data} = await apiWebUserContractFindCountry(addValue);
			// console.log(data);
			context.commit('CommitUserContractFindCountry', data.data);
		},
		async ActionsUserLists(context, addValue) {
			let {data} = await apiWebUserList(addValue);
			console.log(data);
			// context.commit('CommitUserLists', data.data);
		},
		async ActionsUserFindOrganizationList(context, addValue) {
			let {data} = await apiWebUserFindOrganizationList(addValue);
			console.log(data);
			context.commit('CommitUserFindOrganizationList', data.data);
		},
	},

	/**
	 *  4、如何变化 datalist
	 */
	mutations: {
		// 用户Token
		CommitUserSession(state, addValue) {
			state.getSessionToken = addValue;
			sessionData('set', 'StateSessionToken', addValue);
    },
		// 用户列表
		CommitUserList(state, addValue) {
			state.getUserList = addValue;
    },
		// 国家列表
		CommitUserFindCountry(state, addValue) {
			state.getFindCountry = addValue;
    },
		// 配套列表
		CommitUserContractFindCountry(state, addValue) {
			state.getUserContractFindCountry = addValue;
    },
		// 组织图列表
		CommitUserFindOrganizationList(state, addValue) {
			state.getUserFindOrganizationList = addValue;
    },
	}
};