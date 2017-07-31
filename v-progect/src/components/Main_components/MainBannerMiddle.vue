<template>
	

	<section class="main-banner-middle">
		
	 <div class="swiper-container">
	 	
	 	<div class="common_top_bar">
			<div class="common_top_bar_d">
	            <h1>限时购</h1>
	            <i>|</i>
	            <span>限时折扣价</span>
	            <!--<p v-text="mbmarr.currentTime"></p>-->
            </div>
            <div class="time" id="countTime">
            	<p>{{this.$store.state.da}}</p>
            	<p>进行中</p>
            	<div>13</div>
            	<b>:</b> 
            	<div>18</div> 
            	<b>:</b>
            	<div>31</div>
            </div>
        </div>
        	
	        <div class="swiper-wrapper">
	        	
	            <div class="swiper-slide"  v-for="a in mbmarr.goodsList" :key="a.cover">
	            	<a :href="'#/mainlist/'+a.sku">
		            	<img :src="a.cover" alt="" />
		            	<p v-text="a.name">diandian</p>
		            	<p>限时价<span>￥{{a.promotionPrice}}</span></p>
	            	</a>
	            </div>	
	        </div>
	    </div>

	</section>
</template>

<script>
	import axios from 'axios'
	import store from '../../_vuex/store'
	import {mapState} from 'vuex'

	export default {
		name:'MainBannerMiddle',
		data(){
			return {
				data:null
			}
		},
		computed:{
			...mapState({mbmarr:'mbmdata'})
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
		height: 128px;
	}
	.main-banner-middle{
		margin-top: 10px;
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
        /*height: 180px;*/
        margin: 20px auto;

    }

    .swiper-slide{
    	display: flex;
    	flex-direction: column;
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
		margin: 0 10px;
		padding-bottom: 20px;
		
	}

	.common_top_bar_d{
		display: flex;
		align-items: flex-end;
		h1{
			font-size: 19px;
		}
		span{
			font-size: 12px;
		}
		i{
			padding: 0 4px ;	
			font-size: 50%;
		}
	}
	.swiper-slide{
		p{
			width: 1.1rem;
			display:block;
			white-space:nowrap; 
			overflow:hidden; 
			text-overflow:ellipsis;
		}
	}
	a{
		color: #000
	}

</style>