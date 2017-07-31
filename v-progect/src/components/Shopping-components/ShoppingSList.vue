<template>
	
	<div>
		<ul v-for="a in md" :key="a.id">
			<li>
				<img :src="a.coverImgUrl" alt="" />
				<p v-text="a.title"></p>
			</li>
		</ul>
	</div>

	
</template>

<script>
	
	import axios from 'axios'
	import store from '../../_vuex/store'
	import {mapState} from 'vuex'
		
	export default {
		name:'shopping-s-list',
		data(){
			return {
				
			}
		},
		computed:{
			...mapState({md:'shoppingslist'})
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

<style scoped lang="scss">
	ul{
		text-align: center;
		li{
		
			img{
				width: 96%;
			}
			p{
				font-size: 14px;
				margin: 0.1rem 0 0.1rem 0.1rem;
				text-align: start;
			}
		}
	}
</style>