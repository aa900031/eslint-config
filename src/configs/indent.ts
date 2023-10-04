import { stylistic } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'

export function indent(): ConfigFactoryResult {
	const _stylistic = stylistic()
	const ruleIndent = _stylistic[0].rules?.['style/indent']

	return {
		configs: [
			{
				name: 'aa900031:indent:stylistic',
				rules: {
					'style/no-tabs': 0,
					'style/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
					'style/indent': [ruleIndent[0], 'tab', ruleIndent[2]],
				},
			},
		],
		overrides: {
			vue: {
				'vue/html-indent': ['error', 'tab'],
			},
			jsonc: {
				'jsonc/indent': ['error', 'tab'],
			},
		},
	}
}
