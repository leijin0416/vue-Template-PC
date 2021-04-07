/**
 * 请求统一管理
 */
import Request from '@/common/axios/http';

/**
 * 登录
 * @param {*} params 
 */
export const apiWebUserLogin = params => Request.post('/admin/api/midoto-user/login', params)
// 注册
export const apiWebUserRegister = params => Request.post('/admin/api/midoto-user/register', params)
// 国家列表
export const apiWebUserFindCountry = params => Request.post('/admin/api/midoto-country/admin/findCountry', params)
// 国家列表
export const apiWebUserContractFindCountry = params => Request.post('/admin/api/midoto-contract/admin/findContract', params)
// 安置人检测
export const apiWebUserCheckParent = params => Request.post('/admin/api/midoto-user/checkParent', params)

// 用户列表
export const apiWebUserList = params => Request.post('/admin/api/midoto-user/user/list', params)
// 组织图列表
export const apiWebUserFindOrganizationList = params => Request.post('/admin/api/midoto-user/findOrganization', params)
// 默认组织图列表
export const apiWebUserGoOrganizationList = params => Request.post('/admin/api/midoto-user/goOrganization', params)


// 修改安全密码
export const apiWebUserUpdateSecurityPassword = params => Request.post('/admin/api/midoto-user/update/SecurityPassword', params)
// 修改登录密码
export const apiWebUserUpdateLoginPassword = params => Request.post('/admin/api/midoto-user/update/loginPassword', params)