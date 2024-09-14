import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { isPackagesExists } from '../utils'

export function svelte(
	options: OptionsConfig,
): ConfigFactoryResult {
	return {
		options: {
			svelte: options.svelte
				?? isPackagesExists([
					'eslint-plugin-svelte',
				]),
		},
	}
}
