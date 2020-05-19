import request from '@/http/request'

//获取城市列表
export const citylist = () => {
    return request({
        url:'/citylist'
    })
}
