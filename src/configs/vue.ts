import defu from 'defu'
import { major } from 'semver'
import type { OptionsConfig, OptionsVue } from '@antfu/eslint-config'
import type { ConfigFactoryResult } from '../config'
import { getPackageInfoSync, isPackagesExists } from '../utils'

export async function vue(
	options: OptionsConfig,
): Promise<ConfigFactoryResult> {
	const enabled = options.vue
		?? isPackagesExists([
			'vue',
			'nuxt',
			'vitepress',
			'@slidev/cli',
		], false)

	const opts = !enabled
		? false
		: defu((typeof enabled === 'boolean' ? {} : enabled), {
			vueVersion: getVueVersion(),
		} satisfies OptionsVue)

	return {
		options: {
			vue: opts,
		},
	}
}

function getVueVersion(): 2 | 3 {
	const pkgJson = getPackageInfoSync('vue')
	const version = pkgJson?.version
	if (version == null)
		throw new Error('Get Vue version failed, Please check the package "vue" is installed')

	return major(version) as 2 | 3
}
