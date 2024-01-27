import ResumeCertifications from "./ResumeCertifications";
import ResumeExperience from "./ResumeExperience";
import ResumeMySkills from "./ResumeMySkills";

const HomeResumeSection = () => {
  return (
    <section id="resume" className="home-section flex flex-col items-center">
      <header>
        <h2>Resume</h2>
      </header>
      <div className="app-container flex justify-center">
        <div className="flex flex-col gap-y-128 md:gap-y-144 w-full max-w-4xl">
          <ResumeExperience />
          <ResumeMySkills />
          <ResumeCertifications />
        </div>
      </div>
    </section>
  );
};

export default HomeResumeSection;
