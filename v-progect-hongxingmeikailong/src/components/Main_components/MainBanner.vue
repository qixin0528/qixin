<template>
	
	<header class="main-banner">
		<mt-swipe :auto="3000">
		  <mt-swipe-item  v-for="a in mdarr" :key="a.id">
		  	<a :href="'#/mainblist/'+a.id">
		  		<img :src="a.imgUrl" alt="" />
		  	</a>
		  </mt-swipe-item>
		</mt-swipe>
		
	
	</header>
	
</template>

<script>
	
	import axios from 'axios'
	import store from '../../_vuex/store'
	import {mapState} from 'vuex'
		
	export default {
		name:'main-banner',
		data(){
			return {
				
			}
		},
		computed:{
			...mapState({mdarr:'mbanner'})
		},
		methods:{
			search(){
				store.commit("setmbm");
			}
		},
		mounted(){
			this.search()
		}
		
	}
	
	
</script>

<style scoped>
	.mint-swipe{
		height: 2.2rem;
	}
	.mint-swipe-items-warp{
		height: 200px;
	}
	.mint-swipe-item{
		height: 200px;
		background: skyblue;
	}
	img{
		width: 100%;
	}

</style>