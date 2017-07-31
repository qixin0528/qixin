<template>
	<footer class="navtab">
		<router-link to="/main"><span class="iconfont icon-shouye"></span>首页</router-link>
		<router-link to="/classify"><span class="iconfont icon-erweima"></span>分类</router-link>
		<router-link to="/find"><span class="iconfont icon-yanjing"></span>发现</router-link>
		<router-link to="/shopping"><span class="iconfont icon-ju"></span>商场</router-link>
		<router-link to="/my"><span class="iconfont icon-wodejuhuasuan"></span>我的</router-link>
	</footer>
</template>



<script>
	
</script>


<style lang="scss">
	@import './styles/virtual.scss';
.navtab{
	width: 100%;
	height: 0.48rem;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #fff;
	display: flex;
	z-index: 9999;
	a{
		flex-grow: 1;
		flex-shrink: 1;
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		align-items: center;
		font-size: 0.14rem;
		color: #707274;
		text-decoration: none;
		span{
			font-size: 0.25rem;
		}
		&.router-link-active{
			color: $base-color;
		}
	}
	
}

</style>
