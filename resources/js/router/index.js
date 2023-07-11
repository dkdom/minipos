import { createWebHistory, createRouter } from "vue-router";

import store from "../page/store.vue";
import pos from "../page/pos.vue";
import transection from "../page/transection.vue";
import report from "../page/report.vue";
import nopage from "../page/nopage.vue";
import login from "../page/login.vue";
import register from "../page/register.vue";

import { useStore } from "../store/auth";

const authMiddleware =  (to, from, next) => {
    //const token = localStorage.getItem('web_token')
    const store = useStore()
    store.set_token(token)
    if(!token){
        next({
            path:"/login",
            replace: true
        })
    } else{
        next()
    }
}

export const routes = [
    {
        name: "store",
        path: "/",
        component: store,
        meta:{
            middleware: [authMiddleware]
        }
    },
    {
        name: "pos",
        path: "/pos",
        component: pos,
        meta:{
            middleware: [authMiddleware]
        }
    },
    {
        name: "transection",
        path: "/transection",
        component: transection,
        meta:{
            middleware: [authMiddleware]
        }
    },
    {
        name: "report",
        path: "/report",
        component: report,
        meta:{
            middleware: [authMiddleware]
        }
    },
    {
        name: "login",
        path: "/login",
        component: login
    },
    {
        name: "register",
        path: "/register",
        component: register
    },
    {
        name: "nopage",
        path: "/:pathMatch(.*)*",
        component: nopage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0)
    }
});

router.beforeEach((to, from, next)=>{
    const token = localStorage.getItem('web_token')
    if(to.meta.middleware){
        to.meta.middleware.forEach(middleware => middleware(to, from, next))
    }else{
        if(to.path == "/login" || to.path == "/"){
            if(token){
                next({
                    path: "/store",
                    replace: true
                })
            }else{
                next()
            }
        }else{
            next()
        }
    }
})

export default router;