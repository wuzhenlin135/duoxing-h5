<style>
    .order-div{
        padding:.4rem;
        font-size:.8rem;
    }
    .order-line{
        margin-top:5px;
        background:#dddddd;
        height:1px;
    }
    .status-line{
        line-height: 28px;
        color: #666;
        font-size: 15px;
    }

    .order-status{
        position:absolute;
        right:0;
        padding-right:.6rem;
        font-weight:bold;
    }
    .line {
        line-height: 24px;
        color: #666;
        font-size: 14px;

    }
    .line-text{
        position:absolute;
        right:0;
        color: #999;
        font-size: 12px;
        padding-right:.6rem;
    }

</style>
<template>

<div>
    <HeadModule :goHome="this.shouldClearHistory"></HeadModule>
    <div class="with-header">
        <p style="height:10px;background:#f0eff5;"></p>
        <ul>
            <li v-for="(item,index) in listData" :key="index">
                <div class="order-div">
                    <p class="status-line">
                        <span>订&nbsp;单&nbsp;号&nbsp;：</span>
                        <span style="margin-left: 1px">{{item.orderNumber}}</span>
                        <!-- :style="color:`${item.status | statusColorFilter}`" -->
                        <span class="order-status" :style="{color:statusColorFilter(item.status)}">{{item.statusLabel}}</span>
                    </p>
                    <p class="order-line" style="padding:0;margin-bottom:10px"></p>
                    <p class="line">
                        景&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区
                        <span class="line-text">{{item.scenicTitle}}</span>
                    </p>
                    <p class="line">
                        商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;品
                        <span class="line-text">{{item.productTitle}}</span>
                    </p>
                    <p class="line">
                        姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名
                        <span class="line-text">{{item.userName}}</span>
                    </p>
                    <p class="line">
                        人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数
                        <span class="line-text">{{item.count}}</span>
                    </p>
                    <p class="line">
                        联系电话
                        <span class="line-text">{{item.userPhone}}</span>
                    </p>
                    <p class="line">
                        上车地点
                        <span class="line-text">{{item.location}}</span>
                    </p>
                    <p class="line">
                        上车时间
                        <span class="line-text">{{item.datetime}}</span>
                    </p>
                    <p class="order-line" style="padding:0;margin-top:10px"></p>
                    <p style="position:relative;text-align:left;color:red;font-size:1.6rem;">
                        ¥&nbsp;{{item.price}}
                        <span style="text-align:right;font-size:12px;position:absolute;right:.6rem;bottom:0;color: #999;">
                            支付时间：{{item.transtime | parseTime('{y}-{m}-{d} {h}:{i}:{s}')}}
                        </span>
                    </p>
                </div>
                <p style="background:#f0eff5;height:10px;"></p>
            </li>
        </ul>
    </div>
</div>

</template>

<script>
    import HeadModule from '@/components/head.vue'
    import {XButton,Divider} from 'vux'
    import { getOrderList } from '@/api'
    import { parseTime } from '@/utils'
    export default {
        components:{
            XButton,Divider,HeadModule
        },
        data () {
            return {
                listData: [],
                shouldClearHistory: 0
            }
        },
        created() {

            if(this.$route.query.clearHistory){
                this.shouldClearHistory = this.$route.query.clearHistory
            }
            this.getOrders()
        },
        filters: {

        },
        methods: {
            getOrders() {
                this.$vux.loading.show({
					text: '正在加载...'
				})
				getOrderList().then(data=> {
                    this.$vux.loading.hide()
					this.listData = data.list
				}).catch(error=>{
                    this.$vux.loading.hide()
					//nothing
				})
            },
            statusColorFilter(status) {
                const statusMap = {
                    0: '#909399',
                    1: '#e6a23c',
                    2: '#409eff',
                    3: '#f56c6c',
                    4: '#67c23a'
                }
                return statusMap[status]
            }
        }
    }
</script>

<style>

</style>