<template>
	
	<header class="shopping-banner">
		<mt-swipe :auto="3000">
		  <mt-swipe-item  v-for="a in mdarr" :key="a.id">
		  	<!--<a :href="'#/mainblist/'+a.id">-->
		  		<img :src="a.imgUrl" alt="" />
		  	<!--</a>-->
		  </mt-swipe-item>
		</mt-swipe>
	</header>

	
	
	
	
	
	
	
</template>

<script>
	
	import axios from 'axios'
	import store from '../../_vuex/store'
	import {mapState} from 'vuex'
		
	export default {
		name:'shopping-banner',
		data(){
			return {
				
			}
		},
		computed:{
			...mapState({mdarr:'shoppinglist'})
		},
		methods:{
			search(){
				store.commit("shoplist");
			}
		},
		mounted(){
			this.search()
		}
		
	}
	
	
</script>

<style scoped>
.mint-swipe{
		height: 1.8rem;
	}
	img{
		width: 100%;
	}
	.shopping-banner{
		margin-top:0.3rem ;
	}
</style>