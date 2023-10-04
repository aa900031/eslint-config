import type { FlatESLintConfigItem } from '@antfu/eslint-config'

export interface ConfigFactoryResult {
	configs: FlatESLintConfigItem[]
	overrides?: FlatESLintConfigItem['rules']
}

export function resolveConfigs(
	...args: ConfigFactoryResult[]
) {
	const configs: FlatESLintConfigItem[][] = []
	const overrides: Record<string, NonNullable<FlatESLintConfigItem['rules']>>[] = []

	for (const config of args) {
		configs.push(config.configs)
		config.overrides && overrides.push(config.overrides)
	}

	return {
		configs,
		overrides,
	}
}
