import { createRouter, createWebHistory } from "vue-router";
import Playground from "../views/Playground.vue";
import NotFound from "../views/errors/NotFound.vue";
import Login from "../views/auth/Login.vue";
import SignUp from "../views/auth/SignUp.vue";
import SignUpStepAccount from "../views/auth/SignUpStepAccount.vue";
import SignUpStepPersonal from "../views/auth/SignUpStepPersonal.vue";
import SignUpSuccess from "../views/auth/SignUpSuccess.vue";
import VerifyEmail from "../views/auth/verify/VerifyEmail.vue";
import VerifyEmailSuccess from "../views/auth/verify/VerifyEmailSuccess.vue";
import VerifyEmailAlreadySuccess from "../views/auth/verify/VerifyEmailAlreadySuccess.vue";
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
			redirect: {
				name: "signupStepAccount",
			},
			children: [
				{
					path: "1",
					name: "signupStepAccount",
					component: SignUpStepAccount,
					meta: { requiresAuth: false },
				},
				{
					path: "2",
					name: "signupStepPersonal",
					component: SignUpStepPersonal,
					meta: { requiresAuth: false },
				},
				{
					path: "success",
					name: "signupSuccess",
					component: SignUpSuccess,
					meta: { requiresAuth: false },
				},
			],
		},
		{
			path: "/email/verify",
			name: "verify",
			component: VerifyEmail,
			children: [
				{
					path: "success",
					name: "emailVerifySuccess",
					component: VerifyEmailSuccess,
					meta: { requiresAuth: false },
				},
				{
					path: "already-success",
					name: "emailAlreadyVerified",
					component: VerifyEmailAlreadySuccess,
					meta: { requiresAuth: false },
				},
			],
		},
		{
			path: "/",
			name: "playground",
			component: Playground,
			meta: { requiresAuth: true },
		},
		{
			//https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: NotFound,
			meta: { requiresAuth: false },
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
