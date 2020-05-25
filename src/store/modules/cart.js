const state = {
    flight_pay:[]
}


const mutations =  {
    'ADD_CART'(state,data) {
        // console.log(state);
       if(!state.flight_pay){
           let arr = []
           arr.push(data)
           state.flight_pay = arr
           return
       }
       state.flight_pay.push(data)
       
    }
}


const actions = {
    // 'ADD_CART'(state,data) {
    //     console.log(state);
        
    // //    state.flight_pay.push(data)
    // }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}