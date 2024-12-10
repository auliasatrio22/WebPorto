"use client";
import compfest from "../../../components/assets/compfest.jpg";
import olim from "../../../components/assets/olim.png";
import perak from "../../../components/assets/perak.jpg";
import vindes from "../../../components/assets/vindes.png";
import wisgan from "../../../components/assets/wisgan.jpg";
import { AnimatedSection } from "@/components/ui/animated-reveal";

function Volunteer() {
  return (
    <div className="min-h-full">
      <br></br>
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-10">
          My Volunteer Experiences
        </h1>
      </AnimatedSection>
      <div>
        <ul>
        <AnimatedSection>
            <li
              onClick={() =>
                window.open("https://vindes.id/", "_blank")
              }
              className=" cursor-pointer hover:border-amber-100 dark:hover:border-amber-500  flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white dark:bg-black border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
            >
              <img
                draggable="false"
                src={vindes.src}
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h2 className="font-black dark:text-white text-md sm:text-xl">
                  Vindes Creative Division
                </h2>
                <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                  Vindes Corp <br /> 2024
                </h3>
                <p className="text-xs">
                  TBA
                </p>
              </div>
            </li>
          </AnimatedSection>
          <AnimatedSection>
            <li
              onClick={() =>
                window.open("https://www.instagram.com/p/Cw9HKbAhAue/?img_index=1", "_blank")
              }
              className=" cursor-pointer hover:border-amber-100 dark:hover:border-amber-500  flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white dark:bg-black border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
            >
              <img
                draggable="false"
                src={olim.src}
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h2 className="font-black dark:text-white text-md sm:text-xl">
                  Manager of Public Relations, Publication, Documentation, and Design
                </h2>
                <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                  OLIM UI <br /> Jan - Dec 2023
                </h3>
                <p className="text-xs">
                - Led, organized the work system, and managed of 4 divisions consisting of 4 Person in Charge, 5 Vice Person in Charge, and 48 staff. <br />
                - Successfully developed and increased 2000 followers, made 234 publications on Instagram feeds, andcreated 21 video content both on Instagram and TikTok.
                </p>
              </div>
            </li>
          </AnimatedSection>
          <AnimatedSection>
            <li
              onClick={() =>
                window.open("https://compfest.id/", "_blank")
              }
              className=" cursor-pointer hover:border-amber-100 dark:hover:border-amber-500  flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white dark:bg-black border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
            >
              <img
                draggable="false"
                src={compfest.src}
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h2 className="font-black dark:text-white text-md sm:text-xl">
                  Staff of Digital Marketing
                </h2>
                <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                  COMPFEST <br /> Apr - Nov 2022
                </h3>
                <p className="text-xs">
                - Managed all social media including planning, concepting, and creating content and captions for each publication. <br />
                - Analyzed campaign performance to optimize effectiveness, leveraging data-driven insights.
                </p>
              </div>
            </li>
          </AnimatedSection>
          <AnimatedSection>
            <li
              onClick={() =>
                window.open("https://perak.id/", "_blank")
              }
              className=" cursor-pointer hover:border-amber-100 dark:hover:border-amber-500  flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white dark:bg-black border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
            >
              <img
                draggable="false"
                src={perak.src}
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h2 className="font-black dark:text-white text-md sm:text-xl">
                  Staff of Sponsorship
                </h2>
                <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                  Pesta Rakyat Komputer <br /> Jan - May 2022
                </h3>
                <p className="text-xs">
                  TBA
                </p>
              </div>
            </li>
          </AnimatedSection>
          <AnimatedSection>
            <li
              onClick={() =>
                window.open("https://www.instagram.com/wisudacsui/", "_blank")
              }
              className=" cursor-pointer hover:border-amber-100 dark:hover:border-amber-500  flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white dark:bg-black border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
            >
              <img
                draggable="false"
                src={wisgan.src}
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h2 className="font-black dark:text-white text-md sm:text-xl">
                  Staff of Liaison Officer
                </h2>
                <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                  Syukuran dan Pelepasan Wisudawan Fasilkom UI <br /> Dec 2021 - Feb 2022
                </h3>
                <p className="text-xs">
                  TBA
                </p>
              </div>
            </li>
          </AnimatedSection>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Volunteer;
