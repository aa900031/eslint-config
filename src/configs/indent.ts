import type { ConfigFactoryResult } from '../config'

export function indent(): ConfigFactoryResult {
	return {
		options: {
			stylistic: {
				indent: 'tab',
			},
		},
	}
}
