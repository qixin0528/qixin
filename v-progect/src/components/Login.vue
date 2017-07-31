<template>
	<div class="login">
	  	<header>
	  		<a href="#"><router-link to="/my"><img src="../../static/left.png" alt="" /></router-link></a>
	  		<p>登录</p>
	  	</header>
	  	<div class="shuru">
	  		<label for="">
	  			<input type="text" placeholder="用户名/手机号/邮箱"/>
	  		</label>
	  		<label for="">
	  			<input type="text" placeholder="密码"/>
	  			<span></span>
	  		</label>
	  		<div class="forget"><div>忘记密码</div></div>
	  		<div class="btn">
	  			<button>登录</button>
	  			<router-link to="/my/register"><button id="btn1">立即注册</button></router-link>
	  		</div>
	  	</div>
  	</div>
</template>



<script>
export default {
  name: 'hello',
  data () {
    return {
     
    }
  }
}
</script>


<style scoped>

</style>

