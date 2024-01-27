"use client";
import React, { useState } from "react";
import {
  FaChevronDown as ExpandIcon,
  FaChevronUp as LessIcon,
} from "react-icons/fa";

import { Typography } from "@@src/components";
import { ExperienceListGroupCard, JobExperienceCard } from "../_";
import experienceSummaryMap from "@/data/map/experienceSummaryMap";
import experienceMap from "@/data/map/experienceMap";
import { useRouter } from "next/navigation";

const ResumeExperience = () => {
  const [expandWorkExperience, toggleWorkExperience] = useState(false);

  /***
   * ! IMPORTANT
   * We didn't use useRef + `ref.current.scrollIntoView()` as we didn't succeed in working out the offset.
   */
  const handleToggleExperience = () => {
    const yOffset = -100; // Empirical value
    if (expandWorkExperience) {
      const targetElement = document.getElementById("resume-experience");

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const offset = rect.top + window.scrollY + yOffset;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });

        // Add a delay before adjusting the scroll position
        setTimeout(() => {
          window.scrollBy(0, yOffset);
          toggleWorkExperience((s) => !s);
        }, 350);
      }
    } else toggleWorkExperience((s) => !s);
  };

  const experiences = expandWorkExperience
    ? experienceMap
    : experienceMap.slice(0, 2);

  return (
    <div id="resume-experience">
      <article>
        <header>
          <h3 className="section-title-h3">Experience</h3>
          <div className="mt-56 md:mt-64 text-zinc-400 md:text-xl">
            <Typography className="leading-8 md:leading-10">
              In my <strong>8+ years of work experience</strong>, I served as a{" "}
              <strong>developer (6+ years)</strong>,{" "}
              <strong>product manager (4+ years)</strong>, and{" "}
              <strong>Entrepreneur /</strong>{" "}
              <strong>Chief Product & Technical Officer (4 years)</strong>.
            </Typography>
            <Typography className="leading-10">
              Additionally, <span className="text-wine-200">several</span> of
              these roles occurred{" "}
              <span className="text-wine-200">within the same company</span> or{" "}
              <span className="text-wine-200">concurrently</span>.
            </Typography>
          </div>
        </header>
        <div className="experience-grid">
          {experienceSummaryMap.map((group) => (
            <ExperienceListGroupCard
              key={group.heading}
              heading={group.heading}
              experiences={group.list}
            />
          ))}
        </div>
      </article>
      <article className="flex bg-zinc-200 text-zinc-950">
        <aside className="hidden bg-zinc-400 px-16 py-32 md:block md:w-176 md:grow md:shrink-0 lg:w-192">
          <Typography className="font-bold">Chronological</Typography>
          <Typography className="mt-8 text-sm text-zinc-600">
            This view simplifies the understanding of how those work experiences
            unfolded
          </Typography>
        </aside>
        <div className="flex flex-col gap-40 px-32 py-32">
          {experiences.map((exp, i) => (
            <JobExperienceCard key={i} experience={exp} />
          ))}
        </div>
      </article>
      <div>
        <button
          onClick={() => handleToggleExperience()}
          className="flex flex-col items-center justify-center h-56 w-full rounded-b-lg pt-8 text-lg font-bold hover:bg-zinc-800"
        >
          <Typography as="span">
            {expandWorkExperience ? "Show Less" : "Show all experiences"}
          </Typography>
          {expandWorkExperience ? (
            <LessIcon className="w-12 h-12" />
          ) : (
            <ExpandIcon className="w-12 h-12" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ResumeExperience;
