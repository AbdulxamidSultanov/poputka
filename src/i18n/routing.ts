import {defineRouting} from "next-intl/routing";

const locales = ['uz', 'en', 'ru', 'kz'] as const;
const defaultLocale = "en" as const;
const localePrefix = 'always' as const;

const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix
});

export default routing;