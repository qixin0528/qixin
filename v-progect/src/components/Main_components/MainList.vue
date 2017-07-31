<template>
	

	<section class="main-banner-middle mainlist">
				<!--头部返回-->
		<mt-header :title="info.categoryTags">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <!--<mt-button @click="handleClose">关闭</mt-button>-->
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		
		<div id="">
			<h4></h4>
		</div>
		
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="img in info.imgs" :key="img">
	            	<img :src="img" alt="" />
	            </div>
	        </div>
	        <div class="swiper-pagination"></div>
	     
    	</div>
    	
    	<div id="box-box">

			<h4 v-text="info.pdt_name"></h4>
			<p v-text="info.product_second_name"></p>
			<span id="box-a">
				￥
				<h3 v-text="info.sale_price"></h3>
			</span>
			
    		<span id="box-b">
    			库存：<p v-text="info.inventory"></p>
    		</span>
    		<ul>
				<li class="classLi">详情</li>
				<li>参数</li>
				<li>服务</li>
				<li>评价</li>
			</ul>
    		<div v-html="inf" class="img_box"></div>
    	</div>
		
		<div>
			
		</div>
	   	
	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		name:'MainList',
		data:function(){
			return {
				info:{},
				goodId:'',
				swiper:null,
				inf:{}
			}
		},
		
		methods:{
			getData(){
				var that = this;
				axios.get('https://m-api-longguo.mmall.com/goods/get/' + this.goodId + '?mid=a_1500703422495_05c46d5703b2c6b&openId=',{
					  params:{
					  
					  }
					})
					.then(function(response){
						that.info = response.data.dataMap;
						that.inf = response.data.dataMap.productTextVo.productHtml
//						console.log(that.info)
//						console.log(that.inf)
//						console.log(response.data)
					})
					.catch(function(err){
					  console.log(err);
					});
			}

		},
		beforeMount(){
			this.goodId = this.$route.params.goodId;
			this.getData();
		},
		mounted(){
			this.swiper = new Swiper('.swiper-container',{
//				slidesPerView: 5,
				loop:true,
				pagination: '.swiper-pagination',
        		paginationClickable: false,
        		autoplay:1500
			});
		},
		updated(){
			this.swiper.update();
			
		}
	}
	
	
</script>

<style scoped lang="scss">
	.mint-header .mint-button{
		color: #000000;
	}
	.mint-header{
		color: #000;
		background: #fff;
	}

	.img_box p img{
		width: 100%;
	}
	
	.swiper-slide{
		img{
			width: 100%;
		}
	}
	#box-box{
		padding-top: 0.1rem;
		#box-b{
			display: flex;
			justify-content: flex-end;
			margin-right: 0.1rem;
			color: #666;
			font-size: 12px;
		}
		#box-a{
			display: flex;
			justify-content: flex-start;
			line-height: 0.5rem;
			
		}
		ul{
			margin-top: 0.2rem;
			display: flex;
			justify-content: space-around;
			li{
				font-size: 12px;
				width: 100%;
				height: 0.2rem;
				text-align: center;
				line-height: 0.2rem;
			}
		}
	}
	.classLi{
		color: #0000FF;
	}
</style>