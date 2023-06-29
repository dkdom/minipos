import { createWebHistory, createRouter } from "vue-router";

import store from "../page/store.vue";
import pos from "../page/pos.vue";
import transection from "../page/transection.vue";
import report from "../page/report.vue";
import nopage from "../page/nopage.vue";

export const routes = [
    {
        name: "store",
        path: "/",
        component: store
    },
    {
        name: "pos",
        path: "/pos",
        component: pos
    },
    {
        name: "transection",
        path: "/transection",
        component: transection
    },
    {
        name: "report",
        path: "/report",
        component: report
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

export default router;