import { defu } from 'defu'
import type { FlatESLintConfigItem, OptionsConfig } from '@antfu/eslint-config'
import { antfu } from '@antfu/eslint-config'
import { indent } from './configs/indent'
import { typo } from './configs/typo'

export type Options =
	& OptionsConfig

export function aa900031(
	options: Options = {},
) {
	const configs: FlatESLintConfigItem[][] = []
	const overrides: Record<string, FlatESLintConfigItem['rules']>[] = []

	const _indent = indent()
	configs.push(_indent.configs)
	overrides.push(_indent.overrides)

	const _typo = typo()
	configs.push(_typo.configs)

	options = defu(options, {
		overrides: defu(options.overrides, ...overrides),
	})

	return antfu(
		options,
		...configs,
	)
}
