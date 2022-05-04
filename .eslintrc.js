module.exports = {
	env: {
		node: true,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
	rules: {
		"vue/multi-word-component-names": "off",
		"vue/no-unused-vars": [
			"error",
			{
				ignorePattern: "^_",
			},
		],
	},
	ignorePatterns: ["**/src/views/Playground.vue"],
};
