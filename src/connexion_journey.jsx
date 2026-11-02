import { createRoot } from 'react-dom/client';

import AccordionGallery from './AccordionGallery';
import { carousel as carousel_en } from './data_journey';
import { carousel as carousel_fr } from './data_journey_fr';
import useLanguage from './useLanguage';

function JourneyCarousel() {
    const language = useLanguage();
    const items = language === 'fr' ? carousel_fr : carousel_en;

    return (
        <AccordionGallery
            key={language}
            items={items}
            className="journey-gallery"
            height={320}
            accentColor="#A6CFD5"
            ariaLabel={language === 'fr' ? 'Mon parcours' : 'My journey'}
        />
    );
}

const element = document.getElementById('carousel_cards');

if (element) {
    createRoot(element).render(<JourneyCarousel />);
}