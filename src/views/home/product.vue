<style>
	.detail-des{
		font-size:.25rem;
		padding-left:.75rem;
		padding-right:.75rem;
		margin-bottom:.15rem;
		margin-top:.1rem;
	}
	 .detail-intro{
	  text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
  }
  .detail-list-left{
  	float:left;
  	width:30%;
  	padding-left:.8rem;
  	padding-bottom:.2rem;
  	clear:both;
  }
  .detail-list-left img{
  	width:100px;
  	height:60px;
  }
  .detail-list-right{
  	position:relative;
  	float:left;
  	width:50%;
  }
  .detail-list-right .head{
  	position:absolute;
  	top:.2rem;
  	text-align:center;
  }
  .detail-list-right .tail{
  	position:absolute;
  	top:2rem;
  	text-align:center;
  }
</style>
<template>
  <div style="padding-bottom:20px">
  <HeadModule></HeadModule>
	<div class="with-header">
		<swiper :list="imgList" direction="horizontal" :show-desc-mask=false auto loop></swiper>
		<group>
			<cell is-link :border-intent="false"
			:arrow-direction="showDes? 'up' :'down'"
			@click.native="showDes = !showDes"
			:title="title"
			></cell>
		</group>
		<p v-if="!showDes" class="detail-des detail-intro" v-html="desc"></p>
		<p v-if="showDes" class="detail-des" v-html="desc"></p>
		<div>
			<group>
				<cell title="景点列表"></cell>
			</group>
			<div style="margin-top:.4rem;">
				<ul>
					<li v-for="(item,index) in detailList" :key="index">
						<div class="detail-list-left">
								<img :src="item.icon">
						</div>
						<div class="detail-list-right">
							<p class="head">{{item.title}}</p>
							<p class="tail"><span style="color:#ff7846;">¥{{item.price}}</span></p>
						</div>
						<div style="float:right;width:20%;">
							<div style="margin-left:.4rem;padding-top:1.5rem;">
								<x-button @click.native="gotoTicketPage(item)" type="primary" mini>购买</x-button>
							</div>
						</div>
						<div style="clear:borth;"></div>
						</li>
				</ul>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
	import HeadModule from '@/components/head.vue'
	import {Swiper,SwiperItem,Group,Cell,XButton} from 'vux'
	import { getScenicDetail} from '@/api'
	export default{
		components:{
			HeadModule,Swiper,SwiperItem,Group,Cell,XButton
		},
		created(){
			this.scenicId = this.$route.params.id
			this.fetchScenicDetail()
		},
		data(){
			return{
				scenicId:1,
				detailList:[],
				imgList:[],
				desc:"",
				title:"",
				showDes:false
			}
		},
		methods: {
			fetchScenicDetail() {
				this.$vux.loading.show({
					text: '正在加载...'
				})
				getScenicDetail(this.scenicId).then(data=> {
					this.$vux.loading.hide()
					this.detailList = data.list
					this.desc = data.obj.desc
					this.title = data.obj.title + '介绍'
					if (data.obj.images) {
						data.obj.images.forEach(imgData => {
							var item = {
								url:'javascript:',
								title:'',
								img:imgData
						}
						this.imgList.push(item)
						}, this)
					}
				}).catch(error=>{
					this.$vux.loading.hide()
					//nothing
				})
			},
			gotoTicketPage(itemData){
				console.log('ticket')
				this.$router.push({path:'/home/ticket',query: {tickData:itemData}})
			}
		}
	}
</script>