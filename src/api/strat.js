import request from '@/http/request'


//获取攻略文章数据
export const Select_stratCover = () => {
    return request({
        method:'get',
        url:'/Select_strat',
    })
}



//获取单个文章数据
export const Select_strat_detail = (id) => {
    return request({
        url:'/select_stratdetail',
        params:{
            id
        }
    })
}