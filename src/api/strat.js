import request from '@/http/request'


//获取攻略文章数据
export const Select_stratCover = () => {
    return request({
        method:'get',
        url:'/Select_strat',
    })
}



