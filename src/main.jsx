import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';

import AccordionGallery from './AccordionGallery';
import { resumeData } from './resumeData';

import './index.css';
import './App.css';

function Gallery({ elementId, items }) {
    const [root, setRoot] = useState(null);

    useEffect(() => {
        const element = document.getElementById(elementId);

        if (!element) return;

        const galleryRoot = createRoot(element);
        setRoot(galleryRoot);

        return () => {
            galleryRoot.unmount();
        };
    }, [elementId]);

    useEffect(() => {
        if (!root) return;

        root.render(
    <AccordionGallery
        key={elementId === 'about-me-cards' ? items[0]?.title : elementId}
        defaultIndex={0}
        items={items}
        accentColor="#ffffff"
        textColor="#ffffff"
        height={280}
        gap={12}
        radius={16}
        trigger="hover"
    />
);
    }, [root, items]);

    return null;
}

function ResumeGalleries() {
    const [language, setLanguage] = useState(
        window.i18n?.getLanguage() || 'en'
    );

    useEffect(() => {
        function handleLanguageChange(event) {
            setLanguage(event.detail.lang);
        }

        document.addEventListener('i18n:change', handleLanguageChange);

        return () => {
            document.removeEventListener('i18n:change', handleLanguageChange);
        };
    }, []);

    const data = resumeData[language] || resumeData.en;

    const galleries = [
        ['education-cards', data.educationItems],
        ['skills-cards', data.skillsItems],
        ['experience-cards', data.experienceItems],
        ['projects-cards', data.projectsItems],
        ['about-me-cards', data.aboutMeItems],
        ['contact-cards', data.contactItems]
    ];

    return galleries.map(([elementId, items]) => (
        <Gallery
            key={elementId}
            elementId={elementId}
            items={items}
        />
    ));
}

const controller = document.createElement('div');
document.body.appendChild(controller);

createRoot(controller).render(<ResumeGalleries />);