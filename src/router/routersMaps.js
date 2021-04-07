/**
 * getComponentMin() 路由懒加载
 * @param {*} name  -文件夹
 * @param {*} component  -.vue
 */
const getComponentMin = (name, component) => () =>
  import(`@/views/${name}/${component}.vue`);
/** 
 * getComponentMAx() 路由懒加载
 * @param {*} name  -文件夹
 * @param {*} component  -.vue
 */
const getComponentMAx = (name, component) => () =>
  import(`@/views/htmls/${name}/${component}.vue`);

export const constantRouterMaps = [
  {
    path: '/',
    name: 'index',
    component: getComponentMin('htmls', 'index'),
    meta: { title: '黄金制度', displayNavBar: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: getComponentMin('Passport', 'login'),
    meta: { title: '登录', displayNavBar: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: getComponentMin('Passport', 'register'),
    meta: { title: '新注册', displayNavBar: true }
  },
  {
    path: '/user/list',
    name: 'userList',
    component: getComponentMin('User', 'userList'),
    meta: { title: '用户列表', displayNavBar: true }
  },
  {
    path: '/user/recommend',
    name: 'userRecommend',
    component: getComponentMin('User', 'recommend'),
    meta: { title: '推广图', displayNavBar: true }
  },
  {
    path: '/user/exchange',
    name: 'userExchange',
    component: getComponentMin('User', 'exchange'),
    meta: { title: '兑换钱包', displayNavBar: true }
  },
  {
    path: '/user/password',
    name: 'userPassword',
    component: getComponentMin('Passport', 'password'),
    meta: { title: '用户档案', displayNavBar: true }
  },
  {
    path: '/record/history',
    name: 'recordHistory',
    component: getComponentMin('Record', 'historyList'),
    meta: { title: '历史记录', displayNavBar: true }
  },
  {
    path: '/record/bonus',
    name: 'recordBonus',
    component: getComponentMin('Record', 'bonusList'),
    meta: { title: '级差奖金记录', displayNavBar: true }
  },
  {
    path: '/record/straight',
    name: 'recordStraight',
    component: getComponentMin('Record', 'straightList'),
    meta: { title: '直推奖记录', displayNavBar: true }
  },
  {
    path: '/switch/mutual',
    name: 'switchMutual',
    component: getComponentMin('Switch', 'mutual'),
    meta: { title: '转账', displayNavBar: true }
  },
  {
    path: '/switch/wallet',
    name: 'switchWallet',
    component: getComponentMin('Switch', 'wallet'),
    meta: { title: '转账', displayNavBar: true }
  },
  {
    path: '*',
    redirect: '/'
  }
]