<template>
  <div class="tab-list-box">
      <div class="tab-list">
          <div class="tab-list-item">
              <div
                v-for="(item,index) in ['国内','国际/中国港澳台','往返']"
                :key="index"
                :class="{listActive:currentIndex == index}"
                @click="tabItemClick(index)"
              >{{item}}</div>
          </div>
          <city-select></city-select> 
      </div>

      
      
  </div>
</template>

<script>
import CitySelect from '@/components/air/CitySelect.vue'
export default {
    components:{
        CitySelect //城市查询
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods:{
        tabItemClick(index) {
            this.currentIndex = index
        }
    }
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
        .listActive{
            color: #00bcd4;
        }
        .listActive::after{
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