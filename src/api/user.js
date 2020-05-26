import request from '@/http/request'

//登录功能
export const userLogin = (username, password) => {
    return request({
        url: '/flight_login',
        method: 'post',
        data: {
            username, password
        }
    })
}

// 注册功能
export const userRegister = (username, password) => {
    return request({
        url: '/flight_register',
        method: 'post',
        data: {
            username, password
        }
    })
}



//查询个人信息
export const get_webuserinfo = (id) => {
    return request({
        url:'/v1/get_webuserinfo',
        params:{
            id
        }
    })
}