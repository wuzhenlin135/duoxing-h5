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
		<x-header :left-options="leftoption"></x-header>
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
					backText:"返回"
				}

			}
		},
		props:{
			 title: String,
     		 showback: Boolean,
		}
	}
</script>