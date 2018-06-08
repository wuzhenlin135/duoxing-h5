<style>
.me-head{
	padding:.8rem;
}
.me-head img{
	width:80px;
	border-radius:80px;
	padding-left:.5rem;
}
</style>
<template>
  <div>

  	 <div class="me-head">
  	 	<img :src="avatar">
  	 	<span style="margin-left:.4rem;font-size:1.2rem;">{{nickName}}</span>
  	 </div>

  	 <group>
  	 	<cell is-link link="/order" title="我的订单"></cell>
  	 </group>
  	 <group>
  	 	<cell is-link title="联系客服" @click.native="callPhone"></cell>
  	 </group>
  	 <div>
  	 </div>
  </div>
</template>

<script>
	import {Group,Cell,XDialog} from 'vux'
	import {mapGetters} from 'vuex'

	export default {

		components: {
			Group, Cell, XDialog
		},

		data() {
			return {
			}
		},

		computed: {
			...mapGetters([
				'systemMsg',
				'name',
				'nickName',
				'avatar'
			])
		},

		methods:{
			callPhone() {
				if (!this.systemMsg.consumerHotline) {
					this.$vux.toast.show({text: "客服电话不可用"})
					return
				}
				window.location.href = "tel:" + this.systemMsg.consumerHotline
			}
		}
	}
</script>