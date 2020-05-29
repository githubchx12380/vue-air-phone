<template>
  <div class="strat">
        <van-nav-bar title="攻略"/>
        <van-pull-refresh success-text="刷新成功" v-model="isLoading" @refresh="onRefresh">
            <cover v-for="(item,index) in List" :key="index" :coverItem="item" />
        </van-pull-refresh>
  </div>
</template>

<script>
import {  Select_stratCover } from '@/api/strat'
import cover from '@/components/strat/cover.vue'
export default {
    data() {
        return {
            List:[],
            isLoading:false,
        }
    },
    components:{
        cover
    },
    methods:{
        onRefresh() {
             Select_stratCover().then(res => {
                setTimeout(() => {
                    this.List = res.data.data
                    this.isLoading = false
                },500)
             })
        }
    },
    mounted() {
        this.onRefresh()
    }
}
</script>

<style scoped lang="less">
.strat{
    padding-bottom:50px;
    .bottom-init{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>