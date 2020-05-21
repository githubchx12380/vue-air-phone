<template>
    <div>
     <van-sticky>
        <van-nav-bar
            :title="cityDepArr"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="$router.back()"
            @click-right="onClickRight"
        />
     </van-sticky>
   
     <van-dropdown-menu :class="{activepad:!flightList.length}">
         <FilterFlight />
        
    </van-dropdown-menu>

     <van-list   
        v-model="loading"
        :finished="finished"
        :finished-text="finishedtext"
        @load="onLoad"
        :immediate-check="false"
        >
        <div v-if="flightList.length"><ticket-item v-for="(item,index) in flightList" :key="index" :flightitem="item" ></ticket-item></div>
        <van-loading v-if="loadins" :vertical="true" color="#1989fa" />
         <van-empty v-if="empty" description="没有找到该路程的机票" />
    </van-list>
    
    
     
  </div>
</template>

<script>
import ticketItem from '@/components/flights/ticketItem.vue'
import { flightsInfo } from '@/api/flights.js'
import FilterFlight from '@/components/flights/FilterFlight'
export default {
    components:{
        ticketItem,
        FilterFlight
    },
    computed: {
        cityDepArr() {
            return this.$route.query.dep + ' → ' + this.$route.query.arr
        }
    },
    data() {
        return {
            empty:false,  //没找到路程机票,让他显示
            loadins:true, //进入页面菊花图转转转,拿到数据隐藏
            flightList:[],  //数据存储
            finished:false, //下拉加载更多
            finishedtext:'没有更多了',
            loading:false,  //下拉加载更多
            bigsize:0,      //开始截取数据下标
            endsize:10,    //结束截取数据下标
            storesize:10,  //暂存一夜数
            storeData:{},   //暂存数据
        };
    },
    methods:{
        onClickRight() {

        },
        //下拉到一定距离出发事件,增加数据
        onLoad() {
           this.bigsize = this.bigsize + this.storesize
           this.endsize = this.endsize + this.storesize
           this.handleFlight()
        },
        //数据筛选
        handleFlight() {
            flightsInfo(this.$route.query).then(res => {
                this.storeData = res.data
                if(res.data.code == 200) {
                    setTimeout(() => {
                        this.loadins = false
                        if(!res.data.data.length) {
                            this.empty = true 
                            this.finishedtext = ''
                        }
                        
                        
                    },1000)
                }
                
                setTimeout(() => {
                    this.flightList.push(...this.storeData.data.slice(this.bigsize,this.endsize))
                    this.loading = false
                    if(this.storeData.data.slice(this.bigsize,this.endsize).length < 10) {
                        this.finished = true
                    }
                },1000)
            })
        }
    },
    created() {
        this.handleFlight()
    }
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__title{
    font-weight: 700;
}
.activepad{
    padding-bottom: 49.556vw;
}
</style>