import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import pluginFileProgress from 'eslint-plugin-file-progress'
import isInCi from 'is-in-ci'

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
					progress: pluginFileProgress,
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
