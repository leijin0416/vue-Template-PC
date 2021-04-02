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
    path: '*',
    redirect: '/'
  }
]