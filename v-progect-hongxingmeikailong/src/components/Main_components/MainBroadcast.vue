<template>
	

	<section class="main-banner-middle mainbroadcast">
		
		<div class="common_top_bar">
			<div class="common_top_bar_d">
	            <h1>最热直播</h1>
	            <i>|</i>
	            <span>立体介绍</span>
            </div>
            <div class="time" id="countTime">
            	<p>More></p>
            	
            </div>
        </div>
		
	 <div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"  v-for="a in arr" :key="a.title">
	            	<a :href="'#/mainbmlist/'+a.id">
		            	<img :src="a.imgSmallUrl" alt="" />
		            	<p v-text="a.title" id="tit"></p>
		            	<div id="box">
		            		<img :src="a.userPicUrl" alt="" />
		            		<p v-text="a.realName">diandian</p>
		            	</div>
	            	</a>
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
		name:'MainBroadcast',
		computed:{
			...mapState({arr:'data'})
		},
		methods:{
			search(){
				store.commit("setdata");

			}
		},
		mounted(){
			this.search()
		    
		},
		updated(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 2.3,
		        paginationClickable: true,
		        spaceBetween: 30,
		        freeMode: true
		    })
//			console.log(this.arr.id)
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
		margin: 0 10px;
		padding-top: 20px;
		
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
	#box{
		display: flex;
		margin-top: 0.06rem;
		img{
			border-radius: 50%;
			width: 15%;
			height: 10%;
		}
		p{
			color: #000;
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
	

</style>