import { get_orderinfo,localStore_Order } from '@/api/order.js'

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
    async 'LOCASTOREAGE_CART'({commit,state},data) {
        
        //判断本地存储的数据和数据库的数据,如果下订单的时间相同,那么就过滤掉
        //不让他传给数据库,如果数据库没有的话,就添加至数据库
        const res = await get_orderinfo(localStorage.getItem('userId'))
        
        let buy_date = JSON.parse(res.data.data).map(i => i.buy_date)
       
        const result = state.flight_pay.filter(item => {
            item.user_id = localStorage.getItem('userId')
            return !buy_date.includes(item.buy_date)
        })
        
        if(result.length) {
            localStore_Order(result).then(res => {

            })
        }
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}