import type { ConfigItem, OptionsConfig } from '@antfu/eslint-config'
import antfu from '@antfu/eslint-config'
import defu from 'defu'
import { resolveConfigs } from './config'
import { indent } from './configs/indent'
import { typo } from './configs/typo'
import { progress } from './configs/progress'

export type Options =
	& OptionsConfig

export function aa900031(
	options: Options = {},
	...userConfigs: (ConfigItem | ConfigItem[])[]
): ConfigItem[] {
	const config = resolveConfigs(
		indent(),
		typo(),
		progress(),
	)

	return antfu(
		defu({}, ...config.options, options),
		...config.configs,
		...userConfigs,
	)
}

export default aa900031
