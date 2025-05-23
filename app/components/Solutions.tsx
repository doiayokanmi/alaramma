'use client';

import { supportList } from '@/constants/constant';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Solutions() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-primary/25 p-8 lg:p-12">
      <h2 className="font-extrabold py-2 lg:border-b-2 border-dashed lg:mb-12 mb-8 capitalize text-primary text-xl lg:text-3xl">
        our solution in more details
      </h2>
      <div className="flex lg:flex-row flex-col gap-4">
        {supportList.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="basis-1/4 bg-white border-4 rounded-br-2xl rounded-tl-2xl shadow-md"
          >
            <div className="max-h-[250px] overflow-hidden">
              <Image
                className="rounded-tl-2xl object-cover"
                src={item.image}
                height={300}
                width={400}
                alt={item.title}
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-center text-lg text-primary">
                {item.title}
              </h2>
              <p className="text-sm text-center py-4">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
