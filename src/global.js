import Vue from 'vue'
import * as filters from './filters' // global filters

// 全局引入vux提供的插件
import {LoadingPlugin ,AlertPlugin, ToastPlugin} from 'vux'
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin, {type: 'text'})

// 表单验证插件，不需要请注释掉
import verify from "vue-verify-plugin";
var myRules = {
    phone: {
        test: /^1[34578]\d{9}$/,
        message: "电话号码格式不正确"
    }
}
Vue.use(verify, {
    blur: true,// 是否失去焦点后开始验证
    rules: myRules
});

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
