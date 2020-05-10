import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages'
import { getStore } from '@/common/localUtil'

Vue.use(VueI18n);

/**
 *  中英文切换
 */
const i18n = new VueI18n({
    locale: getStore('localeCut') || 'en-US',    // 语言标识
    messages
});


export default i18n;
