import { createRouter, createWebHistory } from "vue-router";
import Board from "../views/Board.vue";
import Playground from "../views/Playground.vue";
import PostBase from "../views/posts/PostBase.vue";
import Post from "../views/posts/Post.vue";
import PostCreate from "../views/posts/PostCreate.vue";
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
			meta: {
				requiresAuth: false,
				hideNavbar: true,
			},
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
					meta: {
						requiresAuth: false,
						hideNavbar: true,
					},
				},
				{
					path: "2",
					name: "signupStepPersonal",
					component: SignUpStepPersonal,
					meta: {
						requiresAuth: false,
						hideNavbar: true,
					},
				},
				{
					path: "success",
					name: "signupSuccess",
					component: SignUpSuccess,
					meta: {
						requiresAuth: false,
						hideNavbar: true,
					},
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
					meta: {
						requiresAuth: false,
						hideNavbar: true,
					},
				},
				{
					path: "already-success",
					name: "emailAlreadyVerified",
					component: VerifyEmailAlreadySuccess,
					meta: {
						requiresAuth: false,
						hideNavbar: true,
					},
				},
			],
		},
		{
			path: "/post",
			component: PostBase,
			children: [
				{
					path: ":id",
					name: "post.show",
					component: Post,
					meta: { requiresAuth: true },
				},
				{
					path: "create",
					name: "post.create",
					component: PostCreate,
					meta: { requiresAuth: true },
				},
			],
		},
		{
			path: "/playground",
			name: "playground",
			component: Playground,
			meta: {
				requiresAuth: false,
				hideNavbar: true,
			},
		},
		{
			path: "/",
			name: "board",
			component: Board,
			meta: { requiresAuth: false },
		},
	],
});

router.beforeEach(async (to, from, next) => {
	const store = useAuthStore();
	if (to.meta.requiresAuth) {
		console.log(store.isAuthenticated);
		if (store.isAuthenticated) {
			next();
		} else {
			next({ name: "login", query: { redirect: to.fullPath } });
		}
	} else {
		next();
	}
});

export default router;
