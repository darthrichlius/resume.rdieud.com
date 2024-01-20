import WorkReferenceCard from "./_/WorkReferenceCard";
import workReferencesMap from "@/data/map/workReferencesMap";

const HomeReferencesSection = () => {
  return (
    <section id="references" className="home-section flex justify-center">
      <div className={"app-container"}>
        <div className="flex gap-32 flex-col items-center">
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
