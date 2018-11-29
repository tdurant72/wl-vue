import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        ferries:[]
    },
    getters:{
        allFerries: state => state.ferries
    },
    mutations:{
        GET_FERRIES:(state, ferries) => {
            state.ferries = ferries
        }
    },
    actions:{
        async getFerries({commit}){
            var proxy = 'https://cors-anywhere.herokuapp.com/';
            axios.get(proxy+"http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=80e61cf4-541b-4651-8228-6376d80567f7")
            .then(response=>{
              commit('GET_FERRIES', response.data)
            })
        }
    }

})