<template>
	

	<section class="main-banner-middle classify-left">
		<div v-for="a in mdarr" :key="a.title">
			<router-link :to="'/classifyblist/'+a.id">
				<p v-text="a.title"></p>
			</router-link>
		</div>
		
	</section>
</template>

<script>
	import axios from 'axios'
	import store from "../../_vuex/store"
	import {mapState} from 'vuex'
	export default {
		name:'ClassifyLeft',
		data:function(){
			return {
				info:null,
				id:null
			}
		},
		computed:{
			...mapState({mdarr:'classlf'})
		},
		methods:{

			search(){
				store.commit("classlist");

			}
		},
		mounted(){
			this.search()
		},
		updated(){
			
			
		}
	}
	
	
</script>

<style scoped lang="scss">
	
	.classify-left{
		div{
			p{
				font-size: 16px;
				text-align: center;
				color: #000000;
				margin: 0.3rem 0;
			}
		}
	}
	
	


</style>