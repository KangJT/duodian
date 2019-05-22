<template>
<a href="javascript:;" class="list-item" @click="gotopage">
      <div :class='isStyleControl? "list-list" :"list-style"'>
        <ul>
          内容
        </ul>
      </div>
  </a>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    items: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    isStyleControl: {
      type: Boolean
    }
  },
  methods: {
    gotopage () {
      this.$router.push({
        path: '/goods/detail'
      })
    },
    clickHandler () {
      console.log('aaa')
    }
  }
}
</script>

<style lang="scss" scoped>
.component-list{
   margin-bottom:80px;
   width: 100%;
   display: flex;
   .list-item{
     overflow: hidden;
     &:after{
       left: 10px;
     }
   }
 }
.list-list{
   width: 100%;
   display: inline-block;
   font-size: $font-size-xxxxl;
  ul li{
    @include wh (100%,auto);
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
    margin-top: 10px;
    .list-img{
      @include wh (180px,180px);
      background: orange;
    }
    .list-content{
      flex: 1;
      padding-left: 15px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3{
        color:#000;
         line-height: $font-size-xxxxxl;
      }
      p{
        color: #333333;
        font-size:$font-size-xxxxl;
      }
      .add-specifications{
        display: flex;
        justify-content: space-between;
        em{
          color: $color-warning;
          font-size:$font-size-xxxxxl;
        }
        .span{
          // react-native naturte
         @include wh (50px,50px);
          text-align: center;
          line-height: 56px;
          background: $color-success;
          color: #fff;
          border-radius:3px;
        }
      }
    }
  }
}
.list-style{
  background: #000;
  font-size:$font-size-m;
  height: auto;
  display: flex;
  width: 50%;
  display: inline-block;
  ul{
    width: 100%;
    background: yellow;
    li{
      padding: 20px 30px;
      box-sizing: border-box;
      .list-img{
        @include wh (100%,250px);
        margin: 0 auto;
        background: red;
      }
      .list-content{
        padding: 0;
        line-height:$font-size-s;
        h3{
          font-size: 32px;
          line-height:56px;
        }
      }
    }
  }
}
.list-content{
  flex: 1;
  padding-left:7.5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3{
    color:#000;
  }
  p{
    color:#cdcdcd;
    display: flex;
    align-items: center;
    font-size: $font-size-m;
    line-height:48px;
  }
  .add-specifications{
    display: flex;
    justify-content: space-between;
    align-items: center;
    em{
      color:$color-success;
      font-size: 32px;
    }
    .span{
       width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      // background: $color-success;
      color: #fff;
      font-size: 30px;
      border-radius:3px;
    }
  }
}
</style>
