"use client";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../sub/MenuOverlay";
import { Socials } from "@/constants";
import Image from "next/image";

interface NavLinks {
  title: string;
  path: string;
}

const navLinks: NavLinks[] = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const solidThreshold = 1;

      if (scrollY > solidThreshold) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed mx-auto top-0 left-0 right-0 z-10 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <h2 className="text-gray-200 text-[20px] ">
          Victor Brito
        </h2>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
      {Socials.map((social) => (
        <li key={social.name}>
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <Image src={social.src} alt={social.name} width={24} height={24} />
          </a>
        </li>
      ))}
    </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
