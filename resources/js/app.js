require('./bootstrap');

import Vue from 'vue'
import axios from './axios';
import App from './components/App.vue'
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.prototype.$http = axios;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
function loggedIn(){
    return localStorage.getItem('token') === null ? false : true;
}


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth))
    {
        if (!loggedIn())
        {
            next({
            path: '/login',
            query: { redirect: to.fullPath }
            })
        }
        else
        {
            next()
        }
    }
    else if(to.matched.some(record => record.meta.guest))
    {
        if (loggedIn())
        {
            next({
            path: '/',
            query: { redirect: to.fullPath }
            })
        }
        else
        {
            next()
        }
    }
    else
    {
        next()
    }
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});

