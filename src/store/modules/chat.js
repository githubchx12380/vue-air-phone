const state = {
    list:[]
}


const mutations =  {
    'ADD_CHAT'(state,data) {
        state.list.push(data)
        // console.log(data);
    }
}


const actions = {
    
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}