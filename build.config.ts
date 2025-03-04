import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	entries: [
		'src/index',
	],
	clean: true,
	declaration: 'node16',
	externals: [
		'eslint-flat-config-utils',
	],
	hooks: {
		'rollup:dts:options': (ctx, options) => {
			// @ts-expect-error - remove commonjs plugin
			options.plugins = options.plugins.filter(i => i?.name !== 'commonjs')
		},
	},
})
