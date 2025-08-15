import { useView } from "@/contexts/ViewContext";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { projectsData } from "~/lib/constants";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project from "./project";
import "react-multi-carousel/lib/styles.css";




const Projects = () =>{
    const { ref, inView } = useInView({
        threshold: 0.40,
        rootMargin: "-100px 0px",
      });
    
      const { setSectionInView } = useView();
    
      useEffect(() => {
        if (inView) setSectionInView("projects");
      }, [inView, setSectionInView]);

    return(
        <section
        ref = {ref}
        id = "projects"
        className={`std-backdrop-blur overflow-hidden card mt-12 sm:mt-16 md:mt-[50px] px-6 py-4 md:py-10 lg:py-12 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
        >

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

        </section>

    );
};


export default Projects;