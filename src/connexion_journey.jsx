import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import CircularCarousel from "./CircularCarousel";
import { carousel as carousel_en } from "./data_journey";
import { carousel as carousel_fr } from "./data_journey_fr";

function JourneyCarousel() {
    const [language, setLanguage] = useState(
        window.i18n?.getLanguage() || "en"
    );

    useEffect(() => {
        function handleLanguageChange(event) {
            setLanguage(event.detail.lang);
        }

        document.addEventListener("i18n:change", handleLanguageChange);

        return () => {
            document.removeEventListener("i18n:change", handleLanguageChange);
        };
    }, []);

    const items = language === "fr" ? carousel_fr : carousel_en;

    return <CircularCarousel key={language} items={items} />;
}

const element = document.getElementById("carousel_cards");

if (element) {
    createRoot(element).render(<JourneyCarousel />);
}