import React, { useEffect } from "react";
import { skills } from "~/lib/constants";
import SkillTile from "./SkillTitle";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  const { setSectionInView } = useView();

  useEffect(() => {
    if (inView) setSectionInView("skills");
  }, [inView, setSectionInView]);

  const user_skills = skills;

  return (
    <section
      ref={ref}
      id="skills"
      className={`std-backdrop-blur overflow-hidden card mt-12 sm:mt-16 md:mt-[50px] px-6 py-4 md:py-10 lg:py-12 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
    >
      {/* Skills tiles */}
      <div className="w-[90%] md:w-[85%] xl:w-[70%] min-h-[600px]   rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {user_skills.map((skill, i) => (
          <SkillTile
            key={i}
            Label={skill.label}
            Desc={skill.desc}
            Icon={skill.icon}
            skills={skill.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
