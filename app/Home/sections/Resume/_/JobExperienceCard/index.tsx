import React from "react";
import NextImage from "next/image";
import { Avatar } from "@radix-ui/themes";

import { Typography } from "@@src/components";

import CompanyLogoFallback from "@@/assets/images/companies/logoFallback.svg";
import { IExperience } from "@@src/types";

const JobExperienceCard = ({
  experience,
  options,
}: {
  experience: IExperience;
  options?: Record<string, any>;
}) => {
  return (
    <article>
      <header className="job-experience-card">
        {!(options?.disableAvatar === true) && (
          <Avatar
            size="4"
            src={experience.company?.logo}
            fallback={<NextImage src={CompanyLogoFallback} alt="" />}
          />
        )}
        <div>
          {experience.contract?.position && (
            <Typography className="font-bold">
              {experience.contract?.position}
            </Typography>
          )}
          {(experience.company?.name || experience.contract?.type) && (
            <Typography className="text-sm">
              {experience.company?.name && (
                <span>{experience.company?.name}</span>
              )}
              {experience.company?.name && experience.contract?.type && (
                <span>·</span>
              )}
              {experience.contract?.type && (
                <span>{experience.contract?.type}</span>
              )}
            </Typography>
          )}

          {(experience.contract?.startDate ||
            experience.contract?.endDate ||
            experience.contract?.duration) && (
            <Typography className="text-sm text-zinc-500">
              {experience.contract?.startDate} - {experience.contract?.endDate}{" "}
              · {experience.contract?.duration}
            </Typography>
          )}
          {experience.contract?.location && (
            <Typography className="text-sm text-zinc-500">
              {experience.contract?.location}
            </Typography>
          )}
        </div>
      </header>
      <div
        className={`mt-8  ${options?.disableAvatar ? "" : "ml-24 md:ml-72"}`}
      >
        {experience.company?.description && (
          <div className="p-16 rounded bg-zinc-400 text-sm">
            <Typography className="font-bold">
              About the company
            </Typography>
            <Typography className="mt-8">
              {experience.company.description}
            </Typography>
          </div>
        )}

        {experience.description && (
          <div
            className="job-experience-card-experience-description"
            dangerouslySetInnerHTML={{
              __html: experience.description,
            }}
          />
        )}
        <div className=" border-l border-l-zinc-400 pl-20 md:border-l-0 md:p-1">
          {experience.children?.map((child, i) => (
            <div key={i} className="mt-32">
              <JobExperienceCard
                experience={child}
                options={{
                  disableAvatar: !!experience.meta?.disableChildrenAvatar,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default JobExperienceCard;
