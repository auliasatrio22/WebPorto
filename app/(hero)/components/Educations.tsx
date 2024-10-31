import { AnimatedSection } from "@/components/ui/animated-reveal";
import React from "react";
import logoUI from "../../../components/assets/ui.png";
import logo53 from "../../../components/assets/53.png";
function Educations() {
  return (
    <div>
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-16 ">
          My Education
        </h1>
      </AnimatedSection>
      <ul>
        <AnimatedSection>
          <li
            onClick={() => window.open("https://cs.ui.ac.id/", "_blank")}
            className="cursor-pointer hover:border-amber-100 dark:bg-black dark:hover:border-amber-500 flex flex-col lg:flex-row justify-start items-center gap-6 w-full bg-white border-4 border-amber-300 px-16 py-8 my-4 rounded-3xl"
          >
            <img draggable="false" src={logoUI.src} alt="" className="w-20" />
            <div>
              <h2 className="font-black text-md sm:text-xl">
                Universitas Indonesia
              </h2>
              <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                Faculty of Computer Science - Information Systems Undergraduate Study Program
              </h3>
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection>
          <li
            onClick={() =>
              window.open("https://sman53jkt.sch.id/", "_blank")
            }
            className=" cursor-pointer hover:border-amber-100 dark:bg-black dark:hover:border-amber-500 flex flex-col lg:flex-row justify-start items-center gap-6 w-full my-4 bg-white border-4 border-amber-300 px-16 py-8 rounded-3xl"
          >
            <img
              draggable="false" src={logo53.src} alt="" className="w-20"
            />
            <div className="flex-col items-center justify-center">
              <h2 className="font-black text-md sm:text-xl">
                SMA Negeri 53 Jakarta
              </h2>
              <h3 className="font-bold dark:text-white text-black opacity-40 text-xs sm:text-sm  mb-4">
                Natural Sciences
              </h3>
            </div>
          </li>
        </AnimatedSection>
      </ul>
    </div>
  );
}

export default Educations;
