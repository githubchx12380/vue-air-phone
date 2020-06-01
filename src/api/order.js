import request from '@/http/request'

//获取订单
export const get_orderinfo = (id) => {
    return request({
        url: '/v2/get_orderinfo/',
        params:{
            id
        }
    })
}


//存入本地存储数据
export const localStore_Order = (arr) => {
    return request({
        method:'post',
        url:'/v2/localStore_orider',
        data:arr
    })
}


//buy_state 传 1 代表查询待支付订单,传 2 查询已支付订单  带上userId
export const buy_stateOrder = (obj) => {
    return request({
        url:'/v2/buy_stateOrder',
        params:obj
    })
}


//删除订单  传入订单时间和userid
export const del_order = (obj) => {
    return request({
        url:'/v2/del_order',
        params:obj
    })
}


//获取订单号
export const get_orderNo = (obj) => {
    return request({
        url:'/v2/get_orderNo',
        params:obj
    })
}

//支付订单
export const Submit_PayMoney = (obj) => {
    return request({
        url:'/v2/SubmitPayMoney',
        params:obj
    })
}

