<template>

	<section class="main-banner-middle mainlist">
		<!--头部返回-->
		<mt-header :title="info.title">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <!--<mt-button @click="handleClose">关闭</mt-button>-->
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		

    	<div>
    		<img :src="info.imgBigUrl" alt="" />
    	</div>
    	<div id="box">
    		<div class="box-two">
    			<img :src="info.userPicUrl" alt="" />
    			<div>
	    			<p v-text="info.realName"></p>
	    			<span v-text="info.tags"></span>
    			</div>
    		</div>
    		<div id="box-btn">
    			<button>预约</button>
    			<button>关注</button>
    		</div>
    	</div>
    	
    	<div id="box-midlle">
    		<div>
    			<h5>时间：</h5>
    			<p v-text="">07.27 10:00</p>
    		</div>
    		<div>
	    		<h5>主播说：</h5>
	    		<p v-text="info.anchorSaid"></p>
    		</div>
    		
    	</div>
    	
    	
    	
    	<div id="box-box">
    		<p>内容介绍</p>
    		<div v-html="inf" class="img_box"></div>
    	</div>
		
		
		<div>
			
		</div>
	   	
	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		name:'MainBMList',
		data:function(){
			return {
				info:{},
				id:'',
//				swiper:null,
				inf:{}
			}
		},
		
		methods:{
			getData(){
				var that = this;
				console.log(this.id)
				axios.get('https://ilvb.mmall.com/room/viewer/in//'+this.id+'?pageNo=1&pageSize=1'
				,{
					  params:{
					  
					  }
					})
					.then(function(response){
						that.info = response.data.dataMap;
						that.inf = response.data.dataMap.descHtml
//						console.log(inf)
						console.log(response)
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

<style scoped lang="scss">
	.mint-header .mint-button{
		color: #000000;
	}
	.mint-header{
		color: #000;
		background: #fff;
	}
	.mint-header-title{
		font-weight: normal;
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
		background: #fff;
		p{
			font-size: 14px;
			line-height:0.6rem;
		}
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
	
	#box{
		display: flex;
		justify-content: space-between;
		margin-top:0.05rem;
		background: #fff;
		height: 0.6rem;
		.box-two{
			display:flex;
			img{
				height: 77%;
				border-radius: 50%;
				margin: 0.06rem 0 0.1rem 0.1rem;
			}
			div{
				margin: 0.06rem 0 0 0.1rem;
				height: 0.4rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items:initial;
				font-size: 12px;
			}
		}
		#box-btn{
			display: flex;
			align-items: center;
			margin-right: 0.1rem;
			button{
				width:0.5rem;
				height: 0.2rem;
				margin: 0 0.03rem;
				border: 1px solid #007AFF;
				background: #fff;
				color: #007AFF;
			}
		}
	}
	
	#box-midlle{
		margin: 0.05rem 0;
		background: #fff;
		div{
			margin-left: 0.1rem;
			display: flex;
			line-height: 0.3rem;
			h5{
				font-size: 11px;
				width: 0.4rem;
			}
			p{
				font-size: 11px;
			}
		}
	}
	section{
		background: #F2F2F2;
	}
</style>