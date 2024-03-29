import React from "react";
import { IExperience } from "@@src/types";
import { Typography } from "@@src/components";
import { useCompany } from "@@src/hooks";

const ExperienceListGroupCard = ({
  heading,
  experiences,
}: {
  heading: string;
  experiences: IExperience[];
}) => {
  return (
    <div className="experience-grid-group-card">
      <h4>{heading}</h4>
      <div className="experience-grid-group-list">
        {experiences.map((exp, i) => (
          <ExperienceListItem key={i} experience={exp} />
        ))}
      </div>
    </div>
  );
};

const ExperienceListItem = ({ experience }: { experience: IExperience }) => {
  const company = useCompany(experience.company);

  return (
    <div className="experience-grid-group-list-item">
      <div className="experience-grid-group-list-item-main">
        <Typography>{company!.shortName || company!.name}</Typography>
        {(experience.contract!.location || experience.contract!.refYear) && (
          <Typography className="text-sm">
            -{" "}
            <span className="sm:hidden md:inline">
              {experience.contract!.location}
            </span>
            {experience.contract!.location && (
              <span className="sm:hidden md:inline">, </span>
            )}
            {experience.contract!.refYear && experience.contract!.refYear}
          </Typography>
        )}
      </div>
      {experience.children && (
        <div className="experience-grid-group-list-item-sub">
          {experience.children.map((exp, i) => (
            <ExperienceListItemSub key={i} companyId={exp.company} />
          ))}
        </div>
      )}
    </div>
  );
};

const ExperienceListItemSub = ({ companyId }: { companyId: string }) => {
  const company = useCompany(companyId);

  return <Typography>{company!.name}</Typography>;
};

export default ExperienceListGroupCard;
