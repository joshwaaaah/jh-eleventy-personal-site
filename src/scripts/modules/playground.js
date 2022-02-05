import Globe from 'globe.gl';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const N = 20;
const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
}));

// DOM
const globeDOM = document.querySelector('[data-js-globe]')

const myGlobe = Globe({});
myGlobe(globeDOM);

myGlobe.controls().autoRotate = true;
myGlobe.controls().autoRotateSpeed = 0.35;

myGlobe.backgroundColor('#111111')
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .width('500')
        .height('500')
        .pointOfView({lat:0,long:0, altitude: 2}, 500)

        let tl = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: "[data-js-section]",
            pin: true,   // pin the trigger element while active
            start: "top top", // when the top of the trigger hits the top of the viewport
            scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            end: "+=2500",
          }
        });

        tl.to('[data-js-section-1]', {
          opacity: 0,
          display: 'none',
          y: '-10%',
        })

        tl.fromTo('[data-js-section-2]', {
          display: 'none',
          opacity: 0,
          y: '-10%',
        }, {
          display: 'block',
          opacity: 1,
          y: '0%',
          onReverseComplete() {
            myGlobe.arcsData([])
            .pointOfView({lat:0,long:0, altitude: 2}, 500)
          },
          onStart() {
            myGlobe.arcsData(arcsData)
            .arcColor('color')
            .arcDashLength(() => Math.random())
            .arcDashGap(() => Math.random())
            .arcDashAnimateTime(() => Math.random() * 4000 + 500)
          }
        })

        tl.to('[data-js-section-2]', {
          display: 'none',
          opacity: 0,
          y: '-20%'
        })

        tl.fromTo('[data-js-section-3]', {
          display: 'none',
          opacity: 0,
          y: '-20%'
        }, {
          display: 'block',
          opacity: 1,
          y: '0%',
          onReverseComplete() {
            myGlobe.showAtmosphere(true)
            .showGraticules(false)
            .pointOfView({lat:-21.64987,long:-12.66801, altitude: 2}, 500)
          },
          onStart() {
            myGlobe.showAtmosphere(false)
            .showGraticules(true)
            .pointOfView({lat:-33.64987,long:-154.66801, altitude: 2}, 500)
          }
        })
