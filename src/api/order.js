import request from '@/http/request'

//获取订单
export const get_orderinfo = (id) => {
    return request({
        url: '/v1/get_orderinfo/',
        params:{
            id:5
        }
    })
}


