import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Saldo from '../components/Saldo.vue'
import Movimientos from '../components/Movimientos.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/saldo",
        component: Saldo
    },
    {
        path: "/movimientos",
        component: Movimientos,
    }
]

export default new VueRouter({
    routes
})