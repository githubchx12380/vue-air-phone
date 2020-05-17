<template>
  <div class="tab-list-box">
      <div class="tab-list">
          <div class="tab-list-item">
              <div>国内</div>
              <div>国际/中国港澳台</div>
              <div>往返</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.tab-list-box{
    width: 100%;
    padding: 22.222vw 1.944vw 1.944vw 1.944vw;
}
.tab-list{
    width: 100%;
    background-color: white;
     border-radius: 0.833vw;
    .tab-list-item{
        display: flex;
        >div{
            position: relative;
            color: #9e9e9e;
            flex: 1;
            padding: 3.611vw 0;
            display: flex;
            justify-content: center;
            font-size: 3.611vw;
            align-items: center;
        }
        .list-active{
                position: absolute;
                bottom: 1px;
                left: 50%;
                display: block;
                content: "";
                margin-left: -14px;
                width: 28px;
                height: 4px;
                z-index: 1;
                background: #00bcd4;
                border-radius: 4px;
        }
    }
}
</style>