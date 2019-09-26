// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import httpUrl from '@/api/httpUrl.js';
Vue.prototype.$httpUrl = httpUrl;

import axios from 'axios'
Vue.prototype.$axios = axios;

import '@/style/reset.css';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})