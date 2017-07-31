<template>
	

	<section class="main-banner-middle mainbig">
		<div class="common_top_bar">
			<div class="common_top_bar_d">
	            <h1>大牌驾到</h1>
	            <i>|</i>
	            <span>品质保证</span>
            </div>
            <div class="time" id="countTime">
            	<p>More></p>
            </div>
        </div>
 		<div id="bargain-box">

		<div v-for="item in mdarr">	
        	<div id="bargain">
	        	<img :src="item.cover" alt="" />
	        	<div>
	        		<span>|</span>
		        	<h5 v-text="item.shopName"></h5>
		        	<span>|</span>
	        	</div>
	        	<!--<div></div>-->
	        	<p v-text="item.subTitle"></p>
	        	<b>_</b>
	        	
	        </div>
	
			<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide"  v-for="a in item.goods" :key="a.goodId">
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
		</div>
		
		
		<!--===============欧派系列=============-->
        <!--<div id="bargain">
        	<img :src="mdarr[0].cover" alt="" />
        	<div>
	        	<h5 v-text="mdarr[0].brandName"></h5>
	        	<p v-text="mdarr[0].subTitle"></p>
	        	<b>__</b>
        	</div>
        </div>

		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"  v-for="a in mdarr[0].goods" :key="a.id">
	            	<a :href="'#/mainlist/'+a.goodId">
	            	<img :src="a.cover" alt="" />
	            	<div id="box">
	            		<p v-text="a.goodName"></p>
	            	</div>
	            	</a>
	            </div>	
	        </div>
		</div>-->
        <!--===============欧派系列2=============-->
        <!--<div id="bargain-box">
        <div id="bargain">
        	<img :src="mdarr[1].cover" alt="" />
        	<div>
	        	<h5 v-text="mdarr[1].brandName"></h5>
	        	<p v-text="mdarr[1].subTitle"></p>
	        	<b>__</b>
        	</div>
        </div>

		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"  v-for="a in mdarr[1].goods" :key="a.id">
	            	<a :href="'#/mainlist/'+a.goodId">
	            	<img :src="a.cover" alt="" />
	            	<div id="box">
	            		<p v-text="a.goodName"></p>
	            	</div>
	            	</a>
	            </div>	
	        </div>
		</div>
		</div>-->
	</section>
</template>

<script>
	import axios from 'axios'
	import store from "../../_vuex/store"
	import {mapState} from 'vuex'
	export default {
		name:'MainBig',
		data:function(){
			return {
				info:null,
				goodId:null
			}
		},
		computed:{
			...mapState({mdarr:'mdb'})
		},
		methods:{

			search(){
				store.commit("setmbm");

			}
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
		height: 1rem;
	}
	.main-banner-middle{
		margin-top: -12px;
		background: #fff;
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
       margin-top: 32px;

    }

    .swiper-slide{
    	display: flex;
    	flex-direction: column;
    	position: relative;
    	/*margin-bottom: 5rem;*/
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
		padding-top: 20px;
		
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
		justify-content: center;
		position: relative;
		img{
			height: 1.7rem;
		}
		p{
			font-size: 12px;
			padding: 5px 0;
			color: #666;
			position: absolute;
			bottom: -18px;
		}
		b{
			/*margin-top: 1rem;*/
			position: absolute;
			bottom: -15%;
		}
		div{
			display: flex;
			justify-content: center;
			/*flex-direction: column;*/
			align-items: center;
			width: 2rem;
			height: 0.6rem;
			background: #fff;
			/*padding-top: 10px;*/
			position: absolute;
			border-radius: 10px;
			bottom: -18px;
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