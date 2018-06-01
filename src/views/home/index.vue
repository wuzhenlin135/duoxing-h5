<style>
	 .home-list .weui-media-box_appmsg .weui-media-box__hd {
	 	width:100px;
	 }

</style>
<template>
  <div>
  	<div class="home-list home-context">
  	    <img src="../../assets/images/home_span.jpg" style="width:100%;">
  	    <p style="padding:.4rem;text-align:center;color:#686868;" v-html="homeText"></p>
  	    <p style="height:10px; background:#EFEEF4;"></p>
  		<Panel header="" :footer="footer" :list="list" :type="type"></Panel>
  	</div>
  </div>
</template>

<script>
	import {Panel} from 'vux'
	import { mapGetters } from 'vuex'
	import { getScenicList } from '@/api'
	export default{
		components:{
			Panel
		},
		data(){
			return {
				list:[],
				type:'1',
				footer:{

				}
			}
		},
		computed: {
			...mapGetters([
				'systemMsg'
			]),
			homeText: function () {
				return this.systemMsg.slogan + '&nbsp;&nbsp;&nbsp;&nbsp;联系电话:&nbsp;' + this.systemMsg.consumerHotline
			}
		},
		created() {
			this.fetchScenicList()
		},
		methods: {
			fetchScenicList() {
				this.$vux.loading.show({
					text: '正在加载...'
				})
				getScenicList().then(data=> {
					data.list.forEach(item => {
						this.list.push({
								url: "/home/product/"+item.id,
								src: item.icon,
								title: item.title,
								desc: item.overview
						})
					})
				}).catch(error=>{
					//nothing
					console.log('ERROR :::: ' + error)
				}).finally(() => {
					this.$vux.loading.hide()
				})
			}
		}
	}

</script>