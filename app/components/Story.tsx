'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Story() {
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateFromBottom = (el: HTMLDivElement | null) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    };

    animateFromBottom(missionRef.current);
    animateFromBottom(visionRef.current);
  }, []);

  return (
    <div className="p-8 lg:p-24 bg-gradient-to-t from-sky-500 to-indigo-500 text-white">
      <div ref={missionRef} className="mb-8">
        <h2 className="text-center lg:text-start font-extrabold text-xl lg:text-3xl border-b-2 border-dotted py-2 lg:inline-block">
          Our Mission
        </h2>
        <p className="text-center lg:text-start py-2 lg:py-4 text-sm lg:text-xl">
          To provide accessible, high-quality Quranic education to learners around the world through expert instruction, personalized support, and a nurturing online environment that fosters spiritual growth and a deeper connection to the Quran.
        </p>
      </div>

      <div ref={visionRef}>
        <h2 className="text-center lg:text-start font-extrabold text-xl lg:text-3xl border-b-2 border-dotted py-2 lg:inline-block">
          Our Vision
        </h2>
        <p className="text-center lg:text-start py-2 lg:py-4 text-sm lg:text-xl">
          To become a leading global platform for Quranic learning—empowering individuals of all ages and backgrounds to engage with the Quran, live by its teachings, and carry its light into their daily lives.
        </p>
      </div>
    </div>
  );
}

export default Story;
