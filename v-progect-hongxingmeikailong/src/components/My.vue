<template>
  	<div class="my">
		<header>
			<a ><img src="../../static/talk.png" alt="" /></a>
			<div class="login">
				<router-link to="../my/login">
					<img src="/../static/login.png" alt="" />
					<p>注册/登录</p>
				</router-link>
			</div>
		</header>
		<div class="order">
			<div>
				<em>
					<p>我的订单</p>
					<p>查看全部订单＞</p>
				</em>
				<ul>
					<li>
						<span class="iconfont icon-daifukuan"></span>
						<b>代付款</b>
					</li>
					<li>
						<span class="iconfont icon-daifahuo"></span>
						<b>代发货</b>
					</li>
					<li>
						<span class="iconfont icon-untitled3"></span>
						<b>代收货</b>
					</li>
					<li>
						<span class="iconfont icon-pingjia"></span>
						<b>代评价</b>
					</li>
					<li>
						<span class="iconfont icon-tuikuanshouhou"></span>
						<b>退款/售后</b>
					</li>
				</ul>
			</div>
		</div>
		<div class="gongneng">
			<dl>
				<dt>
					<span class="iconfont icon-icon9"></span>
					<p>我的收藏</p>
					<b>></b>
				</dt>
				<dt>
					<span class="iconfont icon-guanzhu"></span>
					<p>我的关注</p>
					<b>></b>
				</dt>
				<dt>
					<span class="iconfont icon-jilu"></span>
					<p>预约记录</p>
					<b>></b>
				</dt>
				<dt>
					<span class="iconfont icon-youhuiquan"></span>
					<p>优惠券</p>
					<b>></b>
				</dt>
				<dt>
					<span class="iconfont icon-yijian"></span>
					<p>意见反馈</p>
					<b>></b>
				</dt>
			</dl>
		</div>
	</div>
</template>



<script>
	

</script>


<style scoped>
.my{
    header{
        height: 1.35rem;
        background: #f5f5f5;
        border-bottom: 0.075rem solid #f7f7f7;
        a{
            img{
                float: right;
                margin: 0.1rem 0.1rem 0 0;
            }
        }
        .login{
            background: #f5f5f5;
            width:0.8rem;
            height:1rem;
            margin-left: 1.25rem;
            padding-top: 0.15rem;
            img{
                margin-bottom: 0.025rem;
                background-size: 0.15rem 0.15rem;
                margin-right: 0.15rem;
                margin-bottom: 0.15rem;
            }
            p{
                color: #444;
                display: block;
                font-size: 0.1rem;
                padding-left: 0.1rem;
                padding-top: 0.25rem;
            }
        }
    }
    .order{
        height:1rem;
        border-bottom: 0.075rem solid #f7f7f7;
        div{
            margin-left: 0.15rem;
            height:1rem; 
            em{
                background: #fff;
                display: block;
                border-bottom: 0.005rem solid #f7f7f7;
                height:0.3rem;
               p{
                   float: left;
                   line-height: 0.3rem;
               } 
               p:nth-child(1){
                   float: left;
                   font-size: 0.1rem;
                   font-weight: bolder;
                   
               }
               p:nth-child(2){
                   font-size: 0.05rem;
                   float: right;
                   margin-right: 0.1rem;
               }
            }
            ul{
                li{
                    width:0.55rem;
                    height:0.5rem;
                    margin-top: 0.1rem;
                    float: left;
                    margin-left: 0.05rem;
                    span{
                       font-size: 0.25rem;
                       padding-left: 0.05rem;
                       padding-right: 0.15rem;
                    }
                    b{
                        font-size: 0.05rem;
                        font-weight: 100;
                    }
                }
                li:nth-child(1){
                    margin-left: 0;
                }
                li:nth-child(5){
                    span{
                        margin-left: 7.5%;
                    }
                }
            }
        }
    }
    .gongneng{

        dl{
            margin-left: 0.15rem;
            dt{
                height: 0.45rem;
                line-height: 0.45rem;
                border-bottom: 0.005rem solid #f7f7f7;
                span{
                    color:#6cc5fc; 
                    float: left;
                }
                p{
                    float: left;
                    font-size: 0.14rem; 
                    margin-left: 0.15rem;
                }
                b{
                    color: #545454;
                    float: right;
                    margin-right: 0.1rem;
                }
            }
        }
    }
}
</style>
