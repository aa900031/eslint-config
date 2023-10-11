import type { ConfigItem, OptionsConfig } from '@antfu/eslint-config'
import antfu from '@antfu/eslint-config'
import defu from 'defu'
import { resolveConfigs } from './config'
import { indent } from './configs/indent'
import { typo } from './configs/typo'

export type Options =
	& OptionsConfig

export function aa900031(
	options: Options = {},
): ConfigItem[] {
	const {
		configs,
		overrides,
	} = resolveConfigs(
		indent(),
		typo(),
	)

	options = defu(options, {
		overrides: defu(options.overrides, ...overrides),
	})

	return antfu(
		options,
		...configs,
	)
}

export default aa900031
