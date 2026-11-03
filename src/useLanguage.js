
import { useState, useEffect } from 'react';

export default function useLanguage() {
    const initialLanguage = window.i18n.getLanguage() || 'en';

    const [language, setLanguage] = useState(initialLanguage);
    useEffect(function() {
        function onChange(event) {
            const newLanguage = event.detail.lang;
            setLanguage(newLanguage);
        }
        document.addEventListener('i18n:change', onChange);
        return function() {
            document.removeEventListener('i18n:change', onChange);
        };

    }, []);
    return language;
}
