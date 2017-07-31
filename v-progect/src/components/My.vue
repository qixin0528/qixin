<template>
  	<div class="my">
  		 
		<header>
			<a href="#"><img src="../../static/talk.png" alt="" /></a>
			<div class="login">
				<router-link to="/my/login">
					<img src="/../static/login.png" alt="" />
					<p>注册/登录</p>
					
				</router-link>
				
				
				<!--<router-link to="/my/login">登录</router-link>
		 		<router-link to="/my/register">注册</router-link>
		 		-->
			</div>
		</header>
		<!--<router-view></router-view>-->
		<div class="order">
			<div>
				<em>
					<p>我的订单</p>
					<p>查看全部订单＞</p>
				</em>
				<ul>
					<li>
						<span class="iconfont icon-daifukuan"></span>
						<b>代付款</b>
					</li>
					<li>
						<span class="iconfont icon-daifahuo"></span>
						<b>代发货</b>
					</li>
					<li>
						<span class="iconfont icon-untitled3"></span>
						<b>代收货</b>
					</li>
					<li>
						<span class="iconfont icon-pingjia"></span>
						<b>代评价</b>
					</li>
					<li>
						<span class="iconfont icon-tuikuanshouhou"></span>
						<b>退款/售后</b>
					</li>
				</ul>
			</div>
		</div>
		<div class="gongneng">
			<dl>
				<dt>
					<span class="iconfont icon-icon9"></span>
					<p>我的收藏</p>
					<b>></b>
				</dt>
				<dt>
					<span class="iconfont icon-guanzhu"></span>
					<p>我的关注</p>
					<b>></b>
				</dt>
				<dt>
					<span class="iconfont icon-jilu"></span>
					<p>预约记录</p>
					<b>></b>
				</dt>
				<dt>
					<span class="iconfont icon-youhuiquan"></span>
					<p>优惠券</p>
					<b>></b>
				</dt>
				<dt>
					<span class="iconfont icon-yijian"></span>
					<p>意见反馈</p>
					<b>></b>
				</dt>
			</dl>
		</div>
		<nav-tab></nav-tab>
	</div>
	
	
</template>



<script>
	import NavTab from './NavTab.vue'
	export default {
		name:'My',
		data(){
			return{
				
			}
		},
		components:{
			NavTab
		}
	}

</script>


<style scoped>

</style>
