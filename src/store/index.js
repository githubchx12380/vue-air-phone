import Vue from 'vue'
import Vuex from 'vuex'
import camelcase from 'camelcase'
import getters from './getters'
Vue.use(Vuex)

const moduleStores = {};


const modulesFile = require.context('./modules',true,/\.js$/)
// console.log(modulesFile)
modulesFile.keys().forEach(key => {
    const fileName = key.slice(2, -3);

    const fileNameInCamelCase = camelcase(fileName);

    const fileModule = modulesFile(key).default;
    
    moduleStores[fileNameInCamelCase] = {
        ...fileModule,
    }
    // console.log( moduleStores[fileNameInCamelCase]);
    
    
    
})


export default new Vuex.Store({
    modules:{
        ...moduleStores
    },
})