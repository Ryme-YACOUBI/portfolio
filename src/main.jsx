import { createRoot } from 'react-dom/client';

import AccordionGallery from './AccordionGallery';
import { resumeData } from './resumeData';
import useLanguage from './useLanguage';

import './index.css';
import './App.css';

function AboutCards() {
    const language = useLanguage();
    const items = resumeData[language]?.aboutMeItems ?? resumeData.en.aboutMeItems;

    return (
        <AccordionGallery
            key={language}
            items={items}
            height={280}
            gap={12}
            ariaLabel={language === 'fr' ? 'À propos de moi' : 'About me'}
        />
    );
}

const element = document.getElementById('about-me-cards');

if (element) {
    createRoot(element).render(<AboutCards />);
}