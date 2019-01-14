import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import login from '../components/login.vue'
import main from '../components/main.vue'
import user from '../components/user.vue'

let routes = [
    {
        path:'/login',
        component:login
    },
    {
        path:'/',
        component:main,
        children:[
            {
              path:'users',
              component:user
            }
          ]
    }
]

let router = new VueRouter ({
    routes
})

export default router;

