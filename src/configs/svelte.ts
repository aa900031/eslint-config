import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { isPackagesExists } from '../utils'

export async function svelte(
	options: OptionsConfig,
): Promise<ConfigFactoryResult> {
	return {
		options: {
			svelte: options.svelte
			?? isPackagesExists([
				'eslint-plugin-svelte',
			]),
		},
	}
}
