module.exports = {
	env: {
		node: true,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	plugins: [
		'@typescript-eslint'
	],
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
