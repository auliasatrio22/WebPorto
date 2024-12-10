"use client";
import React from "react";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import achieve from "../../../components/assets/achieve.jpg";

function Achievement() {
  return (
    <div className="min-h-screen">
      <AnimatedSection>
        <br />
        <br />
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-10">
          My Achievement
        </h1>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {achievement.map((item, index) => (
            <div key={index} className="dark:bg-black shadow-lg rounded-lg overflow-hidden border-4 border-amber-300 hover:border-amber-100 dark:hover:border-amber-500 px-5 py-5">
              <img src={item.image.src} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="font-bold text-lg underline underline-offset-4 decoration-amber-300">{item.title}</h2>
              <p className="font-black text-xs sm:text-sm mt-4 text-black-400 tracking-wide leading-relaxed">{item.description}</p>
              <button
                onClick={() => window.open(item.videoLink, "_blank")}
                className="mt-4 bg-amber-300 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded"
              >
                See Video
              </button>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export const achievement = [
  {
    title: "1st Winner Haha Hihi",
    description:
      "Developed a responsive ReactJS, integrated Web3Forms to ensure smooth form submissions.",
    videoLink: "https://drive.google.com/your-video-link", // replace with your actual GDrive link
    image: achieve,
  },
];

export default Achievement;
