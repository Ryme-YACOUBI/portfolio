import { useState, useEffect } from 'react';

export default function useLanguage() {
    const [language, setLanguage] = useState(
        window.i18n?.getLanguage() || 'en'
    );

    useEffect(() => {
        const onChange = event => setLanguage(event.detail.lang);
        document.addEventListener('i18n:change', onChange);
        return () => document.removeEventListener('i18n:change', onChange);
    }, []);

    return language;
}