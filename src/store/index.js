import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

import common from './Common';

Vue.use(Vuex);

let modules = {
  ...common,
};

export default new Vuex.Store({
  state: {
    errorMessage: '1',
  },
  modules,
  actions,    // 根级别的 action
  mutations,  // 根级别的 mutations
  getters: {  // 根级别的 getters
    getErrorMessage(state) {
      return state.errorMessage
    }
  }
})
