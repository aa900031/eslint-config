import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import antfu, { isInEditorEnv } from '@antfu/eslint-config'
import defu from 'defu'
import { resolveConfigs } from './config'
import { astro } from './configs/astro'
import { indent } from './configs/indent'
import { progress } from './configs/progress'
import { react } from './configs/react'
import { solid } from './configs/solid'
import { svelte } from './configs/svelte'
import { typo } from './configs/typo'
import { unocss } from './configs/unocss'
import { vue } from './configs/vue'

export type Options
	= & OptionsConfig
		& TypedFlatConfigItem

export function aa900031(
	options: Options = {},
	...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.FlatConfig[]>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
	options.isInEditor ??= isInEditorEnv()

	const config = resolveConfigs(
		indent(),
		typo(),
		progress(options),
		react(options),
		svelte(options),
		unocss(options),
		vue(options),
		astro(options),
		solid(options),
	)

	return antfu(
		defu({}, ...config.options, options),
		...config.configs,
		...userConfigs,
	)
}

export default aa900031
