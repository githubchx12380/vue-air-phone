import request from '../http/request'


export const vacation = () => {  //选择出发地获取推荐城市
    return request({
        url:'/vacation',
    })
}

export const vacationsAir = (FilterAirData) => {   //通过出发地和假期获取机票数据
    return request({
        url:'/vacationsAir',
        params:FilterAirData
    })
}