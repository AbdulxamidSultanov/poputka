// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import routing from './routing';

// Создаем тип для локалей на основе routing.locales
type Locale = typeof routing.locales[number];

// Функция для проверки валидности локали
function isValidLocale(locale: string): locale is Locale {
    return (routing.locales as readonly string[]).includes(locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    // Используем функцию-предикат для проверки
    if (!locale || !isValidLocale(locale)) {
        locale = routing.defaultLocale as Locale;
    }

    return {
        locale,
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});