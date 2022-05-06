import { createRouter, createWebHistory } from "vue-router";
import Playground from "../views/Playground.vue";
import Login from "../views/auth/Login.vue";
import SignUp from "../views/auth/SignUp.vue";
import { useAuthStore } from "../store";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/login",
			name: "login",
			component: Login,
			meta: { requiresAuth: false },
		},
		{
			path: "/signup",
			name: "signup",
			component: SignUp,
			meta: { requiresAuth: false },
		},
		{
			path: "/",
			name: "playground",
			component: Playground,
			meta: { requiresAuth: true },
		},
	],
});

router.beforeEach(async (to, from, next) => {
	const store = useAuthStore();
	if (to.meta.requiresAuth) {
		if (store.isAuthenticated) {
			next();
		} else {
			next({ name: "login" });
		}
	} else {
		next();
	}
});

export default router;
