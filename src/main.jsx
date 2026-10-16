import { createRoot } from 'react-dom/client';

import AccordionGallery from './AccordionGallery';

import {
    educationItems,
    skillsItems,
    experienceItems,
    projectsItems,
    aboutMeItems,
    contactItems
} from './resumeData';

import './index.css';
import './App.css';

const galleries = [
    ['education-cards', educationItems],
    ['skills-cards', skillsItems],
    ['experience-cards', experienceItems],
    ['projects-cards', projectsItems],
    ['about-me-cards', aboutMeItems],
    ['contact-cards', contactItems]
];

galleries.forEach(([elementId, items]) => {
    const element = document.getElementById(elementId);

    if (element) {
        createRoot(element).render(
            <AccordionGallery
                items={items}
                accentColor="#ffffff"
                textColor="#ffffff"
                height={280}
                gap={12}
                radius={16}
                trigger="hover"
            />
        );
    }
});