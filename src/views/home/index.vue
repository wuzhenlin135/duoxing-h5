<style>
	 .home-list .weui-media-box_appmsg .weui-media-box__hd {
	 	width:100px;
	 }
</style>
<template>
  <div>
  	<div class="home-list home-context">
  		<Panel header="" :footer="footer" :list="list" :type="type"></Panel>
  	</div>
  </div>
</template>

<script>
	import {Panel} from 'vux'
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
		created(){
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