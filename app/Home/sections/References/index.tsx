import WorkReferenceCard from "./_/WorkReferenceCard";
import workReferencesMap from "@/static/workReferencesMap";

const HomeReferencesSection = () => {
  return (
    <section id="references" className="home-section flex justify-center">
      <div className={"app-container"}>
        <div className="flex gap-32 flex-wrap justify-center">
          {workReferencesMap.map((reference, i) => (
            <WorkReferenceCard
              key={`${reference.author.fullname}${i}`}
              reference={reference}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeReferencesSection;
