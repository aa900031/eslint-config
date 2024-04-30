import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { isPackagesExists } from '../utils'

export function solid(
	options: OptionsConfig,
): ConfigFactoryResult {
	return {
		options: {
			solid: options.solid
			?? isPackagesExists([
				'eslint-plugin-solid',
			]),
		},
	}
}
