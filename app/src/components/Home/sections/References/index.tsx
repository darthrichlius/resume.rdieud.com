"use client";
import classNames from "classnames";

import WorkReferenceCard from "./_/WorkReferenceCard";
import workReferencesMap from "@/data/map/workReferencesMap";
import { useWindow } from "@@src/context";

const HomeReferencesSection = () => {
  const { isLandScape, isLgVertical } = useWindow();

  return (
    <section
      id="references"
      className={classNames({
        ["home-section"]: true,
        ["window-is-landscape"]: isLandScape,
        ["window-is-lg-vertical"]: isLgVertical,
      })}
    >
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
