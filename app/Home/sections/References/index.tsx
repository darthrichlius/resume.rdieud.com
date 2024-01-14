import { JobReferenceCard } from "@@src/components";

const HomeReferencesSection = () => {
  return (
    <section id="references" className="home-section flex justify-center">
      <div className={"app-container"}>
        <div className="flex gap-32 flex-wrap justify-center">
          <JobReferenceCard />
          <JobReferenceCard />
          <JobReferenceCard />
          <JobReferenceCard />
          <JobReferenceCard />
          <JobReferenceCard />
        </div>
      </div>
    </section>
  );
};

export default HomeReferencesSection;
