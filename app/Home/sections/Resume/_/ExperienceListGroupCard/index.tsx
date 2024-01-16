import React from "react";
import { IExperience } from "@@src/types";
import { Typography } from "@@src/components";

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
  return (
    <div className="experience-grid-group-list-item">
      <div className="experience-grid-group-list-item-main">
        <Typography>{experience.company!.name}</Typography>
        {(experience.contract!.location || experience.contract!.refYear) && (
          <Typography>
            - {experience.contract!.location}
            {experience.contract!.refYear &&
              `, ${experience.contract!.refYear}`}
          </Typography>
        )}
      </div>
      {experience.children && (
        <div className="experience-grid-group-list-item-sub">
          {experience.children.map((exp, i) => (
            <Typography key={i}>{exp.company?.name}</Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceListGroupCard;
