import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import resolvePkg from 'resolve-pkg'
import type { PackageInfo } from 'local-pkg'

export function isPackagesExists(
	pkgs: string[],
	strict = true,
): boolean {
	if (strict)
		return pkgs.every(pkg => resolvePkg(pkg))
	else
		return pkgs.some(pkg => resolvePkg(pkg))
}

export function getPackageInfoSync(
	moduleId: string,
): PackageInfo | undefined {
	const pkgPath = resolvePkg(moduleId)
	if (!pkgPath)
		return

	const filePath = resolve(pkgPath, 'package.json')
	const fileContent = readFileSync(filePath, 'utf8')
	const pkgJson = JSON.parse(fileContent)

	return pkgJson
}
