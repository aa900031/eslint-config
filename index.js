const configTs = require('@antfu/eslint-config-ts')
const configBasic = require('@antfu/eslint-config-basic')

const hasTs = (() => {
	try {
		const ts = require('typescript')
		return !!ts
	} catch (e) {
		return false
	}
})()

const indentOpts = () => ({
	'jsonc/indent': ['error', 'tab'],
	'vue/html-indent': ['error', 'tab'],
	...(hasTs ? {
		'@typescript-eslint/indent': [configTs.rules['@typescript-eslint/indent'][0], 'tab', configTs.rules['@typescript-eslint/indent'][2]],
	} : {
		'indent': [configBasic.rules.indent[0], 'tab', configBasic.rules.indent[2]],
	})
})

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: '@antfu',
	rules: {
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		...indentOpts(),
	},
}
