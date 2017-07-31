<template>

	<section class="main-banner-middle mainblist">
		<!--头部返回-->
		<mt-header :title="info.categoryTags">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <!--<mt-button @click="handleClose">关闭</mt-button>-->
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		

    	<div id="box-box">
    		<h3 v-text="info.title"></h3>
    		<div id="box-box-one">
    			<span>{{setIn(info)[0]}}</span>
    			<span>{{setIn(info)[1]}}</span>
    			<span>{{setIn(info)[2]}}</span>
    			<!--<span v-text="info.tags.split(',')[1]"></span>
    			<span v-text="info.tags.split(',')[2]"></span>-->
    		</div>
    		
    		<div v-html="inf" class="img_box"></div>
    	</div>

	   	
	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		name:'MainBList',
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
				axios.get('https://cms.mmall.com/cms-web/article/custom/detail/'+this.id
				,{
					
					  params:{
					  
					  }
					})
					.then(function(response){
						that.info = response.data.dataMap;
						that.inf = response.data.dataMap.content

						console.log(response)
					})
					.catch(function(err){
					  console.log(err);
					});
			},
				setIn(info){
					var a ={}
					return info?a = info.tags.split(','):''
//				var a = info.tags.split(',')
//				return a
			}

		},
		beforeMount(){
			this.id = this.$route.params.articleId;
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

	#box-box{
		background: #fff;
		img{
			width: 100%;
		}
		p{
			font-size: 14px;
			line-height: 0.3rem;
		}
		h3{
			margin-left: 0.1rem;
			padding-top: 0.2rem;
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
		section{
			margin: 0  auto;
			line-height: 0.5rem;
			margin: 0.2rem 0;
		}
	}
	#box-box-one{
		margin: 0.2rem 0;
		display: flex;
		align-items: center;
		margin-left: 0.02rem;
		
		span{
			/*display: block;*/
			margin: 0 0.05rem;
			/*background: #f10;*/
			height: 0.2rem;
			width: 0.6rem;
			text-align: center;
			line-height: 0.2rem;
			font-size: 12px;
			border:1px solid #ccc;
		}
	}
	
</style>