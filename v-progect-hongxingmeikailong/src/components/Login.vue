<template>
	<div class="login">
	  	<header>
	  		<a href="#"><router-link to="/my"><img src="../../static/left.png" alt="" /></router-link></a>
	  		<p>登录</p>
	  	</header>
	  	<div class="shuru">
	  		<label for="">
	  			<input type="text" placeholder="用户名/手机号/邮箱" v-model="username"/>
	  		</label>
	  		<label for="">
	  			<input type="password" placeholder="密码" v-model="psw"/>
	  			<span></span>
	  		</label>
	  		<div class="forget"><div>忘记密码</div></div>
	  		<div class="btn">
	  			<button @click="login">登录</button>
	  			<router-link to="/my/register"><button id="btn1">立即注册</button></router-link>
	  		</div>
	  	</div>
	  	<div  class="tips" v-if="isTip" v-text="tip"></div>
  	</div>
</template>



<script>
	import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
     username:'',
     psw:'',
     isTip:false,
     tip:""
    }
  },
  methods:{
  	login:function(){
  		var that = this;
  		axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
	  		params:{
				status:'login',
				userID:that.username,
				password:that.psw
	  		}
	  	}).then(function(res){
	  		var timer = null;
	  		clearTimeout(timer);
	  		if(that.username == ''){
	  			that.isTip=true;
	  			that.tip='请输入用户名'
	  			timer=setTimeout(function(){
	  				that.isTip=false;
	  			},1500)
	  		}else if(that.psw == ""){
	  			that.isTip=true;
	  			that.tip='请输入密码'
	  			timer=setTimeout(function(){
	  				that.isTip=false;
	  			},1500)
	  		}else if(res.data == 0){
	  			that.isTip=true;
	  			that.tip='查无此人！'
	  			timer=setTimeout(function(){
	  				that.isTip=false;
	  			},1500)
	  		}else if(res.data==2){
	  			that.isTip=true;
	  			that.tip='密码错误！'
	  			timer=setTimeout(function(){
	  				that.isTip=false;
	  			},1500)
	  		}
  		})
  	}
  }
}
</script>


<style scoped>
	.login{
    header{
        height:0.42rem;
        display: flex;
        line-height: 0.42rem;
        border-bottom: 0.02rem solid #e4e4e4;
        padding: 0 0 0 0;
        a{
            img{
                padding-left:0.27rem;
                padding-right: 1rem;
            }
        }
        p{
            font-size: 0.145rem;     
        }
    }
    .shuru{
        margin-top: 0.6rem;
        padding-left:0.37rem ;
        label{
            display: block;
            width: 2.4rem;
            border-bottom: 0.01rem solid #e4e4e4;
            input{
            border:none;
            outline: none;
            box-shadow: none;
            font-size: 0.13rem;
            padding:0.17rem 0 0.18rem 0;
            width:2.1rem;
            height: 0.1rem;
            background: #f5f5f5;
            }
            span{
                display: block;
                width:0.15rem;
                height:0.1rem;
                float: right;
                margin-top: 0.15rem;
                background: url(/static/sprite.png) -0.7rem -0.7rem;
                background-size: 0.5rem 0.5rem;
            }
        }
        .forget{
            width:3.5rem;
            font-size: 0.11rem;
            color: #707274;
            float: right;  
            div{
                width: 0.5rem;
                float: right;
            }
            padding: 0.11rem 0.375rem 0.11rem 0;
        }
        .btn{
            button{
               width:2.5rem;
               height:0.4rem; 
               margin-bottom: 0.1rem;   
               border-radius: 0.04rem;
            }
            button:nth-child(1){
                color: #fff;
                background: #439df7;
                border: none;
            }
            #btn1{
                color: #439df7;
                background: #fff;
                border: 0.005rem solid #b8dafc;    
            }  
        }
    } 
}
.tips{//登录注册界面错误提示框
        position: absolute;
        top:45%;
        left:20%;
        width: 3rem;
        height:1rem;
        background:#000;
        opacity: 0.8;
        line-height: 1rem;
        text-align: center;
        border: 0.02rem solid #b6b6b6;
        border-radius: 0.1rem;
        color: #fff;
        font-size: 0.2rem;
    }

</style>

