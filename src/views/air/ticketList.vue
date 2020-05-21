<template>
    <div>
     <van-nav-bar
        :title="cityDepArr"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
     />

     <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
     </van-dropdown-menu>

     
     <ticket-item></ticket-item>
  </div>
</template>

<script>
import ticketItem from '@/components/flights/ticketItem.vue'
export default {
    components:{
        ticketItem
    },
    computed: {
        cityDepArr() {
            return this.$route.query.dep + ' → ' + this.$route.query.arr
        }
    },
    mounted() {
        console.log(this.$route);
        
    },
    data() {
        return {
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

        }
    }
}
</script>

<style>

</style>