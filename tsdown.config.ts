import { customExports } from '@aa900031/tsdown-config'
import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: [
		'src/index.ts',
	],
	shims: true,
	format: ['esm'],
	exports: {
		devExports: true,
		customExports,
	},
	clean: true,
	dts: true,
	deps: {
		neverBundle: [
			'eslint-flat-config-utils',
		],
	},
})
