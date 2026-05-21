import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import isInCi from 'is-in-ci'
import { fileProgressPlugin } from '../plugins/file-progress'

export function progress(
	options: OptionsConfig,
): ConfigFactoryResult {
	const {
		isInEditor,
	} = options

	return {
		configs: [
			{
				name: 'aa900031:progress',
				plugins: {
					progress: fileProgressPlugin,
				},
				rules: {
					'progress/activate': 2,
				},
				settings: {
					progress: {
						hide: isInCi || isInEditor === true,
					},
				},
			},
		],
	}
}
