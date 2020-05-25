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

