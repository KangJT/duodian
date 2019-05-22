<template>
    <div id="vip">
         <div class="active-view">
            <h3 class="welcome-title">Hello，银卡会员</h3>
            <div class="half-center">
                <span class="itemcol">
                    <span class="warp">
                        <i class="warp-left"></i>
                        <p>会员中心</p>
                    </span>
                </span>
                <span class="itemcol">
                    <span class="warp">
                        <em class="lixiang">
                        <span>立享优惠</span>
                        </em>
                        <i class="warp-right"></i>
                        <p>会员专属码</p>
                    </span>
                </span>
            </div>
        </div>
        <div class="order">
            <h2>
                <span>我的订单</span>
                <span>全部订单</span>
            </h2>
            <ul>
                <li>
                    <a href="###"></a>
                    <i class="vip-icon">
                        <img src="http://wumart.b0.upaiyun.com/salon_enable.png" >
                    </i>
                    <p>活动尊享</p>
                </li>
                <li>
                    <a href="###"></a>
                    <i class="vip-icon">
                        <img src="http://wumart.b0.upaiyun.com/salon_enable.png" >
                    </i>
                    <p>活动尊享</p>
                </li>
                <li>
                    <a href="###"></a>
                    <i class="vip-icon">
                        <img src="http://wumart.b0.upaiyun.com/salon_enable.png" >
                    </i>
                    <p>活动尊享</p>
                </li>
            </ul>
        </div>
        <div class="quater-enter">

            <ul class="row">
                 <li class="col-3">
                    <div class="in">
                        <em>
                           <i>￥</i>0.00
                        </em>
                        <p>余额</p>
                    </div>
                </li>
                <li class="col-3">
                    <div class="in">
                        <em>
                        110
                        </em>
                        <p>积分</p>
                    </div>
                </li>
                <li class="col-3">
                    <div class="in">
                        <em>
                         14
                        </em>
                        <p>成长值</p>
                    </div>
                </li>
                <li class="col-3">
                    <div class="in">
                        <em>
                            1
                        </em>
                        <p>优惠券</p>
                    </div>
                </li>
            </ul>
        </div>
         <ul class="right-center clearfix">
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <img src="http://wumart.b0.upaiyun.com/order_rating_enable.png" >
                </i>
                <p>评论奖励</p>
            </li>
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <img src="http://wumart.b0.upaiyun.com/one_enable_icon@3x.png" >
                </i>
                <p>一分钱试吃</p>
            </li>
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <img src="http://wumart.b0.upaiyun.com/salon_enable.png" >
                </i>
                <p>活动尊享</p>
            </li>
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <img src="http://wumart.b0.upaiyun.com/wumart_enable.png" >
                </i>
                <p>线下特惠</p>
            </li>
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <!-- <img src="../../common/img/quan.png" > -->
                </i>
                <p>全部权益</p>
            </li>
        </ul>
         <ul class="right-center clearfix">
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <img src="http://wumart.b0.upaiyun.com/order_rating_enable.png" >
                </i>
                <p>评论奖励</p>
            </li>
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <img src="http://wumart.b0.upaiyun.com/one_enable_icon@3x.png" >
                </i>
                <p>一分钱试吃</p>
            </li>
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <img src="http://wumart.b0.upaiyun.com/salon_enable.png" >
                </i>
                <p>活动尊享</p>
            </li>
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <img src="http://wumart.b0.upaiyun.com/wumart_enable.png" >
                </i>
                <p>线下特惠</p>
            </li>
            <li class="item">
                <a href="###"></a>
                <i class="vip-icon">
                    <!-- <img src="../../common/img/quan.png" > -->
                </i>
                <p>全部权益</p>
            </li>
        </ul>
   </div>

</template>

<script>
export default {
  name: 'component_name',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
 .order{
     width: 100%;
     height: 180px;
     background: yellow;
     display: flex;
     flex-direction: column;
     ul{
         width: 100%;
         display: flex;
         align-items: center;
     }

 }
      .active-view{
             width:100%;
             height:3.26rem;
             background: linear-gradient(135deg,#d1dce3 0,#90a3b1 280px);
         }
         .welcome-title{
             text-align: center;
             color: #fff;
             height: 0.76rem;
             line-height:0.76rem;
             padding: 0.18rem 0.28rem 0 ;
             font-size: 0.30rem;
             font-weight: normal;
         }
         .half-center{
            margin-top: 0.18rem;
         }
        .itemcol{
           float: left;
           width: 50%;
           text-align: center;
           color: #fff;
           font-size: 0.23rem;

        }
        .warp{
            display: inline-block;

            /* line-height: 1.41rem; */
        }
        .lixiang{
            font-style: normal;
            color: #fff;
            font-size:0.17rem;
            background-color: #281e29;
            border-radius: 0.17rem;

            left: 0.5rem;
            top: -0.21rem;
            white-space: nowrap;

        }
        .warp-left{
            display: inline-block;
            width: 0.76rem;
            height: 0.76rem;
            /* background: url(../../common/img/guan.jpg)no-repeat left center; */
        }
        .warp-right{
            display: inline-block;
            width: 0.76rem;
            height: 0.76rem;
            /* background: url(../../common/img/tiao.jpg)no-repeat left center; */
        }
          .quater-enter{
            clear: both;
            /* width: 6.63rem;
            height: 1.18rem; */
            margin-top:0.28rem;
            padding: 0 0.28rem;

            left: 0;
            top: 2.11rem;
            z-index:2;
        }
        .row{

            width: 100%;
            height: 1.4rem;
            line-height: 1rem;

            background: #fff;
            box-shadow: 0 0 5px 1px rgba(0,0,0,.1);

        }
        .col-3{

            float: left;
            width: 25%;
            text-align: center;

        }
          .in{

          width: 1.65rem;
          height: 0.5rem;

        }
        .col-3 em{

           clear: both;
            font-style: normal;
            font-weight: 700;
            font-size:0.25rem;
            color: #281e29;

            display: inline-block;
        }
        .col-3 p {
               display: inline-block;
                font-size:0.23rem;
                color: grey;

            }
         .right-center{
           text-align: center;
            background-color: #fff;
            margin-top: 0.21rem;
            height: 1.59rem;
        }
        .item{
            float: left;
            width: 20%;
            height: 1rem;
            min-height:0.93rem;

        }
        .item p{
            font-size:0.23rem;
            color: grey;

        }

         .vip-icon{
            display: inline-block;
            width: 32px;
            height: 32px;
            margin-bottom: 5px;
         }
        .vip-icon img{
            display: inline-block;
            width:0.61rem;
            height: 0.61rem;
            margin-bottom:0.09rem;
        }
        .image{
            clear: both;
            height: 3.55em;

        }
        .image img{
             height: 3.55em;

        }

</style>
