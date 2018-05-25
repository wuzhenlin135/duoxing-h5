import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/home'
            // component: resolve => require(['../app'], resolve)
        },
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['../views/home'], resolve)  ,
            meta : {
                navShow: true,
                cname: '一级页面'
            }
            // meta: {
            //     scrollToTop: true
            // }
        },
        {
            path: '/home/product/:id',
            name:'product',
            component:resolve=>require(['../views/home/product.vue'],resolve),
        },
        {
            path: '/home/ticket',
            name:'ticket',
            component:resolve=>require(['../views/home/ticket.vue'],resolve)
        },
        {
            path: '/me',
            name: 'me',
            component: resolve => require(['../views/me'], resolve)  ,
            meta : {
                navShow: true,
                cname: '一级页面'
            }
        },
        {
            path: '/order',
            name: 'order',
            component: resolve => require(['../views/order'], resolve)  ,
        },
        {
            path: '/order/payresult',
            name: 'payresult',
            component:resolve=>require(['../views/order/payResult.vue'],resolve)
        },
        {
            path: '/order/scanOrder',
            component:resolve=>require(['../views/order/scanOrder.vue'],resolve)
        },
        {
            path: '*',
            name: 'page404',
            component: resolve => require(['../views/page404.vue'], resolve)
        }

    ]
})
