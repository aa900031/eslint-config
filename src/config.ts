import type { ConfigItem } from '@antfu/eslint-config'

export interface ConfigFactoryResult {
	configs: ConfigItem[]
	overrides?: ConfigItem['rules']
}

export interface ResolvedConfigs {
	configs: ConfigItem[][]
	overrides: Record<string, NonNullable<ConfigItem['rules']>>[]
}

export function resolveConfigs(
	...args: ConfigFactoryResult[]
): ResolvedConfigs {
	const configs: ResolvedConfigs['configs'] = []
	const overrides: ResolvedConfigs['overrides'] = []

	for (const config of args) {
		configs.push(config.configs)
		config.overrides && overrides.push(config.overrides as any)
	}

	return {
		configs,
		overrides,
	}
}
