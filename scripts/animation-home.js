import { jeansSlideImages, travelSlideImages } from "../data/slideimages.js";
import {reviews} from '../data/reviews.js';

export function loadAnimation(){

    // for changing the background color and animation of the top menu when scrolled

    // for typing animation of the slogan at the top header
    let i=0;
    function typeWritingAnimation(){
        const headerText='Discover your perfect look';
        const headerTextElement1=document.querySelector('.header-text-1');
        const headerTextElement2=document.querySelector('.header-text-2');
        if(i<headerText.length){
            headerTextElement1.innerHTML+=headerText.charAt(i);
            i++;
            setTimeout(typeWritingAnimation,80);
        }
        if(i===(headerText.length)){
            console.log('hi');
            headerTextElement2.style.animationName='fadein'
            headerTextElement2.style.visibility='visible';
            headerTextElement2.style.animationDuration='3s';
        }
    }
    typeWritingAnimation();
    sessionStorage.setItem('animationLoaded',true);
}

export let isAnimationLoaded=sessionStorage.getItem('animationLoaded');