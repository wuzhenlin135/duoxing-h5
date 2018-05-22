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
			this.$vux.toast.show("xxx")
			console.log("created")
			this.getScenicList()
		},
		methods:{
			getScenicList(){
				let successCallback=(response)=>{
					const jsondata = response.data
					if(jsondata.res == 0){
						if(jsondata.list){
							jsondata.list.forEach(function(t){
								var item = {
									url:"/home/product/"+t.id,
									src:t.icon,
									title:t.title,
									desc:t.overview
								}
								this.list.push(item)
								this.list.push(item)
								this.list.push(item)
								this.list.push(item)
								this.list.push(item)
								this.list.push(item)
							},this)
						}
					}
				}
				this.$axios.get('/app/scenic-list?access-token=111111').then(successCallback,errorCallback)
			}

		},
	}

</script>