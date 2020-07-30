import { gsap } from "gsap";

/**
 * The timeline used to animate the underline
 * @type {GSAPTimeline}
 */
const underlineAnimation = gsap.timeline({paused: true});

/**
 * The underline element <span></span> tag.
 * @type {HTMLElement}
 */
const genericUnderline = document.querySelector('[data-js-hook="generic-underline"]');

underlineAnimation.to(genericUnderline, {
  opacity: 1,
  duration: 1,
});

document.addEventListener("DOMContentLoaded", function(){
  gsap.set(genericUnderline, {opacity: 0});
  underlineAnimation.play();
});
