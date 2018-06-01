<style>
	.ui-head-bar{
		text-align:center;
		position:fixed;
		width:100%;
		top:0;
		z-index:99;
	}
</style>
<template>
	<div class="ui-head-bar">
		<x-header :left-options="leftoption" @on-click-back="handleBack"></x-header>
	</div>
</template>
<script>
	import {XHeader} from 'vux'
	export default{
		components:{
			XHeader
		},
		data(){
			return{
				leftoption:{
					showBack:true,
					backText:"返回",
					preventGoBack:true
				}

			}
		},
		props:{
			 title: String,
     		 showback: Boolean,
     		 goHome:{
     		 	type:Number,
     		 	default:0
     		 }
		},
		methods:{
			handleBack(){				
				if(this.goHome != 1){
					this.$router.go(-1)
				}else{					
					this.$router.push({path:'/home'})
				}
			}
		}
	}
</script>