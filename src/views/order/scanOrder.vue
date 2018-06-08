<template>
		<div class="full-bg" style="position: relative;">
			<img class="full-bg-img" :style="{backgroundImage:`url(${backImg})`}"/>
			<div style="position: absolute; top: 0; width: 100%;">
				<h2 class="jq-title">{{title}} </h2>
			</div>
			<div class="ticket" v-if="hasTicket">
				<div>
					<div class="ticket-number">
						<p>订单号</p>
						<p>{{ticket.orderNumber}}</p>
					</div>
					<div class="ticket-count">
						<p>预到人数：{{ticket.count}}</p>
						<p style="margin-top: 5px;">实到人数：{{ticket.count}}</p>
					</div>
					<div class="ticket-status">已检验</div>
				</div>
			</div>
			<a href="/" class="return-home">返回首页</a>
		</div>
</template>

<style>
html, body, #app, .full-bg {
    height:100%;
    margin:0px;
    padding:0px;
}
.full-bg-img {
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
}
.jq-title {
	text-align: center;
	background-color: rgba(49, 68, 68, 0.5);
	font-size: 16px;
	color: #ffffff;
}
.ticket{
	text-align: center;
	background-color: rgba(22, 31, 31, 0.5);
	border-radius: 10px;
	width: 210px;
	height: 250px;
	color: #ffffff;
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.ticket .ticket-number {
	font-size: 12px;
	position: absolute;
	left: 0;
	right: 0;
	top: 15px;
}
.ticket .ticket-count {
	font-size: 16px;
	position: absolute;
	left: 0;
	right: 0;
	top: 100px;
}
.ticket .ticket-status {
	font-size: 18px;
	position: absolute;
	font-weight: bold;
	color: #67c23a;
	bottom: 15px;
	left: 0;
	right: 0;
}
.return-home{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 100px;
	margin: auto;
	width: 110px;
	height: 36px;
	background-color: rgba(49, 68, 68, 0.8);
	border-radius: 100px;
	text-align: center;
	color: #e6a23c;
	font-size: 14px;
	line-height: 36px;
	cursor: pointer;
	animation-name: slideUp;
	animation-duration: 0.5s;
	animation-delay: 0.3s;
	animation-fill-mode: forwards;
}
</style>

<script>
	import { getCheckOrder } from '@/api'
	import { mapGetters } from 'vuex'

	export default{
		components: {
		},
		data () {
			return {
				shouldClearHistory:1,
				backImg: '',
				title: '',
				ticket: undefined
			}
		},
		computed: {
			...mapGetters([
				'scenicId'
			]),
			hasTicket: function () {
				return typeof (this.ticket) === 'object' && this.ticket.hasOwnProperty('orderNumber')
			}
		},
		created() {
			this.getScanOrder()
		},
		methods: {
			getScanOrder() {

				if(!this.scenicId) {
					this.$vux.toast.show({text: '请返回主页'})
					return
				}

				getCheckOrder(this.scenicId).then(jsonData => {
					this.backImg = jsonData.obj.fullImg
					this.title = jsonData.obj.title
					this.ticket = jsonData.obj.ticket
					console.log(jsonData)
				})

			}
		}
	}
</script>