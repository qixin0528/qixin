<template>

	<section class="main-banner-middle mainsblist">
		<!--头部返回-->
		<mt-header :title="info.categoryTags">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <!--<mt-button @click="handleClose">关闭</mt-button>-->
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div v-html="inf" class="img_box"></div>
		<span id="box-span">/////////////////////</span>
		<div id="box-list">	

			<div v-for="a in info.goodList" :key="a.id">
				<div id="box-list-one">
				<img :src="a.cover" alt="" />
				</div>
				<div id="box-list-two">
					<p v-text="a.goodName"></p>		
					<p v-text="a.recommendWord"></p>		
					<span v-text="a.price"></span>
				</div>	
			</div>
				
			
				
		</div>
		

	   	
	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		name:'MainSBList',
		data:function(){
			return {
				info:{},
				id:'',
				inf:{}
			}
		},
		methods:{
			getData(){
				var that = this;
				console.log(this.id)
				axios.get('https://cms.mmall.com/cms-web/home/life/detail/'+this.id
				,{

					  params:{
					  
					  }
					})
					.then(function(response){
						that.info = response.data.dataMap;
						that.inf = response.data.dataMap.description
//						console.log(that.info)
					})
					.catch(function(err){
					  console.log(err);
					});
			}
				
		},
		beforeMount(){
			this.id = this.$route.params.id;
			this.getData();
		},
		mounted(){
		
		},
		updated(){

		}
	}
	
	
</script>

<style lang="scss">
	.mint-header .mint-button{
		color: #000000;
	}
	.mint-header{
		color: #000;
		background: #fff;
	}
	img{
		width: 100%;
	}
	#box-span{
		display: block;
		width: 100%;
		text-align: center;
		margin: 0.2rem 0;
		font-size: 10px;
	}
	#box-list{
		div{
			display:flex;
			width: 100%;
			#box-list-one{
				height: 1rem;
				margin: 0.1rem 0.1rem;
				width: 1.6rem;
				img{
					width: 100%;
				}
			}
			#box-list-two{
				display: flex;
				flex-direction:column;
				font-size: 12px;
				margin: 0.1rem 0;
				justify-content:space-between
				
			}
		}
	}
	
</style>