<template>

	<section class="main-banner-middle classifyblist">


    	<div id="box-box">
			<img :src="info.banner" alt="" />
    	</div>


    	<div v-for="b in top" :key="b.className" id="hot">
    		<div id="he-box">
    			<span>|</span>
		   		<p v-text="b.className"></p>
		   		<span>|</span>
    		</div>
    		
	   		<div id="he">
	   			<div v-for="ab in b.subClassList" :key="ab.id" id="box-logo" >
		   			<img :src="ab.classImgUrl" alt="" />
		   			<p v-text="ab.className"></p>
	   			</div>
	   		</div>
	   		
	   	</div>
	   	
    	<div id="hezi">
    		<div id="hezi-box">
    			<span>|</span>
    			<p>推荐品牌</p>
    			<span>|</span>
    		</div>
    		
			<div v-for="a in inf" :key="a.banner" id="box-logo">
				<img :src="a.brandLogo" alt="" />
				<p v-text="a.brandName"></p>
			</div>
	   	</div>
	   	

	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		name:'ClassifyBList',
		data:function(){
			return {
				info:{},
				inf:{},
				id:"",
				top:{}
			}
		},
		methods:{
			getData(){
				var that = this;
				axios.get('https://cms.mmall.com/cms-web/home/category/detail/'+this.id,
				{
					  params:{
					  
					  }
					})
					.then(function(response){
						that.info = response.data.dataMap;
						that.inf = response.data.dataMap.brands;
						that.top = response.data.dataMap.classes
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
			this.id = this.$route.params.id;
			this.getData();
		},
		updated(){
				this.id = this.$route.params.id;
				this.getData();				
		}
//		,
//		watch:{
//			id:{
//				
//			}
//		}
	}
	
	
</script>

<style lang="scss">
	section{
		margin-bottom: 1rem;
	}
	#hot{
		display: flex;
		flex-direction: column;
		p{
			font-size: 14px;
		}
		#he-box{
			display: flex;
			margin-top: 0.1rem;
		}
	}
	#box-box{
		text-align: center;
		margin-top: 0.1rem;
		img{
			width: 90%;
		}
	}
	#box-logo{
		width: 33%;
		margin-top: 0.1rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		
		img{
			width: 50%;
		}
		p{
			font-size: 14px;
			text-align: center;
			
		}
	}
	#hezi{
		
		#hezi-box{
			margin-right: 1.5rem;
			margin-top: 0.3rem;
			margin-bottom: 0.1rem;
			display: flex;
		}
		p{
			font-size: 14px;
		}
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		
	}
	#he{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	
</style>