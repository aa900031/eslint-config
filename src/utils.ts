import { isPackageExists } from 'local-pkg'

export function isPackagesExists(
	pkgs: string[],
) {
	return pkgs
		.map(pkg => isPackageExists(pkg))
		.every(exists => exists === true)
}
