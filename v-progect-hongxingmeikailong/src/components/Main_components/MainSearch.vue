<template>
	
	<div class="main-search">
		<nav class="home-nav wap-limit-width" page-nav="" id="search" style="top: 0rem;">
			
		    <div>
		        <span class="home-position" id="home-position" data-city="-1"><span>全国</span></span>
		        <input type="text" placeholder="搜索全国最好用的家具品牌" id="homeSearch" readonly="">
		        
		        <a href="#/mainsopacity" id="dian"></a>
		        
		    </div>
		    
		    <a href="javascript:void(0);" id="enter-nav" class="fast-enter-btn"></a>
		    
		    <div class="head-opacity" style="opacity: 0;"></div>
		</nav>
	</div>

</template>

<script>

	export default {
		name:'main-search',
		data(){
			return {
				
			}
		}
	}
	
	
</script>

<style scoped>
#search div{
	background: skyblue;
}

	#search {
	    position: fixed;
	    left: 0;
	    right: 0;
	    top: 0;
	    z-index: 9;

    }
    #search div{
    	padding: 0.1rem;
    	display: flex;
    	justify-content: center;
    	align-items: center;
	    /*background: #439df7;
	    opacity: 0.3;*/
    }
    #search div span{
    	font-size: 14px;
    	/*padding-left: 0.05rem;*/
    	width: 0.5rem;
    	height: 0.25rem;
   		margin-left: 0.08rem;
   		background: #fff;
   		line-height: 0.25rem;
   		border-top-left-radius: 0.05rem;
   		border-bottom-left-radius: 0.05rem;
    }
    #search div input{
    	width: 2.15rem;
    	height: 0.25rem;
    	border: none;
    	padding-left: 0.15rem;
    	font-size: 14px;
    }
	
	#dian{
		
		margin-left: 0.08rem;
		width: 40px;
		height: 35px;
		background:url(https://static3.mmall.com/goods/images/home/sprite-27a3b90cf3.png) no-repeat -255px -183px;
		
	}

</style>