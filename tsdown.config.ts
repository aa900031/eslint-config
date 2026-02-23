import { customExports } from '@aa900031/tsdown-config'
import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: [
		'src/index.ts',
	],
	shims: true,
	format: ['esm'],
	exports: {
		customExports,
	},
	clean: true,
	dts: true,
	external: [
		'eslint-flat-config-utils',
	],
})
