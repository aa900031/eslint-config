import type { ESLint, Linter, Rule } from 'eslint'
import path from 'node:path'
import process from 'node:process'
import nanospinner from 'nanospinner'
import pc from 'picocolors'

export interface FileProgressSettings {
	hide?: boolean
	hideFileName?: boolean
	successMessage?: string
}

type RuleContextCompat = Rule.RuleContext & {
	filename?: string
	settings: {
		progress?: FileProgressSettings
	}
	getCwd?: () => string
	getFilename?: () => string
}

const spinner = nanospinner.createSpinner('', {
	frames: ['|', '/', '-', '\\'],
	color: 'cyan',
})

let bindExit = false
let initialReportDone = false
let exitSettings: Required<FileProgressSettings>

const defaultSettings: Required<FileProgressSettings> = {
	hide: false,
	hideFileName: false,
	successMessage: 'Lint done.',
}

function normalizeSettings(
	settings: FileProgressSettings | undefined,
): Required<FileProgressSettings> {
	return {
		...defaultSettings,
		...settings,
	}
}

function getFilename(
	context: RuleContextCompat,
): string | undefined {
	return context.filename ?? context.getFilename?.()
}

function getCwd(
	context: RuleContextCompat,
): string | undefined {
	return context.cwd ?? context.getCwd?.()
}

function getRelativeFilePath(
	context: RuleContextCompat,
): string | undefined {
	const filename = getFilename(context)
	if (!filename)
		return

	const cwd = getCwd(context)
	return cwd ? path.relative(cwd, filename) : filename
}

function exitCallback(
	exitCode: number,
	settings: Required<FileProgressSettings>,
): void {
	if (exitCode === 0 && settings.hide !== true) {
		spinner.success({
			text: settings.successMessage,
		})
	}
}

const activateRule: Rule.RuleModule = {
	meta: {
		type: 'suggestion',
		messages: {},
		schema: [],
	},
	create(context): Rule.RuleListener {
		const compatibleContext = context as RuleContextCompat
		const settings = normalizeSettings(compatibleContext.settings.progress)

		exitSettings = settings

		if (!bindExit) {
			process.on('exit', (code) => {
				exitCallback(code, exitSettings)
			})
			bindExit = true
		}

		if (settings.hide) {
			return {}
		}

		const relativeFilePath = getRelativeFilePath(compatibleContext)

		if (!settings.hideFileName && relativeFilePath) {
			spinner.update({
				text: `Processing: ${pc.green(relativeFilePath)} \n`,
			})
		}
		else if (!initialReportDone) {
			spinner.update({
				text: 'Linting...\n',
			})
			initialReportDone = true
		}

		spinner.spin()
		return {}
	},
}

export const fileProgressPlugin: ESLint.Plugin = {
	meta: {
		name: 'eslint-plugin-file-progress',
		version: '4.0.0-v9-compat',
	},
	configs: {},
	rules: {
		activate: activateRule,
	},
}

const fileProgressConfigs: Record<string, Linter.Config> = {
	'recommended': {
		name: 'progress/recommended',
		plugins: {
			progress: fileProgressPlugin,
		},
		rules: {
			'progress/activate': 2,
		},
	},
	'recommended-ci': {
		name: 'progress/recommended-ci',
		plugins: {
			progress: fileProgressPlugin,
		},
		rules: {
			'progress/activate': 2,
		},
		settings: {
			progress: {
				hide: process.env.CI === 'true',
			},
		},
	},
}

fileProgressPlugin.configs = fileProgressConfigs

export default fileProgressPlugin
