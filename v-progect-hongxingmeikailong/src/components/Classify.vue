<template>
  	<div class="classify">
		 <div>
		 	<main-search></main-search>
		 </div>
		 <div id="class-box">
			 <div id="left">
			 	<classify-left></classify-left>
			 </div>
			 <div id="right">
			 	<!--<classify-b-list></classify-b-list>-->
			 	<!-- <router-view></router-view>-->
			 	<!--<c-m></c-m>-->
			 	<router-view></router-view>
			 </div>
		 </div>
		 

		 
		 
		 <nav-tab></nav-tab>
  	</div>
</template>



<script>
	import MainSearch from './Main_components/MainSearch'
	import ClassifyLeft from './Classify_components/ClassifyLeft'
//	import CM from './Classify_components/CM'
	import ClassifyBList from './Classify_components/ClassifyBList'
	import NavTab from './NavTab.vue'
	export default {
		name:'Classify',
		data(){
			return{
				
			}
		},
		components:{
			ClassifyLeft,
			ClassifyBList,
			MainSearch,
			NavTab
		},
		mounted(){
			
		},
		beforeUpdate(){
//			console.log(this.$route.params.id)
		},
		updated(){
			
		}
	}

</script>


<style scoped lang="scss">
#class-box{
	display: flex;
		margin-top: 0.5rem;
}

#left{
	width: 100px;
	background: #fff;
	position:fixed;
	/*background: #f10;*/
	top: 0.35rem;
}

#right{
	width: 100%;
	height: 100%;
	margin-left: 100px;
}



</style>
