import { get_orderinfo } from '@/api/order.js'

const state = {
    flight_pay:[]
}


const mutations =  {
    'ADD_CART_COMMIT'(state,data) {
        if(!state.flight_pay){
            let arr = []
            arr.push(data)
            state.flight_pay = [...arr]
            return
        }
        state.flight_pay.push(data)
    },
    'DEL_CART_COMMIT'(state,index) {
        state.flight_pay.splice(index,1)
    }
}


const actions = {
    //添加购物车商品
    'ADD_CART'({commit,state},data) {
        commit('ADD_CART_COMMIT',data)
    },
    //删除购物车商品
    'DEL_CART'({commit,state},data) {
        commit('DEL_CART_COMMIT',data)
    },
    //用户注册登录以后判断一下有无本地数据,如果有的话,添加至数据库
    'LOCASTOREAGE_CART'({commit,state},data) {
        get_orderinfo(6).then(res => {
            console.log(res);
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}