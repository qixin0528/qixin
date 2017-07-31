<template>
	

	<section class="main-banner-middle mainbest">
		<div class="common_top_bar">
			<div class="common_top_bar_d">
	            <h1>精选专题</h1>
	            <i>|</i>
	            <span>精彩内容别错过</span>
            </div>
            <div class="time" id="countTime">
            	<p>More></p>
            </div>
        </div>

		<div id="best-box">	
			<div v-for="a in mdarr" :key = "a.id" >	
				<a :href="'#/mainblist/'+a.articleId">
					<div id="best-text">
						<img :src="a.cover" alt="" />
						<h4 v-text="a.title"></h4>
						<p v-text="a.subTitle"></p>
						<b>_</b>
					</div>
				</a>
			</div>		
		</div>
		
		
	</section>
</template>

<script>
	import axios from 'axios'
	import store from "../../_vuex/store"
	import {mapState} from 'vuex'
	export default {
		name:'MainBest',
		data:function(){
			return {
				info:null,
				goodId:null
			}
		},
		computed:{
			...mapState({mdarr:'mbest'})
		},
		methods:{

			search(){
				store.commit("setmbm");

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
	img{
		width: 100%;
		height: 1.4rem;
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
		margin: 10px 10px;
		padding-top: 20px;
		
	}

	.common_top_bar_d{
		display: flex;
		align-items: flex-end;
		h1{
			font-size: 19px;
		}
		span{
			color: #666;
			
			font-size: 12px;
		}
		i{
			padding: 0 4px ;			
			font-size: 50%;
		}
	}

	#best-box{
		margin-bottom: 0.5rem;
	}
	
	#best-text{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 0.2rem;

		h4{
			color: #101010;
		}
		p{
			color: #ccc;
			font-size: 12px;
		}
		b{
			margin-top: -0.1rem;
		}
	}
	
	
</style>