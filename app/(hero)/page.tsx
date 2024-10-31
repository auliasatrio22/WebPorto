"use client";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React, { useRef } from "react";
import About from "./components/About";
import Achievement from "./components/Achievement";
import Contacts from "./components/Contacts";
import Educations from "./components/Educations";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Volunteer from "./components/Volunteer";
import Organizations from "./components/Organizations";
import Footer from "./components/Footer";

function Page() {
  const AboutRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const OrganizationsRef = useRef<HTMLDivElement>(null);
  const VolunteerRef = useRef<HTMLDivElement>(null);
  const AchievementRef = useRef<HTMLDivElement>(null);
  const ContactsRef = useRef<HTMLDivElement>(null);
  const EducationsRef = useRef<HTMLDivElement>(null);

  const ScrollToSection = (section: string) => {
    const RefMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      About: AboutRef,
      Projects: ProjectsRef,
      Organizations: OrganizationsRef,
      Volunteer: VolunteerRef,
      Education: EducationsRef,
      Achievement: AchievementRef,
      Contacts: ContactsRef,
    };

    if (section === "Art") {
      // Redirect to the Art page if Art is clicked
      window.location.href = "/art"; // Navigasi ke halaman Art
      return;
    }

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
            {/*Content is here> */}

            <AnimatedSection>
              <div ref={AboutRef}>
                <About OnSectionClick={ScrollToSection} />
              </div>
            </AnimatedSection>
            <div ref={ProjectsRef}>
              <Projects />
            </div>
            <div ref={OrganizationsRef}>
              <Organizations />
            </div>
            <div ref={VolunteerRef}>
              <Volunteer />
            </div>
            <div ref={EducationsRef}>
              <Educations />
            </div>
            <div ref={AchievementRef}>
              <Achievement />
            </div>
            <div ref={ContactsRef}>
              <Contacts />
            </div>
          </div>
          <Footer />
        </TracingBeam>
      </div>
    </div>
  );
}

export default Page;
