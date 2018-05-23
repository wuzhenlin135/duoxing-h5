<style>
.me-head{
	padding:.8rem;		
}
.me-head img{
	width:100px;
	border-radius:100px;
	padding-left:.5rem;
}
</style>
<template>
  <div>	
  	 <div class="me-head">
  	 	<img src="../../assets/images/mehead.png">
  	 	<span style="margin-left:.4rem;font-size:1.2rem;">小饭</span>
  	 </div>
  	 <group>
  	 	<cell is-link link="/order" title="我的订单"></cell>
  	 </group>
  	 <group>
  	 	<cell title="联系客服"></cell>
  	 </group>
  	 <div>
  	 	<x-dialog v-model="show">

  	 	</x-dialog>
  	 </div>
  </div>
</template>

<script>
	import {Group,Cell,XDialog} from 'vux'

	export default {
		components:{
			Group,Cell,XDialog
		},
		methods:{

		},
		data(){
			return{
				telephone:"13823781001",
				show:false
			}
		}
	}
</script>