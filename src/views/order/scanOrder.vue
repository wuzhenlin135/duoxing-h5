<template>
  <div>
   	Hello
  </div>
</template>

<script>
	import {getCheckOrder} from '@/api'

	export default{
		components:{

		},
		created(){
			this.getScanOrder()
		},
		methods:{
			getScanOrder(){
				const scenicId = this.$store.getters.scenicId
				getCheckOrder(scenicId).then(jsonData=>{
					console.log(jsonData)
				})
			}
		}
	}
</script>