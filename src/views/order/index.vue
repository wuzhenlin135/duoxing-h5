<style>
    .order-div{
        padding:.4rem;
        font-size:.8rem;
    }
    .order-line{
        margin-top:5px;
        background:#dddede;
        height:1px;

    }
    .order-div p{
        padding:.4rem;
    }
    .order-status{
        position:absolute;
        right:0;
        padding-right:.6rem;
        font-weight:bold;
    }
    .line-status{
        position:absolute;
        right:0;
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
                            <p><span>订&nbsp;单&nbsp;号</span><span style="padding-left:20%;">{{item.orderNumber}}</span>
                            <span class="order-status">{{item.statusLabel}}</span></p>
                            <p class="order-line" style="padding:0;"></p>
                            <p>景&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区
                            <span class="line-status">{{item.scenicTitle}}</span></p>
                            <p>商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;品
                            <span class="line-status">{{item.productTitle}}</span></p>
                             <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名
                             <span class="line-status">{{item.userName}}</span></p>
                             <p>人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数
                             <span class="line-status">{{item.count}}</span></p>
                             <p>联系电话<span class="line-status">{{item.userPhone}}</span></p>
                            <p>上车地点<span class="line-status">{{item.location}}</span></p>
                            <p>上车时间<span class="line-status">{{item.datetime}}</span></p>

                            <p class="order-line" style="padding:0;margin-top:10px"></p>
                            <p style="text-align:left;color:red;font-size:1.5rem;">¥&nbsp;{{item.price}}</p>
                        </div>
                        <p style="background:#f0eff5;height:20px;"></p>
                 </li>
               </ul>
            </div>
    </div>

</template>

<script>
    import HeadModule from '@/components/head.vue'
    import {XButton,Divider} from 'vux'
    import { getOrderList } from '@/api'
    export default {
        components:{
            XButton,Divider,HeadModule
        },
        data () {
            return {
                listData:[],
                shouldClearHistory:0

            }
        },
        created(){

            if(this.$route.query.clearHistory){
                this.shouldClearHistory = this.$route.query.clearHistory
            }
            this.getOrders()
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
            }
        }
    }
</script>

<style>

</style>