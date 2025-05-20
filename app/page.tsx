
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import Solutions from "./components/Solutions";
import Banner from "./components/Banner";
import Story from "./components/Story";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <AnimatePresence>
      <main className="font-primary overflow-hidden">
      <div className="sticky top-0 z-50">
        <nav className="flex px-12 py-4 justify-between item-center bg-white">
          <div>
            <Image src="/alarammao.png" alt="logo" width={100} height={100} />
          </div>

          <div className="flex items-center gap-12 text-base text-primary font-bold">
            <Link href={"#about"}>
              About
            </Link>
            <Link href={"#services"}>
              Services
            </Link>
            <Link href={"#testimonials"}>
              Testimonials
            </Link>
          </div>
        </nav>
      </div>

       {/* Start here  */}

        <Banner />
        <Solutions />
        <Story />
        <Offer />

        {/* End here */}
    </main>
    </AnimatePresence>
  );
}
