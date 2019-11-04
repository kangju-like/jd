// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "../src/vuex/store.js"
import axios from "axios"
import router from './router'
import './assets/app.css'
import "less-loader"
import 'less'
Vue.prototype.axios = axios;
// import "./assets/chajian.js"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})