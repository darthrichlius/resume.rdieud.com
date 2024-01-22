"use client";
import React, { useState } from "react";
import NextImage from "next/image";

import {
  FaChevronRight as RightIcon,
  FaChevronUp as UpIcon,
} from "react-icons/fa";

import { Typography } from "@@src/components";

import CompanyLogoFallback from "@@/assets/images/companies/logoFallback.svg";
import { IExperience } from "@@src/types";
import { useCompany } from "@@src/hooks";

type TDeactivable = ("avatar" | "company")[];

const JobExperienceCard = ({
  experience,
  options,
}: {
  experience: IExperience;
  options?: {
    disabled: TDeactivable;
  };
}) => {
  const [showAboutCompany, toggleAboutCompany] = useState(false);
  const company = useCompany(experience.company);

  let disabledOptions: TDeactivable = [];
  if (!!experience.meta?.disableChildrenAvatar) disabledOptions.push("avatar");
  if (!!experience.meta?.disableChildrenCompany)
    disabledOptions.push("company");

  const logo = company?.logo ? (
    <NextImage
      className="w-48 rounded"
      src={company?.logo}
      alt={`${company.name}'s logo`}
    />
  ) : (
    <NextImage
      className="w-48 rounded"
      src={CompanyLogoFallback}
      alt={`${company?.name}'s logo`}
    />
  );

  return (
    <article id={experience.company}>
      <header className="job-experience-card">
        {!options?.disabled.includes("avatar") && logo}
        <div>
          {experience.contract?.position && (
            <Typography className="font-bold">
              {experience.contract?.position}
            </Typography>
          )}
          {(company?.name || experience.contract?.type) && (
            <Typography className="text-sm">
              {company?.name && <span>{company?.name}</span>}
              {company?.name && experience.contract?.type && <span>·</span>}
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
        className={`mt-8  ${
          options?.disabled.includes("avatar") ? "" : "ml-24 md:ml-72"
        }`}
      >
        {company?.description && !options?.disabled.includes("company") && (
          <div className="p-12 rounded bg-zinc-300 text-sm">
            <div className="flex justify-between">
              <Typography className="font-bold">About the company</Typography>
              <button
                className="flex shrink-0 gap-8 py-4 px-8 rounded leading-4 hover:bg-zinc-300 "
                onClick={() => toggleAboutCompany((s) => !s)}
              >
                <Typography as="span">
                  {showAboutCompany ? "Hide" : "Learn more"}
                </Typography>
                {showAboutCompany ? (
                  <UpIcon className="w-12" />
                ) : (
                  <RightIcon className="w-8" />
                )}
              </button>
            </div>
            {showAboutCompany && (
              <Typography className="mt-12">
                {company.description.display}
              </Typography>
            )}
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
                  disabled: disabledOptions,
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
