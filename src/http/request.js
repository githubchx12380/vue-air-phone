import axios from 'axios'
import { Toast } from 'vant'

const request = axios.create({
    baseURL: 'http://localhost:1337/api'
})

export default request

// 响应拦截器
request.interceptors.response.use(res => {
    const { msg, code } = res.data
    const errerrRegExp = /^3\d{2}$/;
    if (msg && errerrRegExp.test(code)) {
        Toast.fail(msg)
    }
    return res
})