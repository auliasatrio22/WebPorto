import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import beautyWeb from "../../../components/assets/beautyweb.png";

function About({
  OnSectionClick,
}: {
  OnSectionClick: (section: string) => void;
}) {
  const words = [
    "Lifelong Learner",
    "Creative Person",
    "Business Enthusiast",
    "IT Enthusiast",
    "UI/UX Designer",
    "System Analyst",
    "Lifelong Learner",
    "Web Developer",
  ];

  return (
    <div className="min-h-full mt-1 mb-32">
      <img
        src={beautyWeb.src}
        className="w-full max-w-4xl h-28 object-cover rounded-lg mx-auto mb-8"
      />
      <h1 className="font-black text-4xl sm:text-7xl">Aulia Satrio Wijoyo</h1>
      <p className="font-medium text-xl sm:text-4xl mt-3">
        I'm into&nbsp;
        <FlipWords className="inline-block" words={words} />
      </p>
      <br />
      <p className="pt-6 mb-12 ">
        Hi, my name is
        <span className="font-bold"> Aulia Satrio Wijoyo! </span> I was
        born in <span className="font-bold">2003</span> and have a strong
        passion for programming and design. I enjoy{" "}
        <a
          className="font-bold underline underline-offset-2 decoration-amber-300 "
          target="_blank"
          href="https://codeforces.com/profile/worthytacos"
          rel="noopener noreferrer"
        >
          competitive programming
        </a>{" "}
        and always like learning new things. Whether it's making websites,
        designing visuals, or creating games, I love turning ideas into reality
        with technology and creativity.
      </p>
      <Button
        borderRadius="1.75rem"
        className="bg-white font-black hover:bg-amber-300 transition  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-600"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1yqxWPXFrmPIHwG7wGC9Fq-NGQzAVrbCT/view?usp=sharing",
            "_blank"
          );
        }}
      >
        My CV
      </Button>
      <button
        onClick={() => OnSectionClick("Contacts")}
        className="h-16 w-32 font-black text-sm bg-amber-300 ml-6 text-black hover:bg-white border hover:opacity-70 rounded-[1.75rem] "
      >
        Contact Me
      </button>
    </div>
  );
}

export default About;
