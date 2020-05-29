<template>
  <div class="cover">
      <van-row v-if="coverItem.img" @click="$router.push(`/strat/${coverItem.strat_id}.html`)">
          <van-col span="15" class="cover-title">
              <div class="title">{{coverItem.title}}</div>
              <div class="date">{{coverItem.date}}</div>
          </van-col>
          <van-col span="9" class="cover-img">
              <img :src="coverItem.img" alt="">
          </van-col>
      </van-row>
      <van-row v-else class="cover-title-else" @click="$router.push(`/strat/${coverItem.strat_id}.html`)">
         <div class="title">{{coverItem.title}}</div>
         <div class="date">{{coverItem.date}}</div>
      </van-row>
  </div>
</template>

<script>
export default {
    props:['coverItem']

}
</script>

<style scoped lang="less">
.cover{
    padding: 4.723vw 2.778vw;
}
.cover-img{
    img{
       width: 90%;
       height: 100%;
       border-radius: 2px;
    }
}
.cover-title{
    padding: 0 1.389vw;
    .title{
        display: -webkit-box;
        overflow: hidden;
        white-space: normal!important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 0.833vw 0 1.389vw 0;
        font-family: 'PingFangSC-Medium';
    }
    .date{
        font-size: 3.333vw;
        color: #999;
    }
}
.cover-title-else{
    .title{
        font-family: 'PingFangSC-Medium';
        display: -webkit-box;
        overflow: hidden;
        white-space: normal!important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0.833vw 0 1.389vw 0;
    }
    .date{
         font-size: 3.333vw;
        color: #999;
    }
}
</style>