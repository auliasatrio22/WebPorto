"use client";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React, { useRef } from "react";
import About from "../(hero)/components/About";
import Projects from "../(hero)/components/Projects";
import Navbar from "../(hero)/components/Navbar";
import Footer from "../(hero)/components/Footer";

function Page() {

  const AboutRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);


  const ScrollToSection = (section: string) => {
    const RefMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      About: AboutRef,
      Projects: ProjectsRef,
    };

  
    const Ref = RefMap[section]?.current;
    if (Ref) {
      const offset = 180;
      const top = Ref.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <div className=" min-h-screen dark:bg-black bg-white overflow-hidden  dark:bg-grid-white/[0.09] bg-grid-black/[0.05]">
      <div className=" max-w-xs sm:max-w-sm mx-auto xl:max-w-5xl lg:max-w-3xl   ">
        <TracingBeam className="">
          <Navbar OnSectionClick={ScrollToSection} />
          <div className="pt-40 max-w-7xl ">
            <AnimatedSection>
              <div ref={AboutRef}>
                <About OnSectionClick={ScrollToSection} />
              </div>
            </AnimatedSection>
            <div ref={ProjectsRef}>
              <Projects />
            </div>
          </div>
          <Footer />
        </TracingBeam>
      </div>
    </div>
  );
}

export default Page;
