"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import beautyWeb from "../../../components/assets/beautyweb.png";

function Achievement() {
  return (
    <div className="min-h-screen ">
      <AnimatedSection>
        <br></br><br></br><br></br>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300">
          My Achievement
        </h1>
      </AnimatedSection>
      <AnimatedSection>
        <HoverEffect items={achievement} />
      </AnimatedSection>
    </div>
  );
}

export const achievement = [
  {
    title: "1st Winner Haha Hihi",
    description:
      "Developed a responsive ReactJS landing page for a beauty website, utilizing React, vanilla JavaScript, and HTML with CSS for styling, and built with Vite. Integrated Web3Forms to ensure smooth form submissions.",
    link: "",
    image: beautyWeb,
    githubLink: "",
    icons: [],
  },
];

export default Achievement;
