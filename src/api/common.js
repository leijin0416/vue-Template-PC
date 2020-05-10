/**
 * 请求统一管理
 */
import Request from '@/common/api/http';

/**
 * 短信验证码
 * @param {*} params 
 */
export const ajWebGetSendCode = params => Request.post('/api/wellet/app/sendcode', params)