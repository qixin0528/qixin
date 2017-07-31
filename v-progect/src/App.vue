<template>
  <div id="app">
   
    <router-view></router-view>
   
   
    
  </div>
</template>

<script>
	
	
	export default {
	  name: 'app',
	  components:{
	  	
	  }
	  
	}


</script>

<style lang="scss">
		@import './styles/reset.scss';
		@import './styles/virtual.scss';
		
		html{
			font-size: 31.25vw;
			}
		body{
			font-size: 16px;
			background: #f5f5f5;
		}
		html,body,#app{
			height: 100%;
			/*width: 100%;*/
			/*overflow: hidden;*/
			margin:0;
			padding: 0;
			position: relative;
			box-sizing: border-box;
		}
</style>
