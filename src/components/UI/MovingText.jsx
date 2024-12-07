import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

export default function MovingText({ text1, text2 }) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main>
      <div className=" mt-20 overflow-hidden locomotive uppercase bg-navy rounded-t-3xl">
        <div ref={slider} className="relative whitespace-nowrap flex ">
          <p
            ref={firstText}
            className="relative m-0 text-orange text-[230px] font-medium pr-12"
          >
            {text1}
          </p>
          <p
            ref={secondText}
            className="  left-full m-0 text-orange text-[230px] font-medium pr-12"
          >
            {text2}
          </p>
        </div>
      </div>
    </main>
  );
}
