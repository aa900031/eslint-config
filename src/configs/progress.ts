import pluginFileProgress from 'eslint-plugin-file-progress'
import type { ConfigFactoryResult } from '../config'

export async function progress(): Promise<ConfigFactoryResult> {
	return {
		configs: [
			{
				name: 'aa900031:progress',
				plugins: {
					progress: pluginFileProgress,
				},
				rules: {
					'progress/activate': 1,
				},
			},
		],
	}
}
