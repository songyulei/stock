import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/other', // 点击侧边栏跳到一个单独的路由页面，需要定义，层级和其他顶级路由一样
        name: 'other',
        meta: { title: '单独的路由' },
        component: () => import('../views/Other.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '我的账户' },
        component: () => import('../views/Home.vue'),
    },
    commonBuy: {
        path: 'commonBuy',
        name: 'commonBuy',
        meta: { title: '普通买入' },
        component: () => import('../views/commonBuy.vue'),
    },
    commonSale: {
        path: 'commonSale',
        name: 'commonSale',
        meta: { title: '普通卖出' },
        component: () => import('../views/commonSale.vue'),
    },
    revertOrder: {
        path: 'revertOrder',
        name: 'revertOrder',
        meta: { title: '撤单' },
        component: () => import('../views/T1.vue'),
    },
    buyTask: {
        path: 'buyTask',
        name: 'buyTask',
        meta: { title: '买入任务' },
        component: () => import('../views/buyTask.vue'),
    },
    saleTask: {
        path: 'saleTask',
        name: 'saleTask',
        meta: { title: '卖出任务' },
        component: () => import('../views/T1.vue'),
    },
    lightningTask: {
        path: 'lightningTask',
        name: 'lightningTask',
        meta: { title: '闪电交易' },
        component: () => import('../views/T1.vue'),
    },
    warningTrading: {
        path: 'warningTrading',
        name: 'warningTrading',
        meta: { title: '预警交易' },
        component: () => import('../views/T1.vue'),
    },
    rangeTrading: {
        path: 'rangeTrading',
        name: 'rangeTrading',
        meta: { title: '区间交易' },
        component: () => import('../views/T1.vue'),
    },
    rangeBacktest: {
        path: 'rangeBacktest',
        name: 'rangeBacktest',
        meta: { title: '区间回测' },
        component: () => import('../views/T1.vue'),
    },
    dailyProfit: {
        path: 'dailyProfit',
        name: 'dailyProfit',
        meta: { title: '天天盈' },
        component: () => import('../views/T1.vue'),
    },
    newstockWinner: {
        path: 'newstockWinner',
        name: 'newstockWinner',
        meta: { title: '新股赢家' },
        component: () => import('../views/T1.vue'),
    },
    dynamicProfitStopping: {
        path: 'dynamicProfitStopping',
        name: 'dynamicProfitStopping',
        meta: { title: '动态止盈' },
        component: () => import('../views/T1.vue'),
    },
    exponentialRiskControl: {
        path: 'exponentialRiskControl',
        name: 'exponentialRiskControl',
        meta: { title: '指数风控' },
        component: () => import('../views/T1.vue'),
    },
    password: {
        path: 'password',
        name: 'password',
        meta: { title: '修改密码' },
        component: () => import('../views/Password.vue'),
    },
    msg: {
        path: 'msg',
        name: 'msg',
        meta: { title: '通知消息' },
        component: () => import('../views/Msg.vue'),
    },
    userinfo: {
        path: 'userinfo',
        name: 'userinfo',
        meta: { title: '用户信息' },
        component: () => import('../views/UserInfo.vue'),
    },
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
