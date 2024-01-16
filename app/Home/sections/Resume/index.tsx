import { Typography } from "@@src/components";
import { ExperienceListGroupCard, JobExperienceCard } from "./_";
import experienceSummaryMap from "@/static/experienceSummaryMap";
import experienceMap from "@/static/experienceMap";

const HomeResumeSection = () => {
  return (
    <section id="resume" className="home-section flex flex-col items-center">
      <header>
        <h2>Resume</h2>
      </header>
      <div className="app-container flex justify-center">
        <div className="w-full max-w-4xl">
          <article className="p-24 bg-zinc-900">
            <header>
              <h3>Experience</h3>
              <div className="mt-32 text-zinc-500 md:text-sm">
                <Typography>
                  As part of my <strong>8+ years of work experience</strong>, I
                  had the opportunity to work as a{" "}
                  <strong>developer (6+ years)</strong>,{" "}
                  <strong>product manager (4+ years)</strong>, but also as the{" "}
                  <strong>Chief Product & Technical Officer (4 years)</strong>{" "}
                  at my own company.
                </Typography>
                <Typography className="mt-16 md:mt-8">
                  On a few occasions, some of these professional experiences
                  took place <u>within the same company</u> or{" "}
                  <u>concomitantly</u>.
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
                This view simplifies the understanding of how those work
                experiences unfolded
              </Typography>
            </aside>
            <div className="flex flex-col gap-32 px-32 py-32">
              {experienceMap.map((exp, i) => (
                <JobExperienceCard key={i} experience={exp} />
              ))}
            </div>
          </article>
          <Typography>Reduce</Typography>
        </div>
      </div>
    </section>
  );
};

export default HomeResumeSection;
