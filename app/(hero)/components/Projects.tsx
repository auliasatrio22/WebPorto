"use client";
import React from "react";
import Image from "next/image"; // Gunakan next/image
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import f1 from "../../../components/assets/f1.jpg";
import f2 from "../../../components/assets/f2.jpg";
import { FaReact } from "react-icons/fa6";
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

function Projects() {
  return (
    <div className="min-h-screen">
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-10">
          My Projects
        </h1>
      </AnimatedSection>
      <AnimatedSection>
        <HoverEffect items={projects} />
      </AnimatedSection>
    </div>
  );
}

export const projects = [
  {
    title: "Project Pertama",
    description:
      "Developed a responsive ReactJS landing page for a beauty website, utilizing React, vanilla JavaScript, and HTML with CSS for styling, and built with Vite. Integrated Web3Forms to ensure smooth form submissions.",
    link: "https://beauty-website-demo.web.app/",
    image: f1,
    githubLink: "https://github.com/kevincornellius/beautywebsite",
    icons: [
      { icon: FaReact, link: "https://react.dev/" },
      { icon: DiHtml5, link: "https://www.w3schools.com/html/" },
      { icon: FaCss3Alt, link: "https://www.w3schools.com/css/" },
      { icon: IoLogoJavascript, link: "https://www.javascript.com/" },
    ],
  },
  {
    title: "Project Kedua",
    description:
      "Created a full-stack e-commerce web app with MERN, integrating Stripe for payments and Cloudinary for image storage, featuring a customer frontend and an admin dashboard for managing products and users.",
    link: "https://ecommerceweb-frontend.vercel.app/",
    image: f2,
    githubLink: "https://github.com/kevincornellius/MERN-ecommerceweb",
    icons: [
      { icon: SiMongodb, link: "https://www.mongodb.com/" },
      { icon: SiExpress, link: "https://expressjs.com/" },
      { icon: FaReact, link: "https://react.dev/" },
      { icon: RiNodejsLine, link: "https://nodejs.org/en" },
      { icon: DiHtml5, link: "https://www.w3schools.com/html/" },
      { icon: FaCss3Alt, link: "https://www.w3schools.com/css/" },
      { icon: IoLogoJavascript, link: "https://www.javascript.com/" },
    ],
  },
];

export default Projects;
