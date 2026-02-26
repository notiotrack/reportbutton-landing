import { translations, type Language } from './translations';

// Make translations available globally
if (typeof window !== 'undefined') {
	(window as any).translations = translations;
}

const STORAGE_KEY = 'notifybutton-lang';

export function getLanguage(): Language {
	if (typeof window === 'undefined') return 'en';
	
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored && (stored === 'en' || stored === 'pl')) {
		return stored as Language;
	}
	
	// Detect from browser
	const browserLang = navigator.language || (navigator as any).userLanguage;
	if (browserLang.startsWith('pl')) {
		return 'pl';
	}
	return 'en';
}

export function setLanguage(lang: Language) {
	if (typeof window === 'undefined') return;
	
	localStorage.setItem(STORAGE_KEY, lang);
	document.documentElement.lang = lang;
	updateContent(lang);
}

export function updateContent(lang: Language) {
	if (typeof window === 'undefined') return;
	
	const t = translations[lang];
	if (!t) return;
	
	// Update all elements with data-i18n attribute
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.getAttribute('data-i18n');
		if (!key) return;
		
		const keys = key.split('.');
		let value: any = t;
		for (const k of keys) {
			value = value?.[k];
		}
		
		if (value !== undefined) {
			if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
				const input = el as HTMLInputElement | HTMLTextAreaElement;
				if (input.placeholder !== undefined) {
					input.placeholder = value;
				}
			} else {
				el.textContent = value;
			}
		}
	});
	
	// Update elements with data-i18n-placeholder
	document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
		const key = el.getAttribute('data-i18n-placeholder');
		if (!key) return;
		
		const keys = key.split('.');
		let value: any = t;
		for (const k of keys) {
			value = value?.[k];
		}
		
		if (value !== undefined && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
			(el as HTMLInputElement | HTMLTextAreaElement).placeholder = value;
		}
	});
}
