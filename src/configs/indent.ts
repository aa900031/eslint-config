import type { ConfigFactoryResult } from '../config'

export async function indent(): Promise<ConfigFactoryResult> {
	return {
		options: {
			stylistic: {
				indent: 'tab',
			},
		},
	}
}
