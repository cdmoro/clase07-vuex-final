import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movimientos: [
            { "fecha": "11/01/2016", "detalle": "ART TRAB. CASAS. PARTI.", "importe": 48.1 },
            { "fecha": "07/05/2016", "detalle": "CONTRIB. TRAB. CASAS PARTI.", "importe": 57.15 },
            { "fecha": "08/08/2016", "detalle": "IVA", "importe": 448.4 }
        ]
    },
    actions: {
        fetch_movimientos(context) {
            return axios.get('http://localhost:3004/movimientos')
            .then(response => {
                context.commit('PUSH_MOVIMIENTOS', response.data)
            })
            .catch(e => {
                console.error("Error: " + e)
            })
        }
    },
    mutations: {
        PUSH_MOVIMIENTOS(state, movimientos) {
            state.movimientos.push(...movimientos)
        },
        RESET_MOVIMIENTOS(state) {
            state.movimientos = [
                { "fecha": "11/01/2016", "detalle": "ART TRAB. CASAS. PARTI.", "importe": 48.1 },
                { "fecha": "07/05/2016", "detalle": "CONTRIB. TRAB. CASAS PARTI.", "importe": 57.15 },
                { "fecha": "08/08/2016", "detalle": "IVA", "importe": 448.4 }
            ]
        }
    }
  })