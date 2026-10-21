import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';

import AccordionGallery from './AccordionGallery';
import { resumeData } from './resumeData';
import useLanguage from './useLanguage';

import './index.css';
import './App.css';

function ResumeGalleries() {
    const language = useLanguage();

    const galleries = [
        ['education-cards', resumeData[language].educationItems],
        ['skills-cards', resumeData[language].skillsItems],
        ['experience-cards', resumeData[language].experienceItems],
        ['projects-cards', resumeData[language].projectsItems],
        ['about-me-cards', resumeData[language].aboutMeItems],
        ['contact-cards', resumeData[language].contactItems]
    ];

    return (
        <>
            {galleries.map(([elementId, items]) => (
                <Gallery
                    key={elementId}
                    elementId={elementId}
                    items={items}
                />
            ))}
        </>
    );
}

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

const rootElement = document.getElementById('resume-galleries-root');

if (rootElement) {
    createRoot(rootElement).render(<ResumeGalleries />);
}