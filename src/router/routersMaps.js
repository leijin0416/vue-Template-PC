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
        meta: { title: 'Green Planet' }
    },
    {
        path: '/index',
        name: 'index',
        component: getComponentMin('htmls', 'index'),
        meta: { title: 'Green Planet' }
    },
    {
        path: '*',
        redirect: '/'
    }
]