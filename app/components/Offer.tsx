'use client';

import { offerList } from '@/constants/constant';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Offer() {
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
    <div className="bg-gradient-to-r from-yellow-500 to-pink-500 p-8 lg:p-12">
      <h2 className="font-extrabold py-2 border-b-2 border-dashed lg:mb-12 mb-8 capitalize text-white text-xl lg:text-3xl">
        what we offer
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        {offerList.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="basis-1/4 bg-white border-4 rounded-br-2xl rounded-tl-2xl shadow-lg"
          >
            <div className="max-h-[150px] overflow-hidden">
              <Image
                className="rounded-tl-2xl object-cover w-full h-full"
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

export default Offer;
