<template>
  	<div class="register">
		<header>
	  		<a href="#"><router-link to="/my/login"><img src="../../static/left.png" alt="" /></router-link></a>
	  		<p>注册</p>
	  	</header>
	  	<div class="shuru">
	  		<label for="">
	  			<input type="text" placeholder="请输入手机号"/>
	  		</label>
	  		<label for="">
	  			<input type="text" placeholder="请输入验证码"/>
	  			<div id="getCode">获取验证码</div>
	  		</label>
	  		<label for="">
	  			<input type="text" placeholder="请输入密码"/>
	  			<span></span>
	  		</label>
	  		<p>建议使用字母、数字和符号两种以上的组合，6-20个字符</p>
	  	</div>
	  	<div class="btn">
  			<button>注册</button>
  			<input type="checkbox"/><p>我已阅读并同意<a href="#">《红星美凯龙服务协议》</a></p>
  		</div>
  	</div>
</template>



<script>
	

</script>


<style scoped>



</style>
