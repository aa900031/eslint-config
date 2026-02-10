import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { isPackagesExists } from '../utils'

export function angular(
	options: OptionsConfig,
): ConfigFactoryResult {
	return {
		options: {
			angular: options.angular
				?? isPackagesExists([
					'@angular-eslint/eslint-plugin',
					'@angular-eslint/eslint-plugin-template',
					'@angular-eslint/template-parser',
				]),
		},
	}
}
