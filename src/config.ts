import type { OptionsConfig, UserConfigItem } from '@antfu/eslint-config'

export interface ConfigFactoryResult {
	configs?: UserConfigItem[]
	options?: OptionsConfig
}

export interface ResolvedConfigs {
	configs: UserConfigItem[][]
	options: OptionsConfig[]
}

export async function resolveConfigs(
	...args: (ConfigFactoryResult | Promise<ConfigFactoryResult>)[]
): Promise<ResolvedConfigs> {
	const configs: ResolvedConfigs['configs'] = []
	const options: ResolvedConfigs['options'] = []

	for (const config of await Promise.all(args)) {
		config.configs && configs.push(config.configs)
		config.options && options.push(config.options)
	}

	return {
		configs,
		options,
	}
}
