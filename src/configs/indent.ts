import type { ConfigFactoryResult } from '../config'

export function indent(): ConfigFactoryResult {
	return {
		options: {
			stylistic: {
				indent: 'tab',
			},
			overrides: {
				vue: {
					'vue/html-indent': ['error', 'tab'],
				},
				jsonc: {
					'jsonc/indent': ['error', 'tab'],
				},
			},
		},
	}
}
