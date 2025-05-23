'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import Solutions from "./components/Solutions";
import Banner from "./components/Banner";
import Story from "./components/Story";
import Offer from "./components/Offer";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <AnimatePresence>
      <main className="font-primary overflow-hidden">
        <div className="sticky top-0 z-50">
          <nav className="flex px-4 lg:px-12 py-4 relative justify-between items-center bg-white">
            <div>
              <Image src="/alarammao.png" alt="logo" width={100} height={100} />
            </div>

            {/* Mobile Nav Toggle Button */}
            <button
              onClick={() => setToggleNav((prev) => !prev)}
              className="lg:hidden"
            >
              {toggleNav ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            <div
              className={`${toggleNav ? "max-h-[300px] p-4" : "max-h-0 p-0"} 
  flex flex-col transition-all gap-8 duration-300 ease-in-out overflow-hidden 
  absolute top-[60px] left-0 w-full bg-white text-base text-primary font-bold 
  lg:hidden`}
            >
              <Link href="#about">About</Link>
              <Link href="#services">Services</Link>
              <Link href="#testimonials">Testimonials</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:flex-row lg:items-center gap-12 text-base text-primary font-bold">
              <Link href="#about">About</Link>
              <Link href="#services">Services</Link>
              <Link href="#testimonials">Testimonials</Link>
            </div>

          </nav>
        </div>

        {/* Start here */}
        <Banner />
        <Solutions />
        <Story />
        <Offer />
        <Reviews />
        <Footer />
        {/* End here */}
      </main>
    </AnimatePresence>
  );
}
