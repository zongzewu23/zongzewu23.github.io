"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-50 select-none" style={{ top: "-10px" }}>
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] mt-4 sm:mt-8 std-backdrop-blur">
          <Image
            src="/WZZ_LOGO.svg"
            width={32}
            height={36}
            alt="logo"
            className="select-none"
          />
          <Icon
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex sm:hidden text-2xl"
            icon={`${menuOpen ? "gg:close" : "lucide:menu"}`}
          />

<ul className="hidden sm:flex gap-8 lg:gap-12 text-white/25">
  <Link
    href="#me"
    className={`${sectionInView === "me" ? "text-white" : ""}`}
  >
    Me
  </Link>
  <Link
    href="#about"
    className={`${sectionInView === "about" ? "text-white" : ""}`}
  >
    About
  </Link>
  <Link
    href="#skills"
    className={`${sectionInView === "skills" ? "text-white" : ""}`}
  >
    Skills
  </Link>
  <Link
    href="#projects"
    className={`${sectionInView === "projects" ? "text-white" : ""}`}
  >
    Projects
  </Link>
  <Link
    href="#experience"
    className={`${sectionInView === "experience" ? "text-white" : ""}`}
  >
    Experience
  </Link>
  <Link
    href="#contact"
    className={`${sectionInView === "contact" ? "text-white" : ""}`}
  >
    Contact
  </Link>
</ul>

          <div className="gap-5 text-xl hidden sm:flex">
            <Link target="_blank" href="https://www.linkedin.com/in/zongze-wu/">
              <Icon icon="hugeicons:linkedin-01" />
            </Link>
            <Link target="_blank" href="https://github.com/zongzewu23">
              <Icon icon="hugeicons:github" />
            </Link>
            <Link target="_blank" href="https://leetcode.com/u/astrowu61/">
              <Icon icon="hugeicons:leetcode" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/zongze_wuuuuuu">
            <Icon icon="basil:instagram-outline" />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
}
