import {createRouter, createWebHistory} from "vue-router";
import Playground from "../views/Playground.vue";
import Login from "../views/auth/Login.vue";
import {useAuthStore} from "../store";

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
    const store = useAuthStore()
    if (to.name === 'login') {
        next();
    } else if (await store.isLoggedIn()) {
        next();
    } else {
        next({ name: 'login' })
    }
})


export default router;