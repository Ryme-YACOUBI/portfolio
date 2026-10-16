import { createRoot } from "react-dom/client";
import CircularCarousel from "./CircularCarousel";
import { carousel } from "./data_journey";


const element=document.getElementById("carousel_cards");
    if(element){
        createRoot(element).render(
            <CircularCarousel
            items={carousel}
            />
        );
    }