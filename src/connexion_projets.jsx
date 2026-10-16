import {createRoot} from "react-dom/client";
import DepthCarousel from "./DepthCarousel.jsx"; 
import { project_one, project_three, project_two } from "./Project_data.js";
const galleries=[
    ["project-one",project_one],
    ["project-two",project_two],
    ["project-three",project_three]
];

galleries.forEach(([idElement,items]) => {
    const element = document.getElementById(idElement);
    if(element){
        createRoot(element).render(
            <DepthCarousel
                items={items}
                depth={220}
                spread={90}
                tilt={22}
                tiltDirection="right"
                perspective={1400}
                visibleCards={4}
                falloff={0.2}
                blur={6}
                autoplay={false}
                loop
                cardWidth={500}
                cardHeight={350}
                radius={18}
                tint="#05060a"
                duration={700}
                ease="power3.out"
                autoplayDelay={3200}
                showControls={false}
                showIndicators={false}
            />
        );
    }
});