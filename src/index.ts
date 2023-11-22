import defu from 'defu'
import type { OptionsConfig, UserConfigItem } from '@antfu/eslint-config'
import antfu from '@antfu/eslint-config'
import { resolveConfigs } from './config'
import { indent } from './configs/indent'
import { typo } from './configs/typo'
import { progress } from './configs/progress'

export type Options =
	& OptionsConfig

export async function aa900031(
	options: Options = {},
	...userConfigs: (UserConfigItem | UserConfigItem[])[]
): Promise<UserConfigItem[]> {
	const config = await resolveConfigs(
		indent(),
		typo(),
		progress(),
	)

	return await antfu(
		defu({}, ...config.options, options),
		...config.configs,
		...userConfigs,
	)
}

export default aa900031
