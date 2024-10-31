"use client";
import vindes from "../../../components/assets/vindes.png";
import { AnimatedSection } from "@/components/ui/animated-reveal";

function Organizations() {
    return (
      <div className="min-h-full">
        <AnimatedSection>
          <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-12">
            My Organizations
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
                    Staff of Arts and Culture Department
                  </h2>
                  <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                    BEM Fakultas Ilmu Komputer Universitas Indonesia <br /> Feb 2022 - Jan 2023
                  </h3>
                  <p className="text-xs">
                    - Led and organized the "Dekan Cup" art competition, promoting arts and culture within the faculty community.
                    <br></br>- Led and organized the awards event for Pesta Rakyat UI participants.
                    <br></br>- Led and managed the sales of Fasilkom merchandise, resulting in the successful sale of over 200 units.
                  </p>
                </div>
              </li>
            </AnimatedSection>
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
                    Intern of Art and Culture Department
                  </h2>
                  <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                    BEM Fakultas Ilmu Komputer Universitas Indonesia <br /> 2021
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

export default Organizations;