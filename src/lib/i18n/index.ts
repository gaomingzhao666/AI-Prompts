// src/lib/i18n/index.ts
import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'en'

register('en', () => import('$lib/localization/en.json'))
register('cn', () => import('$lib/localization/cn.json'))
register('ja', () => import('$lib/localization/ja.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
})
