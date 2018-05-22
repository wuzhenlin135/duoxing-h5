<style>

</style>
<template>
	<div>
		<HeadModule></HeadModule>
		<div class="with-header">
			<group>
				<x-input :min="2" :max="10" title="姓名:" :value="userName" placeholder="请输入您的真实姓名"></x-input>
				<x-input keyboard="number" is-type="china-mobile"  title="手机号码:" :value="userPhone" placeholder="请输入您手机号码"></x-input>
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
            	<p>¥{{count*this.price}}</p>
            </group>
		</div>
	</div>
</template>
<script>
	import HeadModule from '../../components/head.vue'
	import {Group,XInput,PopupRadio,XNumber} from 'vux'
	export default{
		components:{
			HeadModule,Group,XInput,PopupRadio,XNumber
		},
		data(){
			return{
				ticketData:{},
				userName:'',
				userPhone:'',
				date:'',
				time:'',
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
		}
	}
</script>