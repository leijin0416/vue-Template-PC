import { sessionData } from '@/filters/storage';
import { apiWebUserFindCountry, apiWebUserContractFindCountry, apiWebUserList, apiWebUserFindOrganizationList, apiWebUserGoOrganizationList } from "@/api/index";

export default {
	namespaced: true,
	/**
	 *  1、要设置的全局访问的state对象
	 */
  state: {
    getSessionToken: '',
    getUserInfoSession: {},
		getFindCountry: [],
		getUserContractFindCountry: [],
		getUserInfoTableList: [],
		getUserFindOrganizationList: [],
		getUserGoOrganizationList: {},
		getUserAssetsSession: {},
	},

	/**
	 *  2、实时监听state值的变化(最新状态)
	 */
  getters: {
    getSessionToken: (state) => state.getSessionToken,
    getUserInfoSession: (state) => state.getUserInfoSession,
    getFindCountry: (state) => state.getFindCountry,
    getUserContractFindCountry: (state) => state.getUserContractFindCountry,
    getUserInfoTableList: (state) => state.getUserInfoTableList,
    getUserFindOrganizationList: (state) => state.getUserFindOrganizationList,
		getUserGoOrganizationList: (state) => state.getUserGoOrganizationList,
		getUserAssetsSession: (state) => state.getUserAssetsSession,
	},

	/**
	 *  3、自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性，list 为要变化的形参
	 */
	actions: {
		ActionsUserInfoSession(context, addValue) {
			context.commit('CommitUserInfoSession', addValue);
		},
		ActionsUserAssetsSession(context, addValue) {
			context.commit('CommitUserAssetsSession', addValue);
		},
		async ActionsUserFindCountry(context, addValue) {
			let {data} = await apiWebUserFindCountry();
			context.commit('CommitUserFindCountry', data.data);
		},
		async ActionsUserContractFindCountry(context, addValue) {
			let {data} = await apiWebUserContractFindCountry(addValue);
			// console.log(data);
			context.commit('CommitUserContractFindCountry', data.data);
		},
		async ActionsUserInfoTableList(context, addValue) {
			let {data} = await apiWebUserList(addValue);
			// console.log(data);
			context.commit('ActionsUserInfoTableList', data.data);
		},
		async ActionsUserFindOrganizationList(context, addValue) {
			let {data} = await apiWebUserFindOrganizationList(addValue);
			// console.log(data);
			context.commit('CommitUserFindOrganizationList', data.data);
		},
		async ActionsUserGoOrganizationList(context, addValue) {
			let {data} = await apiWebUserGoOrganizationList(addValue);
			// console.log(data);
			context.commit('CommitUserGoOrganizationList', data.data);
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
		// 用户钱包信息
		CommitUserAssetsSession(state, addValue) {
			state.getUserAssetsSession = addValue;
			sessionData('set', 'StateUserAssetsSession', addValue);
    },
		// 用户详细信息
		CommitUserInfoSession(state, addValue) {
			state.getUserInfoSession = addValue;
			sessionData('set', 'StateUserInfoSession', addValue);
    },
		// 用户列表
		ActionsUserInfoTableList(state, addValue) {
			state.getUserInfoTableList = addValue;
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
		// 默认组织图列表
		CommitUserGoOrganizationList(state, addValue) {
			state.getUserGoOrganizationList = addValue;
    },
	}
};