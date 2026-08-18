import { node } from '@aa900031/tsdown-config'

export default node({}, {
	dts: true,
	shims: true,
	deps: {
		neverBundle: [
			'eslint-flat-config-utils',
		],
	},
})
