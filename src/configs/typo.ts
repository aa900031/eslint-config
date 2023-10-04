import type { FlatESLintConfigItem } from '@antfu/eslint-config'
import pluginCasePolice from 'eslint-plugin-case-police'

export function typo(): {
	configs: FlatESLintConfigItem[]
} {
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
