"use client";
import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { useView } from "@/contexts/ViewContext";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { GradualSpacing } from "../common/GradualSpacing";

export default function About() {
  const { setSectionInView } = useView();
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setSectionInView("about");
    }
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section
      className={`std-backdrop-blur overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
      ref={ref}
      id="about"
    >
      <GradualSpacing
        className="font-display text-center text-1xl -tracking-widest text-black dark:text-white md:text-1xl md:leading-[5rem] break-words"
        text="I am Zongzewu, currently pursuing a Bachelor's degree."
        framerProps={inView || hasAnimated ? { visible: { opacity: 1, x: 0 } } : { hidden: { opacity: 0, x: -20 } }}
      />

      <GradualSpacing
        className="font-display text-center text-1xl -tracking-widest text-black dark:text-white md:text-1xl md:leading-[5rem]"
        text="At the University of Washington Paul G. Allen School of Computer Science,"
        framerProps={inView || hasAnimated ? { visible: { opacity: 1, x: 0 } } : { hidden: { opacity: 0, x: -20 } }}
      />
      <GradualSpacing
        className="font-display text-center text-1xl -tracking-widest text-white dark:text-black md:text-1xl md:leading-[5rem]"
        text="I am passionate about technology and aspire to become a software & Web developer."
        framerProps={inView || hasAnimated ? { visible: { opacity: 1, x: 0 } } : { hidden: { opacity: 0, x: -20 } }}
      />

      <GradualSpacing
        className="font-display text-center text-1xl -tracking-widest text-black dark:text-white md:text-1xl md:leading-[5rem]"
        text="Beyond academics, I am a passionate badminton enthusiast"
        framerProps={inView || hasAnimated ? { visible: { opacity: 1, x: 0 } } : { hidden: { opacity: 0, x: -20 } }}
      />
      <GradualSpacing
        className="font-display text-center text-1xl -tracking-widest text-black dark:text-white md:text-1xl md:leading-[5rem]"
        text="and a rock music lover, with Pink Floyd and Queen being my favorite bands."
        framerProps={inView || hasAnimated ? { visible: { opacity: 1, x: 0 } } : { hidden: { opacity: 0, x: -20 } }}
      />
      <GradualSpacing
        className="font-display text-center text-1xl -tracking-widest text-white dark:text-black md:text-1xl md:leading-[5rem]"
        text="I believe learning with passion can unlock endless possibilities."
        framerProps={inView || hasAnimated ? { visible: { opacity: 1, x: 0 } } : { hidden: { opacity: 0, x: -20 } }}
      />
    </section>
  );
}
