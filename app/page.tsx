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

            <button
              onClick={() => setToggleNav((prev) => !prev)}
              className="lg:hidden"
            >
              {toggleNav ? <X /> : <Menu />}
            </button>

            <div
              className={`${toggleNav ? "h-[250px] p-4" : "h-0 p-0"
                } flex transition-all duration-300 ease-in-out flex-col absolute top-[60px] bg-white w-full left-0 overflow-hidden lg:static lg:flex lg:flex-row lg:items-center gap-12 text-base text-primary font-bold`}
            >
              <Link href={"#about"}>About</Link>
              <Link href={"#services"}>Services</Link>
              <Link href={"#testimonials"}>Testimonials</Link>
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
