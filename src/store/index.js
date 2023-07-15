import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '我的账户', // 文本内容
            },
            {
                text: '系统委托',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'commonBuy',
                        text: '普通买入',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'commonSale',
                        text: '普通卖出',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'revertOrder',
                        text: '撤单',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                text: '基本功能',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'buyTask',
                        text: '买入任务',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'saleTask',
                        text: '卖出任务',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'lightningTask',
                        text: '闪电交易',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                text: '高级功能',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'warningTrading',
                        text: '预警交易',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'rangeTrading',
                        text: '区间交易',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'rangeBacktest',
                        text: '区间回测',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'dailyProfit',
                        text: '天天盈',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'newstockWinner',
                        text: '新股赢家',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                text: '机构功能',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'dynamicProfitStopping',
                        text: '动态止盈',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'exponentialRiskControl',
                        text: '指数风控',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                text: '至尊功能',
                type: 'ios-paper',
                children: [
                ],
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store
