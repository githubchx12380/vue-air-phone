import {vacationsData} from '@/api/Lowprice'

const state = {
    depFilter:{
        
    }
}


const mutations =  {
    'originDep'(state,depCityCode) {
        state.depFilter.depCityCode = depCityCode  
    },
    'vacationId'(state,vacationId) {
        state.depFilter.vacationId = vacationId  
    }
}


const actions = {
    'UPDATE_DEP'({state,commit},depCode) {
        commit('originDep',depCode)
        vacationsData(state.depFilter)
    },
    'UPDATE_TAB_ID'({state,commit},TabUd) {
        commit('vacationId',TabUd)
        vacationsData(state.depFilter)
    }
}

const getters = {
    computeds(state) {
        vacationsData(state.depFilter)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}