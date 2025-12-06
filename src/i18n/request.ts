// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import routing from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    let locale = await requestLocale; // 'ru' из middleware


    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale; // Fallback на 'uz'
    }


    return {
        locale,
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});