import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { isPackagesExists } from '../utils'

export async function react(
	options: OptionsConfig,
): Promise<ConfigFactoryResult> {
	return {
		options: {
			react: options.react
			?? isPackagesExists([
				'eslint-plugin-react',
				'eslint-plugin-react-hooks',
				'eslint-plugin-react-refresh',
			]),
		},
	}
}
