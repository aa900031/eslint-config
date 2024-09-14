import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { isPackagesExists } from '../utils'

export function react(
	options: OptionsConfig,
): ConfigFactoryResult {
	return {
		options: {
			react: options.react
				?? isPackagesExists([
					'@eslint-react/eslint-plugin',
					'eslint-plugin-react-hooks',
					'eslint-plugin-react-refresh',
				]),
		},
	}
}
