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
		},
		{
			path: "/register",
			name: "register",
			component: SignUp,
		},
		{
			path: "/",
			name: "playground",
			component: Playground,
		},
	],
});

router.beforeEach(async (to, from, next) => {
	const store = useAuthStore();
	if (to.name === "login" || to.name === "register") {
		next();
	} else if (store.isAuthenticated) {
		next();
	} else {
		next({ name: "login" });
	}
});

export default router;
