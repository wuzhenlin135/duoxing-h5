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
    }
</style>
<template>

      <div>
        <HeadModule></HeadModule>
            <div class="with-header">
               <ul>
                  <li v-for="(item,index) in listData" :key="index">
                       <div class="order-div">
                            <p><span>订单号:{{item.orderNumber}}</span>
                            <span class="order-status">{{item.statusLabel}}</span></p>
                            <p class="order-line" style="padding:0;"></p>
                            <p>景区&nbsp:&nbsp{{item.scenicTitle}}</p>
                            <p>商品&nbsp:&nbsp{{item.productTitle}}</p>
                            <p>上车地点&nbsp:&nbsp{{item.location}}</p>
                            <p>上车时间&nbsp:&nbsp{{item.datetime}}</p>
                            <p>人数&nbsp:&nbsp{{item.count}}</p>
                            <p>姓名&nbsp:&nbsp{{item.userName}}</p>
                            <p>联系电话&nbsp:&nbsp{{item.userPhone}}</p>
                            <p class="order-line" style="padding:0;margin-top:10px"></p>
                            <p style="text-align:left;color:red;font-size:1.5rem;">¥&nbsp{{item.price}}</p>
                        </div>
                        <p style="background:#e6e6e6;height:20px;"></p>
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
                listData:[]

            }
        },
        created(){
            this.getOrders()
        },
        methods: {
            getOrders() {
                this.$vux.loading.show({
					text: '正在加载...'
				})
				getOrderList().then(data=> {
					this.listData = data.list
				}).catch(error=>{
					//nothing
				}).finally(() => {
					this.$vux.loading.hide()
                })
            }
        }
    }
</script>

<style>

</style>