// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./localization/en.json'));
register('en-US', () => import('./localization/ja.json'));
// register('pt', () => import('./pt.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
// starts loading 'en-US' and 'en'
