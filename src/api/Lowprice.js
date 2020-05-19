import request from '../http/request'


export const vacation = () => {  //选择出发地获取推荐城市
    return request({
        url:'/vacation',
    })
}

export const vacationsData = (FilterAirData) => {
    console.log(FilterAirData.depCityCode,FilterAirData.vacationId);
    return new Promise(resolve => {
        resolve('success')
    })
    return request({
        url:'/vacationsData',
        params:{
            depCityCode:FilterAirData.depCityCode,
            vacationId:FilterAirData.vacationId
        }
    })
}