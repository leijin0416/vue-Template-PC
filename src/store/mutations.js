import * as types from '@/store/mutation-types.js';

export default {
    [types.SET_Error_Message](state, item) {
        state.errorMessage = item;
    },
}
