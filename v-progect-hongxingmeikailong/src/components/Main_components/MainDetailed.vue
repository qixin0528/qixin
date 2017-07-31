<template>
	

	<section class="main-banner-middle maindetailed">
		<div class="common_top_bar">
			<div class="common_top_bar_d">
	            <h1>好物清单</h1>
	            <i>|</i>
	            <span>最全最新单品</span>
            </div>
            <div class="time" id="countTime">
            	<p>More></p>
            </div>
        </div>
        <div v-for="item in mdarr">
        	
        	<div id="bargain">
        		<a :href="'#/mainsblist/'+item.id">
		        	<img :src="item.cover" alt="" />
		        	<div>
		        		<span>|</span>
			        	<h5 v-text="item.title"></h5>
			        	<span>|</span>
		        	</div>
	        	</a>
	        	<p v-text="item.subTitle"></p>
	        </div>
	
			<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide"  v-for="a in item.goodList" :key="a.goodId">
		            	<a :href="'#/mainlist/'+a.goodId">
		            	<img :src="a.cover" alt="" />
		            	<div id="box">
		            		<p v-text="a.goodName"></p>
		            	</div>
		            	</a>
		            </div>	
		        </div>
			</div>
		</div>
  
	</section>
</template>

<script>
	import axios from 'axios'
	import store from "../../_vuex/store"
	import {mapState} from 'vuex'
	export default {
		name:'MainDetailed',
		data:function(){
			return {
				info:null,
				goodId:null,
				id:null
			}
		},
		computed:{
			...mapState({mdarr:'mddata'})
		},
		methods:{

			search(){
				store.commit("setmbm");

			}
		},
		beforeMount(){

		},
		mounted(){

			this.search()
			
		},
		updated(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 2.5,
		        paginationClickable: true,
		        spaceBetween: 30,
		        freeMode: true
		    })
		}
	}
	
	
</script>

<style scoped lang="scss">
	img{
		width: 100%;
		height: 125px;
	}
	.main-banner-middle{
		margin-top: 10px;
		background: #fff;
	}
	a{
		color: #000000;
	}
   body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 100%;
        height: 180px;
        margin: 20px auto;

    }

    .swiper-slide{
    	display: flex;
    	flex-direction: column;
    	position: relative;
    }
    #countTime{
    	display: flex;
    	align-items:flex-end;
    	p{
    		font-size: 12px;
    	}
    	div{
    		width: 23px;
    		height: 16px;
    		background: #daa680;
    		font-size: 14px;
    		text-align: center;
    		border-radius: 5%;
    	}
    	
    }
	.common_top_bar{
		display: flex;
		justify-content:space-between;
		margin: 10px 10px;
		padding-top: 10px;
		
	}

	.common_top_bar_d{
		display: flex;
		align-items: flex-end;
		h1{
			font-size: 19px;
		}
		span{
			color: #666;
			
			font-size: 12px;
		}
		i{
			padding: 0 4px ;			
			font-size: 50%;
		}
	}

	#box{
		display: flex;
		margin-bottom: 0.5rem;
		p{
			color: #000000;
			text-align: center;
			font-size: 14px;
		}
	}
	#tit{
		position: absolute;
		top: 55%;
		width: 1.1rem;
		left: 0.1rem;
		color: #fff;
		font-size: 14px;
		white-space:normal;
	}
	/*划算*/
	#bargain{
		display: flex;
		flex-direction: column;
		align-items: center;
		img{
			height: 1.8rem;
		}
		p{
			font-size: 12px;
			padding: 5px 0;
			color: #666;
		}
		div{
			display: flex;
			justify-content: center;
			padding-top: 10px;
			span{
				padding: 0 10px;
				display: block;
			}
			h5{
				font-size: 14px;
			}
		}
	}
	


</style>