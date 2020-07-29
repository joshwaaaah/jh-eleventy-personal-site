import { gsap } from "gsap";

/**
 * The timeline used to animate the intro on the
 * homepage.
 * @type {GSAPTimeline}
 */
const homeAnimation = gsap.timeline({paused: true});

/**
 * The <h1></h1> element on the home.
 * @type {HTMLElement}
 */
const homepageTitle = document.querySelector('[data-js-hook="homepage-title"]');

/**
 * The underline <span></span> element
 * in the homepage intro.
 * @type {HTMLElement}
 */
const homepageUnderline = document.querySelector('[data-js-hook="homepage-title-underline"]');

/**
 * The small introduction which shows
 * above the main title.
 * @type {HTMLElement}
 */
const homepageIntroduction = document.querySelector('[data-js-hook="homepage-introduction"]');

homeAnimation.to(homepageIntroduction, {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "back.out(1.7)"
});

homeAnimation.to(homepageTitle, {
  y: 0,
  opacity: 1,
  duration: 0.75,
  ease: "back.out(1.2)"
}, "-=0.5");

homeAnimation.to(homepageUnderline, {
  width: '100%',
  opacity: 1,
  duration: 1,
}, "-=1");

document.addEventListener("DOMContentLoaded", function(){
  gsap.set(homepageIntroduction, {y: -20});
  gsap.set(homepageTitle, {y: 50});
  gsap.set(homepageUnderline, {width: 0});
  homeAnimation.play();
});
