import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

export interface ConfigFactoryResult {
	configs?: TypedFlatConfigItem[]
	options?: OptionsConfig
}

export interface ResolvedConfigs {
	configs: TypedFlatConfigItem[][]
	options: OptionsConfig[]
}

export function resolveConfigs(
	...args: ConfigFactoryResult[]
): ResolvedConfigs {
	const configs: ResolvedConfigs['configs'] = []
	const options: ResolvedConfigs['options'] = []

	for (const config of args) {
		config.configs && configs.push(config.configs)
		config.options && options.push(config.options)
	}

	return {
		configs,
		options,
	}
}
