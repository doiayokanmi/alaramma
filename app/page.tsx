
import Image from "next/image";
import Link from "next/link";
import Videobg from "./components/Videobg";
import BannerText from "./components/BannerText";
import { AnimatePresence } from "motion/react";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <AnimatePresence>
      <main className="font-primary">
      <div className="sticky top-0 z-50">
        <nav className="flex px-12 py-4 justify-between item-center bg-white">
          <div>
            <Image src="/alarammao.PNG" alt="logo" width={100} height={100} />
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


      <section className="h-screen overflow-hidden relative gap-12 flex flex-col text-white text-shadow-amber-50 bg-black justify-center items-center">
        <Videobg />

        <BannerText />

      </section>
        <Solutions />
    </main>
    </AnimatePresence>
  );
}
