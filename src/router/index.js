import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Dl from '../views/dl.vue'
import Search from "../views/search.vue"
import Class from "../views/class.vue"
import twoLogin from '../views/loginTwo.vue'
import oneLogin from '../views/loginOne.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/dl',
        name: 'dl',
        component: Dl
    }, {
        path: '/search',
        name: 'search',
        component: Search
    }, {
        path: '/class',
        name: 'class',
        component: Class
    }, {
        path: '/twoLogin',
        name: 'twoLogin',
        component: twoLogin
    }, {
        path: '/oneLogin',
        name: 'oneLogin',
        component: oneLogin
    }]
})