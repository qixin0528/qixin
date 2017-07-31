<template>
  	<div class="find">
	
		<!--头部返回-->
		<mt-header title="发现" id="heard">
		  <router-link to="/" slot="left">
		    <!--<mt-button icon="back">返回</mt-button>-->
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
	
		<ul
		  v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10" >

		  <li v-for="item in arr" id="banner-box">
			  <img :src="item.recommendationData.coverImgUrl" alt="" />
			  <!--<h3 v-text="item.recommendationData.id"></h3>-->
			  <span id="item-span">
			  	<span>—————</span>
			  	 <p v-text="item.recommendationData.categoryTags"></p>
			  	 <span>—————</span>
			  </span>
			 <h4 v-text="item.recommendationData.title"></h4>
			 <p v-text="item.recommendationData.tags" id="item-p"></p>
		  </li>
		  <li v-if="loading">过渡动画</li>
		</ul>

		 <nav-tab></nav-tab>
  	</div>
  	
</template>



<script>
	import axios from 'axios'
	import store from "../_vuex/store"
	import {mapState} from 'vuex'
	import NavTab from './NavTab.vue'
	export default {
		name:'Find',
		data(){
			return{
				loading:false,
				arr:[],
				pageNo:0
			}
		},
//		computed:{
//			...mapState({arr:'findlist'})
//		},
		components:{
			NavTab
		},
		methods:{
//			search(){
//				store.commit('findlist')
//			},
			loadMore() {
				this.getData();
			},
			getData(){
				var that = this;
				that.pageNo++;
				axios.get('https://cms.mmall.com/cms-web/page/discovery/5/1/2',{
					params:{
						pageNo:that.pageNo,
						pageSize:10
					}
				}).then(function(response){
//					store.state.findlist = response.data.dataMap;
//					console.log(response.data.dataMap)
					var list = response.data.dataMap;
					for(let i = 0;i < list.length;i++){
						that.arr.push(list[i]);
					}
				}).catch(function(err){
					console.log(err)
				});
			}
		},
		beforeMount(){
			
		},
		mounted(){
//			this.search()
		},
		updated(){

		}
	}

</script>


<style scoped lang="scss">
	.find{
		position: relative;		
	}
	#heard{
		position: fixed;
		top: 0;
		width: 100%;
		height: 38px;
		z-index: 666;
	}
	.mint-button{
		color: #000000;
	}
	.mint-header{
		color: #000;
		background: #fff;
	}
	#banner-box{
		position: relative;
		img{
			width: 100%;
		}
		h4{
			color: #666666;
			font-size: 18px;
			margin: 0.2rem 0 0 0.1rem;
			
		}
		#item-p{
			color: #ccc;
			font-size: 12px;
			margin: 0.08rem 0 0.2rem 0.1rem;
		}
	}

	#item-span{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: absolute;
		bottom: 0.8rem;
		left: 0.1rem;
		color: #fff;
	}
	

</style>
