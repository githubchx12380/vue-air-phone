import {vacationsAir} from '@/api/Lowprice'

const state = {
    depFilter:{
        
    },
    successAir:{

    }
}


const mutations =  {
    'originDep'(state,depCityCode) {
        state.depFilter.depCityCode = depCityCode  
    },
    'vacationId'(state,vacationId) {
        state.depFilter.vacationId = vacationId  
    },
    'Air_Data'(state,Air) {
        state.successAir = Air
    }
}


const actions = {
    'UPDATE_DEP'({state,commit},depCode) {
        commit('originDep',depCode)
        vacationsAir(state.depFilter).then(res => {
           commit('Air_Data',res.data)
        })
    },
    'UPDATE_TAB_ID'({state,commit},TabUd) {
        commit('vacationId',TabUd)
        vacationsAir(state.depFilter).then(res => {
            commit('Air_Data',res.data)
        })
    }
}


export default {
    namespaced:true,
    state,
    mutations,
    actions,
}