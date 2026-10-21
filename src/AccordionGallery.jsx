import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

import './AccordionGallery.css';

/*
 * Version "texte" de l'AccordionGallery de React Bits.
 * Chaque carte : { title, description, tags?, link?, color? }
 */
const DEFAULT_ITEMS = [
  {
    title: 'Formation',
    description:
      "Cycle préparatoire à l'EMSI : mathématiques, physique, algorithmique et bases de l'informatique.",
    tags: ['EMSI', 'Maths', 'Algo'],
    color: '#7b1e3a'
  },
  {
    title: 'Compétences',
    description:
      'HTML, CSS, JavaScript, Python, Django REST Framework, LaTeX.',
    tags: ['HTML', 'CSS', 'JS', 'Python'],
    color: '#1e3a7b'
  },
  {
    title: 'Projets',
    description:
      'Portfolio web, interface front-end reliée à une API Django, rapport de stage en LaTeX.',
    tags: ['Front-end', 'Django', 'LaTeX'],
    color: '#1e7b5a'
  },
  {
    title: 'Expérience',
    description:
      "Stage d'initiation : découverte du monde professionnel et rédaction du rapport associé.",
    tags: ['Stage', 'Rapport'],
    color: '#7b5a1e'
  },
  {
    title: 'Contact',
    description:
      'Un projet, une opportunité ? Écrivez-moi via le formulaire de contact.',
    tags: ['Formulaire', 'Email'],
    link: '#contact',
    color: '#4a1e7b'
  }
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#ffffff',
  textColor = '#ffffff',
  height = 420,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  tilt = 6,
  trigger = 'hover',
  className = ''
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);

  const vertical = orientation === 'vertical';
  const count = items.length;

 const [active, setActive] = useState(0);
 useEffect(() => {
  setActive(Math.min(Math.max(defaultIndex, 0), items.length - 1));
}, [items, defaultIndex]);

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;

      tlRef.current?.kill();

      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;

        const isActive = i === active;
        const rot = isActive ? 0 : i < active ? tilt : -tilt;

        const rotProp = vertical
          ? { rotateX: -rot }
          : { rotateY: rot };

        tl.to(
          panel,
          {
            flexGrow: isActive ? grow : 1,
            ...rotProp,
            duration: dur,
            ease
          },
          0
        );
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      prefersReduced
    ]
  );

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
      panelRefs.current[(i + 1) % count]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
      panelRefs.current[(i - 1 + count) % count]?.focus();
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${
        vertical ? ' accordion-gallery--vertical' : ''
      }${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical
          ? `${Math.round(height * 1.6)}px`
          : `${height}px`
      }}
      role="list"
      aria-label="Sections du CV"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? 'a' : 'div';

        return (
          <Tag
            key={item.title}
            ref={el => (panelRefs.current[i] = el)}
            className={`ag-panel${
              isActive ? ' ag-panel--active' : ''
            }`}
            style={{
              '--ag-card': item.color || '#2a1a3a',
              borderRadius: `${radius}px`
            }}
            href={item.link || undefined}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="ag-panel__index">
              {String(i + 1).padStart(2, '0')}
            </span>

            <span
              className="ag-panel__vtitle"
              aria-hidden={isActive}
            >
              {item.title}
            </span>

            <span className="ag-panel__body">
              <span className="ag-panel__bar" />

              <span className="ag-panel__title">
                {item.title}
              </span>

              <span className="ag-panel__desc">
                {item.description}
              </span>

              {item.tags && item.tags.length > 0 && (
                <span className="ag-panel__tags">
                  {item.tags.map(tag => (
                    <span className="ag-panel__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </span>
              )}
            </span>
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;