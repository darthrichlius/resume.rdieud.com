import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import { Icon, Typography } from "@@src/components";
import { useCompany } from "@@src/hooks";
import CompanyLogoFallback from "@@/assets/images/companies/logoFallback.svg";

export interface ICertification {
  title: string;
  issued: string;
  credentialUrl?: string;
  provider: string;
  skills?: Array<string>;
}

const CertificationCard = ({
  certification,
}: {
  certification: ICertification;
}) => {
  const provider = useCompany(certification.provider);
  const providerLogo = provider!.logo ? (
    <NextImage
      className="w-48 rounded"
      src={provider!.logo}
      alt={`${provider!.name}'s logo`}
    />
  ) : (
    <NextImage
      className="w-48 rounded"
      src={CompanyLogoFallback}
      alt={`${provider!.name}'s logo`}
    />
  );

  return (
    <article className="flex gap-24 w-full p-24 bg-zinc-900">
      <aside>{providerLogo}</aside>
      <section className="w-full">
        <header>
          <h4 className="text-xl font-bold">{certification.title}</h4>
          <Typography className="">{provider!.name}</Typography>
          <Typography className="text-sm text-zinc-400">
            Issued {certification.issued}
          </Typography>
        </header>
        {certification?.skills && (
          <div className="flex gap-8 mt-12 text-sm">
            <Typography className="font-bold">Skills:</Typography>
            <ul className="flex flex-wrap  gap-x-8 gap-y-8 md:gap-y-4">
              {certification.skills.map((cert, i) => (
                <li key={cert} className="flex gap-8 md:shrink-0">
                  <Typography className="font-first-letter-bold md:font-first-letter-normal">
                    {cert}
                  </Typography>
                  {i < certification.skills!.length - 1 && (
                    <span className="hidden sm:block">·</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {certification.credentialUrl && (
          <footer className="flex justify-start md:justify-end mt-24 md:mt-12">
            <NextLink
              className="rounded-full flex gap-8 py-4 px-16 md:px-32 bg-wine-200 text-sm md:text-base font-bold text-zinc-200"
              target="_blank"
              href={certification.credentialUrl}
            >
              Show credential <Icon className="w-12 md:w-16" index="Website" />
            </NextLink>
          </footer>
        )}
      </section>
    </article>
  );
};

export default CertificationCard;
