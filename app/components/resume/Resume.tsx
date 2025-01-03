import { useInView } from "react-intersection-observer";
import BoxReveal from "../common/BoxReveal";
import { Button } from "../common/button";
import React, { useState } from "react";
import { Lens } from "../common/Lens";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { ConfettiButton } from "../common/Confetti";


const  Resume = () =>{
    const [hovering, setHovering] = useState(false);

    return(
        <section   className={cn(
            "std-backdrop-blur overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px]",
            "px-6 py-4 md:py-10 lg:py-12",
            "flex flex-col lg:flex-row",         // 重点：小屏竖排，大屏并排
            "items-center justify-center gap-8", // 让子元素之间留空隙
            "rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]"
          )}
          >
 <div 
  className="size-full max-w-lg flex-1 flex flex-col items-start justify-center overflow-hidden pt-8"
>
  {/* BoxReveal 相关代码 */}
  <BoxReveal boxColor={"#32006E"} duration={0.5}>
    <p className="text-[3.5rem] font-semibold">
      Zongze Wu<span className="text-[#32006E]">.</span>
    </p>
  </BoxReveal>

  <BoxReveal boxColor={"#32006E"} duration={0.5}>
    <h2 className="mt-[.5rem] text-[1rem]">
      An adaptable and challenge-driven{" "}
      <span className="text-[#32006E]">full-stack developer</span>
    </h2>
  </BoxReveal>

  <BoxReveal boxColor={"#32006E"} duration={0.5}>
    <div className="mt-6">
      <p>
        -&gt; A dedicated problem-solver with a 
        <span className="font-semibold text-[#32006E]"> Passion </span>
        for delivering impactful software solutions. <br />
        -&gt; Committed to continuous 
        <span className="font-semibold text-[#32006E]"> Learning </span>
        and <span className="font-semibold text-[#32006E]"> Innovation </span>,
        thriving in collaborative and fast-paced environments. <br />
        -&gt; Aspiring to create technology that not only meets requirements but
        also <span className="font-semibold text-[#32006E]"> Inspires Users </span>
        and <span className="font-semibold text-[#32006E]">Drives Business Success</span>.
        <br />
      </p>
    </div>
  </BoxReveal>

      <BoxReveal boxColor={"#CDFF91"} duration={0.5}>
        <a
          href="/Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <ConfettiButton className="mt-[1.6rem] bg-[#CDFF91] text-[#32006E]">
            Download Resume
          </ConfettiButton>
        </a>
      </BoxReveal>
</div>


<div className="flex-1 flex items-center justify-center">
  <Lens hovering={hovering} setHovering={setHovering}>
    <Image
      src="/Resume.png"
      alt="image"
      width={500}
      height={500}
      className="rounded-2xl"
    />
  </Lens>
</div>

    
        </section>
    );
};

export default Resume;