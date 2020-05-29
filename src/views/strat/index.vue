<template>
  <div class="strat">
        <van-nav-bar title="攻略" class="nav-bar" />
        <loading v-if="loadingShow" />
        <van-pull-refresh success-text="刷新成功" v-else v-model="isLoading" @refresh="onRefresh">
            <cover v-for="(item,index) in List" :key="index" :coverItem="item" />
             <div class="bottom-init">下拉刷新</div>
        </van-pull-refresh>
       
  </div>
</template>

<script>
import {  Select_stratCover } from '@/api/strat'
import cover from '@/components/strat/cover.vue'
import loading from '@/components/common/loading.vue'
export default {
    data() {
        return {
            List:[],
            isLoading:false,
            loadingShow:true
        }
    },
    components:{
        cover,
        loading
    },
    methods:{
        onRefresh() {
             Select_stratCover().then(res => {
                setTimeout(() => {
                    this.List = res.data.data
                    this.isLoading = false
                    this.loadingShow = false
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
.nav-bar{
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
}
.strat{
    padding-bottom:50px;
    .bottom-init{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ccc;
    }
}
</style>