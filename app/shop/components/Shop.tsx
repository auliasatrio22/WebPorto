"use client";
import React from "react";
import cc from "../../../components/assets/cc.png";
import { AnimatedSection } from "@/components/ui/animated-reveal";

interface ShopProps {
  OnSectionClick?: (section: string) => void;
}

const Shop: React.FC<ShopProps> = ({ OnSectionClick }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col">
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-10">
          Catalog
        </h1>
        <AnimatedSection>
          <img
            src={cc.src}
            className="cursor-pointer hover:border-amber-100 dark:hover:border-amber-500  flex flex-col lg:flex-row justify-start items-center w-full h-full bg-white dark:bg-black border-4 border-amber-300 rounded-3xl"
            style={{ flexGrow: 1 }}
          />
        </AnimatedSection>
      </div>
    </div>
  );
};

export const shop = [];

export default Shop;
