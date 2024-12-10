"use client";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React, { useRef } from "react";
import Footer from "../(hero)/components/Footer";
import Navbar from "../(hero)/components/Navbar";
import Shop from "./components/Shop";

function Page() {
  const ShopRef = useRef<HTMLDivElement>(null);

  const ScrollToSection = (section: string) => {
    const RefMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      Shop: ShopRef,
    };

    const Ref = RefMap[section]?.current;
    if (Ref) {
      const offset = 180;
      const top = Ref.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen dark:bg-black bg-white overflow-hidden dark:bg-grid-white/[0.09] bg-grid-black/[0.05]">
      <div className="max-w-xs sm:max-w-sm mx-auto xl:max-w-5xl lg:max-w-3xl">
        <TracingBeam>
          <Navbar OnSectionClick={ScrollToSection} />
          <div className="pt-40 max-w-7xl">
            <AnimatedSection>
              <div ref={ShopRef}>
                <Shop OnSectionClick={ScrollToSection} />
              </div>
            </AnimatedSection>
          </div>
          <Footer />
        </TracingBeam>
      </div>
    </div>
  );
}

export default Page;
