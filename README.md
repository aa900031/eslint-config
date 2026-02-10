# @aa900031/eslint-config

[![npm version](https://img.shields.io/npm/v/@aa900031/eslint-config?style=flat&colorA=18181B&colorB=F0DB4F)](https://npmjs.com/package/@aa900031/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@aa900031/eslint-config?style=flat&colorA=18181B&colorB=F0DB4F)](https://npmjs.com/package/@aa900031/eslint-config)
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)
[![coverage](https://img.shields.io/codecov/c/gh/aa900031/eslint-config?logo=codecov&style=flat&colorA=18181B&colorB=F0DB4F)](https://codecov.io/gh/aa900031/eslint-config)
[![coderabbit](https://img.shields.io/coderabbit/prs/github/aa900031/eslint-config?style=flat&logo=coderabbit&logoColor=FF570A&label=CodeRabbit%20Reviews&colorA=18181B&colorB=F0DB4F)](https://github.com/aa900031/eslint-config)

Extends from [@antfu/eslint-conifg](https://github.com/antfu/eslint-config)

- Indent with tabs
- Auto detect rules: Vue, Svelte, Astro, UnoCSS, Solid, React, Angular
- Auto detect Vue version
- CLI Progress bar

## Usage

Install

```
pnpm i -D eslint @aa900031/eslint-config
```

Create `eslint.config.js` in your project root:

```ts
import { aa900031 } from '@aa900031/eslint-config'

export default aa900031({
})
```

Add script to `package.json`, It's run eslint with cache:

```json
{
	"scripts": {
		"lint": "eslint . --cache --cache-location ./node_modules/.cache/eslint"
	}
}
```

Setup for your IDE:

https://github.com/antfu/eslint-config/tree/main?tab=readme-ov-file#ide-support-auto-fix-on-save
