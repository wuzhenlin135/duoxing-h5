<template>
   <div>
       <HeadModule :goHome="this.shouldClearHistory"></HeadModule>
       <div class="with-header">
       	<div>

       	</div>
       </div>
  </div>
</template>

<script>
	import HeadModule from '@/components/head.vue'
	import {getCheckOrder} from '@/api'

	export default{
		components:{
			HeadModule
		},

		data () {
			return {
				shouldClearHistory:1,
				backImg:'',
				ticket:{},
				title:''
			}
		},

		created(){
			this.getScanOrder()
		},

		methods:{
			getScanOrder(){
				const scenicId = this.$store.getters.scenicId
				getCheckOrder(scenicId).then(jsonData=>{
					objData = jsonData.obj
					backImg = objData.fullImg
					title = objData.title
					ticket = objData.ticket
					console.log(jsonData)
				})
			}
		}
	}
</script>