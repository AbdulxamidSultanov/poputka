'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import routing from '@/i18n/routing';

export default function LanguageSwitcher({locale}: {locale: string}) {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (newLocale: string) => {
        const pathWithoutLocale = pathname.replace(
            new RegExp(`^/(${routing.locales.join('|')})`),
            ''
        ) || '/';
        router.replace(pathWithoutLocale, { locale: newLocale });
    };

    return (
        <select value={locale} onChange={(e) => handleChange(e.target.value)}>
            {routing.locales.map((loc) => (
                <option key={loc} value={loc}>
                    {loc.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
