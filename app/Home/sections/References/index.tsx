import WorkReferenceCard from "./_/WorkReferenceCard";

const HomeReferencesSection = () => {
  return (
    <section id="references" className="home-section flex justify-center">
      <div className={"app-container"}>
        <div className="flex gap-32 flex-wrap justify-center">
          <WorkReferenceCard />
          <WorkReferenceCard />
          <WorkReferenceCard />
          <WorkReferenceCard />
          <WorkReferenceCard />
          <WorkReferenceCard />
        </div>
      </div>
    </section>
  );
};

export default HomeReferencesSection;
