import {
	setStore
} from '@/common/localUtil';

export default {
	namespaced: true,
	//1、要设置的全局访问的state对象
    state: {
        findRoleById: [],
        roleId: String,
        registerRouteFresh: false,
        
        hasUserName: String,
        hasSessionToken: String,
        navbarName: String,
        tagsData: String,
        oldvalName: String,
        cityValue: String
	},

	//2、实时监听state值的变化(最新状态)
    getters: {
        roleId: (state) => state.roleId,
        findRoleById: (state) => state.findRoleById,
        registerRouteFresh: (state) => state.registerRouteFresh, 

        hasSessionToken: (state) => state.hasSessionToken,
        hasUserName: (state) => state.hasUserName,
        navbarName: (state) => state.navbarName,
        tagsData: (state) => state.tagsData,
        oldvalName: (state) => state.oldvalName,
        cityValue: (state) => state.cityValue
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
        },
        handleUserName: (state, hasUserName) => {
            state.hasUserName = hasUserName;
            setStore('hasUserName', hasUserName);
        }, 
        // 左侧导航
        headerNavbarName: (state, navbarName) => {
            state.navbarName = navbarName;
            setStore('navbarName', navbarName);
        },
        // 存储 tags 标签数组
        headerTagsData: (state, tagsData) => {
            state.tagsData = tagsData;
            setStore('tagsData', tagsData);
        },
        // 存储 tags - 旧的 name
        headerOldvalName: (state, oldvalName) => {
            state.oldvalName = oldvalName;
            setStore('oldvalName', oldvalName);
        },
        // 等级筛选
        headerCityValues: (state, cityValue) => {
            state.cityValue = cityValue;
        },
        /**
         *  1- 用户ID
         */
		handleUserRoleId: (state, roleId) => {
            state.roleId = roleId;
            setStore('roleId', roleId);
        },
        /**
         *  2- 动态路由表
         */
        headerfindRoleById: (state, findRoleById) => {
            state.findRoleById = findRoleById;
            setStore('findRoleById', findRoleById);
        },
        headerRegisterRouteFresh: (state, registerRouteFresh) => {
            state.registerRouteFresh = registerRouteFresh;
        },

	},
};