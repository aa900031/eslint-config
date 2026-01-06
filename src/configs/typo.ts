import type { ConfigFactoryResult } from '../config'
import pluginCasePolice from 'eslint-plugin-case-police'

export function typo(): ConfigFactoryResult {
	return {
		configs: [
			...pluginCasePolice.configs.recommended as any,
		],
	}
}
