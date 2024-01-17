import ResumeCertifications from "./ResumeCertifications";
import ResumeExperience from "./ResumeExperience";

const HomeResumeSection = () => {
  return (
    <section id="resume" className="home-section flex flex-col items-center">
      <header>
        <h2>Resume</h2>
      </header>
      <div className="app-container flex justify-center">
        <div className="w-full max-w-4xl">
          <ResumeExperience />
          <ResumeCertifications />
        </div>
      </div>
    </section>
  );
};

export default HomeResumeSection;
