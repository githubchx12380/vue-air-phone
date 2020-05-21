import request from '../http/request'


export const flightsInfo = (obj) => {  //选择出发地获取推荐城市
    return request({
        url:'/flights_info',
        params:obj
    })
}
