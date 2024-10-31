"use client";
import Link from 'next/link';

import {
  HoveredLink,
  Menu,
  MenuItem
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Navbar({
  OnSectionClick,
}: {
  OnSectionClick: (section: string) => void;
}) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down
        setShowNavbar(false);
      } else {
        // if scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div
      className={cn(
        "fixed top-16 inset-x-0 max-w-sm sm:max-w-lg mx-auto z-50 border border-amber-300 rounded-full flex justify-evenly dark:bg-black bg-white transition-transform duration-300",
        showNavbar ? "transform-y-0" : "translate-y-[-300%]"
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="icon"
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <div className="cursor-pointer" onClick={() => setTheme("light")}>
              Light
            </div>
            <div className="cursor-pointer" onClick={() => setTheme("dark")}>
              Dark
            </div>
          </div>
        </MenuItem>{" "}
        <div className="mr-5 sm:mr-20">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Aulia Satrio Wijoyo"
            onClick={() => OnSectionClick("Contacts")}
          >
            <div className="flex flex-col space-y-4 text-sm items-start">
            <HoveredLink href="https://mail.google.com/mail/u/0/?fs=1&to=auliasatrio22@gmail.com&tf=cm">
                <div className="mr-1">
                  <MdEmail />
                </div>
                Email
              </HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/aulia-satrio-wijoyo/">
                <div className="mr-1">
                  <FaLinkedinIn />
                </div>
                LinkedIn
              </HoveredLink>
              <HoveredLink href="https://github.com/auliasatrio22">
                <div className="mr-1">
                  <FaGithub />
                </div>
                Github
              </HoveredLink>
              <HoveredLink href="https://www.instagram.com/satsatsatrio/">
                <div className="mr-1">
                  <AiFillInstagram />
                </div>
                Instagram
              </HoveredLink>
            </div>
          </MenuItem>
        </div>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Art"
          href="/art"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <Link
              href="/art"
              onClick={() => {
                OnSectionClick("About"); 
              }}
            >
              <div className="cursor-pointer">Photos</div>
            </Link>
            <Link
              href="/art"
              onClick={() => {
                OnSectionClick("Projects"); 
              }}
            >
              <div className="cursor-pointer">Design</div>
            </Link>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="Blogs"
          onClick={() => OnSectionClick("Blogs")}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("")}
            >
              Blogs
            </div>
          </div>
        </MenuItem>
        {/*<MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          onClick={() => OnSectionClick("Projects")}
        >
          <div className="  grid grid-cols-1 gap-10 p-4)">
            <ProductItem
              title="Beauty Landing Page"
              href="https://beauty-website-demo.web.app/"
              src={beautyWeb.src}
              description=" Made With React Javascript"
            />
            <ProductItem
              title="MERN E-Commerce Page"
              href="https://ecommerceweb-frontend.vercel.app/"
              src={mern.src}
              description="Integrated with Stripe and Cloudinary"
            />
          </div>
        </MenuItem>*/}
        <MenuItem
          setActive={setActive}
          active={active}
          item="About"
          onClick={() => OnSectionClick("About")}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("About")}
            >
              About Me
            </div>
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("Projects")}
            >
              Projects
            </div>
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("Organizations")}
            >
              Organizations
            </div>
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("Volunteer")}
            >
              Volunteer
            </div>
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("Education")}
            >
              Education
            </div>
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("Achievement")}
            >
              Achievement
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
