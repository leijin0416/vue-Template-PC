import * as types from '@/store/mutation-types.js';

export default {
  // 处理 axios 错误
	changeErrorMessage({commit}, info) {
    let errorMessage = info;
		commit(types.SET_Error_Message, errorMessage);
    // console.log(info);
  },
}
