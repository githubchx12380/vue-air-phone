<template>
    <div>
     <van-nav-bar
        :title="cityDepArr"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="$router.back()"
        @click-right="onClickRight"
     />

     <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
     </van-dropdown-menu>

     <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <ticket-item v-for="(item,index) in flightList" :key="index" :flightitem="item"></ticket-item>
    </van-list>
     
  </div>
</template>

<script>
import ticketItem from '@/components/flights/ticketItem.vue'
import { flightsInfo } from '@/api/flights.js'
export default {
    components:{
        ticketItem
    },
    computed: {
        cityDepArr() {
            return this.$route.query.dep + ' → ' + this.$route.query.arr
        }
    },
    data() {
        return {
            flightList:[],  //数据渲染
            finished:false, //下拉
            loading:false,  //下拉
            bigsize:0,      //开始截取
            endsize:10,    //结束截取
            storesize:10,
            storeData:{},   //暂存数据
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
        };
    },
    methods:{
        onClickLeft() {

        },
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
</style>