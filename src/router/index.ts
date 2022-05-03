import {createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized} from "vue-router";
import Playground from "../views/Playground.vue";
import Login from "../views/auth/Login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/",
            name: "playground",
            component: Playground,
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    if (to.name === 'login') {
        next();
    } else {
        await checkAuthentication(to, from, next)
    }
})

function checkAuthentication(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    if (true) { //todo: check store for authentication useUserStore().isAuthenticated
        next();
    } else {
        next({ name: 'login' })
    }
}

export default router;