import pluginFileProgress from 'eslint-plugin-file-progress'
import type { OptionsConfig } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'

export function progress(
	options: OptionsConfig,
): ConfigFactoryResult {
	const {
		isInEditor,
	} = options

	const isActive = !(isInEditor === true)

	return {
		configs: [
			{
				name: 'aa900031:progress',
				plugins: {
					progress: pluginFileProgress,
				},
				rules: {
					'progress/activate': isActive ? 1 : 0,
				},
			},
		],
	}
}
