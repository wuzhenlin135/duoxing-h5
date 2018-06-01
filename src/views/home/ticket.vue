<style>
	.ticket-confirm{
		position:relative;
		padding:.4rem;
		padding-left:45%;
	//	background:#a0a0a0;
	}
	.ticket-confirm .price{
		font-size:1.5rem;
		color:red;
	}
	.ticket-confirm .conButton{
		position:absolute;
		right:0;
		top:.5rem;
		padding-right:1rem;
	}
</style>
<template>
	<div>
		<HeadModule></HeadModule>
		<div class="with-header">
			<group>
				<x-input :min="2" :max="10" title="姓名:  " v-model="userName" placeholder="请输入您的真实姓名"></x-input>
				<x-input keyboard="number" is-type="china-mobile"  title="手机号码:" v-model="userPhone" placeholder="请输入您手机号码"></x-input>
			</group>
			<group>
				<popup-radio title="上车日期" :options="extDates" v-model="date" @on-hide="changeData()"></popup-radio>
				<popup-radio title="上车时间" :options="extTimes" v-model="time"></popup-radio>
				<popup-radio title="上车地点" :options="extLoctions" v-model="location"></popup-radio>
			</group>
			<group>
				<x-number title="人数" v-model="count" :min="1"></x-number>
			</group>
            <group>
               <div class="ticket-confirm">
            		<p><span style="font-size:1.2rem;">合计: </span><span class="price">¥{{count*this.price}}</span></p>
            		<div class="conButton">
            			<x-button type="primary" @click.native="submitOrder()" mini>确认</x-button>
            		</div>
               </div>
            </group>
		</div>
	</div>
</template>
<script>
	import HeadModule from '@/components/head.vue'
	import {submit} from '@/api'
	import {Group,XInput,PopupRadio,XNumber,XButton} from 'vux'

	export default{
		components:{
			HeadModule,Group,XInput,PopupRadio,XNumber,XButton
		},
		data(){
			return{
				ticketData:{},
				userName:'',
				userPhone:'',
				date:'',
				time:'',
				productId:0,
				location:'',
				count:1,
				extDates:[],
				extTimes:[],
				extLoctions:[],
				extDatetime:[],
				price:0,
			}
		},
		created(){
			this.ticketData = this.$route.query.tickData
			this.getData()

		},
		methods:{
			getData(){

				this.extLoctions = this.ticketData.extLoctions
				this.extDatetime = this.ticketData.extDatetime
				this.price = this.ticketData.price
				this.productId = this.ticketData.id
				if(this.extDatetime){
					for(var key in this.extDatetime){
						console.log(key)
						this.extDates.push(key)
					}
				}
				this.date = this.extDates[0]
				this.extTimes = this.extDatetime[this.date]
				this.time = this.extDatetime[this.date][0]
				this.location = this.extLoctions[0]
			},

			changeData(){
				this.extTimes = this.extDatetime[this.date]
				this.time = this.extDatetime[this.date][0]
			},
			submitOrder(){				
				if(!this.userName){
					this.$vux.toast.show({text:"姓名不能为空"})
					return
				}
				if(!this.userPhone){
					this.$vux.toast.show({text:"手机号码不能为空"})
					return
				}
				if(!this.date){
					this.$vux.toast.show({text:"上车日期不能为空"})
					return
				}
				if(!this.time){
					this.$vux.toast.show({text:"山车时间不能为空"})
					return
				}
				if(!this.location){
					this.$vux.toast.show({text:"上车地点不能为空"})
				}				
				submit(this.productId,this.count,this.count*this.price,this.userName,this.userPhone,this.location,this.date,this.time).
				then((jsondata)=>{	
				this.$router.push({path:'/order/payresult'})
				/**				
					console.log("jsondata  : " + jsondata.obj.jsApiConfig);
               		 WeixinJSBridge.invoke('getBrandWCPayRequest', jsondata.obj.jsApiConfig,                   
                	  function(res) {
                 		   console.log("getBrandWCPayRequest : " + res.err_msg);
                    			if(res.err_msg == "get_brand_wcpay_request:ok" ) {                      
                     	this.$router.push({path:'/order/payresult'})
                      
                    } else {
                      this.$vux.alert.show({
                        title: '错误',
                        content: res.err_desc})
                    }
                  }
                )
                **/
				})
			}
		}
	}
</script>