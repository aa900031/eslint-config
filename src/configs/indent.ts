import { stylistic } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'

export function indent(): ConfigFactoryResult {
	const _stylistic = stylistic()
	const ruleIndent = _stylistic[0].rules?.['style/indent']

	return {
		configs: [
			{
				name: 'aa900031:indent',
				rules: {
					'style/no-tabs': 0,
					'style/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
					// eslint-disable-next-line ts/ban-ts-comment
					// @ts-expect-error
					'style/indent': [ruleIndent[0], 'tab', ruleIndent[2]],
				},
			},
		],
		overrides: {
			vue: {
				// eslint-disable-next-line ts/ban-ts-comment
				// @ts-expect-error
				'vue/html-indent': ['error', 'tab'],
			},
			jsonc: {
				// eslint-disable-next-line ts/ban-ts-comment
				// @ts-expect-error
				'jsonc/indent': ['error', 'tab'],
			},
		},
	}
}
