// app/[locale]/page.tsx
import {getTranslations} from 'next-intl/server';
import LngChanger from "@/widgets/ui/LngChanger/LngChanger";
import ThemeSwitcher from "@/widgets/ui/ThemeSwitcher/ThemeSwitcher";

interface PageProps {
    params: Promise<{locale: string}>; // Тоже Promise
}

export default async function Page({params}: PageProps) {
    const {locale} = await params; // Await params
    const t = await getTranslations({locale, namespace: ''});
    console.log('Current theme:');
    return (
        <div>
            <LngChanger locale={locale}/>
            <ThemeSwitcher />
            <h1>{t('hello')}</h1>
            <p>{t('welcome')}</p>
        </div>
    );
}