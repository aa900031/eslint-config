import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { isPackagesExists } from '../utils'

export function unocss(
	options: OptionsConfig,
): ConfigFactoryResult {
	return {
		options: {
			unocss: options.unocss
			?? isPackagesExists([
				'@unocss/eslint-plugin',
			]),
		},
	}
}
