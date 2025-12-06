// app/[locale]/page.tsx
import {getTranslations} from 'next-intl/server';
import LngChanger from "@/widgets/ui/LngChanger/LngChanger";

interface PageProps {
    params: Promise<{locale: string}>; // Тоже Promise
}

export default async function Page({params}: PageProps) {
    const {locale} = await params; // Await params
    const t = await getTranslations({locale, namespace: ''});

    return (
        <div>
            <LngChanger locale={locale}/>
            <h1>{t('hello')}</h1>
            <p>{t('welcome')}</p>
        </div>
    );
}