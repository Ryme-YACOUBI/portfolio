export function translateItems(items, prefix, lang) {
    const translations = window.i18n.translations[lang];

    return items.map((item, index) => {
        const newItem = { ...item };

        for (const field in item) {
            const key = `${prefix}.${index}.${field}`;

            if (translations[key] && typeof item[field] === "string") {
                newItem[field] = translations[key];
            }
        }

        return newItem;
    });
}