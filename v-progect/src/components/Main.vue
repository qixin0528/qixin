<template>
  	<div class="main">
  		<main-search></main-search>
  		
		<main-banner></main-banner>
		
		
		
	 	<section class="home_coupon" style="">
	        <!--领券中心-->
	        <i></i>
	        <span>会员专享礼</span>
	    </section>
		 
		<main-banner-middle></main-banner-middle>
		
		<main-broadcast></main-broadcast>

		<main-detailed></main-detailed>
		
		<main-big></main-big>
		
		<main-best></main-best>
		
		<nav-tab></nav-tab>
  	</div>
</template>



<script>
	import MainBanner from './Main_components/MainBanner'
	import MainBannerMiddle from './Main_components/MainBannerMiddle'
	import MainBroadcast from './Main_components/MainBroadcast'
	import MainSearch from './Main_components/MainSearch'
	import MainDetailed from './Main_components/MainDetailed'
	import MainBig from './Main_components/MainBig'
	import MainBest from './Main_components/MainBest'
	import MainSBList from './Main_components/MainSBList'
	import NavTab from './NavTab.vue'
	export default {
		name:'main',
		data(){
			return{
				
			}
		},
		components:{
			MainBanner,
			MainSearch,
			MainBannerMiddle,
			MainBroadcast,
			MainDetailed,
			MainBig,
			MainBest,
			MainSBList,
			NavTab
		}
	}
</script>



<style scoped>
	html{
		font-size: 31.25vw;
		}
	body{
		font-size: 16px;
		background: #f5f5f5;
	}
	html,body,#app{
		height: 100%;
		margin:0;
		padding: 0;
		position: relative;
	}
	.home_coupon{
		display: flex;
		align-items: center;
		height: 0.33rem;
		background: #fff;
		margin: 0.02rem 0;
	}
	.home_coupon i {
	    display: block;
	    width: 0.9rem;
	    height: .18rem;
	    background: url(https://static3.mmall.com/goods/images/home/home_coupon-bfb3b8ca74.png) no-repeat center center;
	    background-size: cover;
	    margin-right: 0.24rem;
	    margin-left: 0.08rem;
	}
	.home_coupon span {
	    margin-top: .03rem;
	    font-size: .12rem;
	    color: #4a4a4a;
	}
</style>
