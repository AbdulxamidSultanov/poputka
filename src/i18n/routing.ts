// src/i18n/routing.ts
// Определяем типы для локалей
export const locales = ['uz', 'en', 'ru', 'kz'] as const;
export type Locale = typeof locales[number];

const routing = {
    locales,
    defaultLocale: 'uz' as Locale,
    localeDetection: false,
} as const;

export default routing;

export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}