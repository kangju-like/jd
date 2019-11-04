import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
console.log(Vuex)
const store = new Vuex.Store({
    // 仓库 交换数据的源头
    state: {
        sname: "",
        user: ""
            // dname: ""
    },
    getters: {
        // 专门拿state的author
        getSname(state) {
            // 数据出仓库之前可以进行加工
            return state.sname
        },
        getDname(state) {
            // 数据出仓库之前可以进行加工
            return state.dname
        },
        getUser(state) {
            // 数据出仓库之前可以进行加工
            return state.user
        },
    },
    mutations: {
        setSname(state, data) {
            state.sname = data
        },
        setDname(state, data) {
            state.dname = data
        },
        setUser(state, data) {
            state.user = data
        }
    },
    actions: {

    }
})
export default store