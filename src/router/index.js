import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const createRouter = routes =>{
    return new VueRouter({
        routes
    })
}

const myRouter = [
    {path:"/",component:()=>import("@/page/home")},
    {path:"/aside",component:()=>import("@/page/aside")},
    {path:"/about",component:()=>import("@/page/aboutMe")}
]


const router = createRouter(myRouter)

export default router