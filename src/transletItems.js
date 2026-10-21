/*
 * Remplace, pour chaque item, les champs texte pour lesquels une clé française existe.
 * Clé attendue : "<prefix>.<index>.<champ>"  ex. "aboutMe.0.title"
 * L'anglais reste celui de tes données : seules les clés FR sont à ajouter.
 */
export function translateItems(items, prefix, lang) {
    const dictionary = (window.i18n && window.i18n.translations[lang]) || {};

    return items.map((item, index) => {
        const translated = { ...item };
        Object.keys(item).forEach((field) => {
            const key = `${prefix}.${index}.${field}`;
            if (typeof item[field] === "string" && key in dictionary) {
                translated[field] = dictionary[key];
            }
        });
        return translated;
    });
}