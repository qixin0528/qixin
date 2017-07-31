<template>
  	<div class="shopping">
		<mt-header title="商场" id="heard">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
  		
		 <shopping-banner></shopping-banner>
		 
		 <shopping-s-list></shopping-s-list>
		 
		 <nav-tab></nav-tab>
  	</div>
</template>



<script>
	import ShoppingBanner from './Shopping-components/ShoppingBanner.vue'
	import ShoppingSList from './Shopping-components/ShoppingSList.vue'
	import NavTab from './NavTab.vue'
	export default {
		name:'Shopping',
		data(){
			return{
				
			}
		},
		components:{
			NavTab,
			ShoppingBanner,
			ShoppingSList
		}
	}

</script>


<style scoped>
	#heard{
		position: fixed;
		top: 0;
		width: 100%;
		height: 38px;
		z-index: 666;
	}
	


</style>
