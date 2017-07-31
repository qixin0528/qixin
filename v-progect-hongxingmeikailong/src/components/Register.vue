<template>
  	<div class="register">
		<header>
	  		<a href="#"><router-link to="/my/login"><img src="../../static/left.png" alt="" /></router-link></a>
	  		<p>注册</p>
	  	</header>
	  	<div class="shuru">
	  		<label for="">
	  			<input type="text" placeholder="请输入手机号" v-model="username"/>
	  		</label>
	  		<label for="">
	  			<input type="text" placeholder="请输入验证码" v-model="yzm"/>
	  			<div id="getCode" @click="getyzm">获取验证码</div>
	  		</label>
	  		<label for="">
	  			<input type="text" placeholder="请输入密码" v-model="psw"/>
	  			<span></span>
	  		</label>
	  		<p>建议使用字母、数字和符号两种以上的组合，6-20个字符</p>
	  	</div>
	  	<div class="btn">
  			<button @click="register">注册</button>
  			<input type="checkbox"/><p>我已阅读并同意<a href="#">《红星美凯龙服务协议》</a></p>
  		</div>
  		<div  class="tips" v-if="isTip" v-text="tip"></div>
  	</div>
</template>



<script>
	import axios from 'axios'
	export default{
		name:'hello',
		data(){
			return{
				username:'',
				yzm:'',
				psw:'',
				isTip:false,
				tip:''
			}
		},
		methods:{
			register:function(){
				var that = this;
				axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
					params:{
						status:'register',
						userID:that.username,
						password:that.psw
					}
				}).then(function(res){
					var timer = null;
					clearInterval(timer);
					if(that.username == ''){
			  			that.isTip=true;
			  			that.tip='请输入用户名'
			  			timer=setTimeout(function(){
			  				that.isTip=false;
			  			},1500)
			  		}else if(that.yzm == ''){
			  			that.isTip=true;
			  			that.tip='请输入密码'
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
			},
			getyzm:function(){
				var timer = null;
				var that = this;
				clearInterval(timer);
				if(!(/^1[34578]\d{9}$/.test(that.username))){
					that.isTip=true;
		  			that.tip='请输入手机号！'
		  			timer=setTimeout(function(){
		  				that.isTip=false;
		  				that.username = ''
		  			},1500)
				}
			}
		}
	}
</script>


<style scoped>
	.tips{//登录注册界面错误提示框
        position: absolute;
        top:45%;
        left:20%;
        width: 2rem;
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

.register{
    padding: 0 0 0 0;
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
        padding-left:0.37rem ;
        label{
            display: block;
            width: 2.4rem;
            height: 0.45rem;
            border-bottom: 0.01rem solid #e4e4e4;
            input{
            border:none;
            outline: none;
            box-shadow: none;
            font-size: 0.13rem;
            padding:0.17rem 0 0.17rem 0;
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
        label:nth-child(2){
            display: block;
            width: 2.4rem;
            border-bottom: 0.01rem solid #e4e4e4;
            input{
            width:1.5rem;
            height: 0.1rem;
            display: block;
            float: left;
            }
            #getCode{
                width: 0.85rem;
                display: block;
                float: left;
                height: 0.3rem;
                line-height: 0.3rem;
                text-align: right;
                color:#439df7;
                border-left: 0.005rem solid #e4e4e4;
                margin-top: 0.05rem;
            }
        }
        p{
            margin-top: 0.15rem;
            margin-bottom: 0.15rem;
            color: #999;
        }
    }
    .btn{
        button{
            width:2.5rem;
            height:0.4rem; 
            margin-bottom: 0.1rem;
            margin-left: 0.3rem;
            border-radius: 0.04rem;
            color: #fff;
            background: #439df7;
            border: none;
            margin-right: 0.5rem;
        }
        input{
            float: left;
            width:0.15rem;
            height:0.15rem;
            background-color: #fff;
            margin-top: 0.1rem;
            margin-left: 0.3rem;

        }
        p{
            float: left;
            font-size: 0.125rem;
            margin-top: 0.1rem;
            color: #999;
        }
    }
}
</style>
