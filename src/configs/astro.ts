import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { isPackagesExists } from '../utils'

export function astro(
	options: OptionsConfig,
): ConfigFactoryResult {
	return {
		options: {
			astro: options.astro
			?? isPackagesExists([
				'eslint-plugin-astro',
				'astro-eslint-parser',
				'@typescript-eslint/parser',
			]),
		},
	}
}
