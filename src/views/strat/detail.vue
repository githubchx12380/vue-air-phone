<template>
  <div class="detailitem-box">
      <van-nav-bar
        class="nav-bar"
        title="小吃攻略"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
        />
        <div class="detailItem">
            <div class="title">{{ListItem.title}}</div>
            <div class="detail-html" v-html="ListItem.content"></div>
        </div>
  </div>
</template>

<script>
import { Select_strat_detail } from '@/api/strat'
export default {
    data() {
        return {
            ListItem:{}
        }
    },
    props:['id'],
    methods:{
        replec() {

        }
    },
    mounted() {
        Select_strat_detail(this.id).then(res => {
            this.ListItem = res.data.data[0]
            let content = this.ListItem.content.replace(/"\d{3}"/g,'100%')
            console.log(content);
            
            this.ListItem.content = content
            console.log(this.ListItem);
            
        })
    }
}
</script>

<style scoped lang="less">
.detailitem-box{
    padding-bottom: 50px;
    .nav-bar{
        width: 100%;
    }
}
.detailItem{
      padding: 0 3.889vw;
    .title{
        font-family: 'PingFangSC-Medium';
        font-size: 21px;
        line-height: 30px;
        color: #222222;
         display: -webkit-box;
        overflow: hidden;
        white-space: normal!important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 2.778vw 0;
    }
     /deep/ .detail-html{
             img{
                width: 100% !important; 
                height: 100% !important;
              }
              p{
                  color: #222;
                  text-align: justify;
                  list-style-position: inside;
                  list-style-type: square;
                  line-height: 25px;
                  font-size: 17px;
                  font-family: 'PingFangSC-Medium';
              }
        }
    
}
</style>