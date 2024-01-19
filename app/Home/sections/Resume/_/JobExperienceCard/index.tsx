"use client";
import React, { useState } from "react";
import NextImage from "next/image";
import { Avatar } from "@radix-ui/themes";

import {
  FaChevronRight as RightIcon,
  FaChevronUp as UpIcon,
} from "react-icons/fa";

import { Typography } from "@@src/components";

import CompanyLogoFallback from "@@/assets/images/companies/logoFallback.svg";
import { IExperience } from "@@src/types";
import { useCompany } from "@@src/hooks";

const JobExperienceCard = ({
  experience,
  options,
}: {
  experience: IExperience;
  options?: Record<string, any>;
}) => {
  const [showAboutCompany, toggleAboutCompany] = useState(false);
  const company = useCompany(experience.company);

  return (
    <article>
      <header className="job-experience-card">
        {!(options?.disableAvatar === true) && (
          <Avatar
            size="4"
            src={company?.logo}
            fallback={<NextImage src={CompanyLogoFallback} alt="" />}
          />
        )}
        <div>
          {experience.contract?.position && (
            <Typography className="font-bold">
              {experience.contract?.position}
            </Typography>
          )}
          {(company?.name || experience.contract?.type) && (
            <Typography className="text-sm">
              {company?.name && (
                <span>{company?.name}</span>
              )}
              {company?.name && experience.contract?.type && (
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
        {company?.description && (
          <div className="p-12 rounded bg-zinc-400 text-sm">
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
                {company.description}
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
