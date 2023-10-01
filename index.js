const configTs = require('@antfu/eslint-config-ts')
const configBasic = require('@antfu/eslint-config-basic')

const hasTs = (() => {
	try {
		const ts = require('typescript')
		return !!ts
	}
	catch (e) {
		return false
	}
})()

function indentOpts() {
	return {
		'jsonc/indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		...(hasTs
			? {
					'@stylistic/ts/indent': [configTs.rules['@stylistic/ts/indent'][0], 'tab', configTs.rules['@stylistic/ts/indent'][2]],
				}
			: {
					'@stylistic/js/indent': [configBasic.rules['@stylistic/js/indent'][0], 'tab', configBasic.rules['@stylistic/js/indent'][2]],
				}),
	}
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: '@antfu',
	rules: {
		'@stylistic/js/no-tabs': 0,
		'@stylistic/js/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		...indentOpts(),
	},
}
