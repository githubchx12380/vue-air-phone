import request from '@/http/request'

//获取单张机票信息
export const select_air = (id) => {
    return request({
        url:'/select_air/' + id
    })
}
