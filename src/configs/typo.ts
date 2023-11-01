import pluginCasePolice from 'eslint-plugin-case-police'
import type { ConfigFactoryResult } from '../config'

export function typo(): ConfigFactoryResult {
	return {
		configs: [
			{
				name: 'aa900031:typo',
				plugins: {
					'case-police': pluginCasePolice,
				},
				rules: {
					'case-police/string-check': 'warn',
				},
			},
		],
	}
}
