import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { Avatar } from "@radix-ui/themes";
import { FaExternalLinkAlt as LinkLogo } from "react-icons/fa";

import { Typography } from "@/app/src/components";

export interface ICertification {
  title: string;
  issued: string;
  credentialUrl: string;
  provider: {
    name: string;
    url: string;
    logoLocale?: string;
    logoUrl?: string;
  };
  skills?: Array<string>;
}

const CertificationCard = ({
  certification,
}: {
  certification: ICertification;
}) => {
  return (
    <article className="flex gap-24 w-full p-24 bg-zinc-900">
      <aside>
        <Avatar
          size="4"
          src={certification.provider.logoUrl}
          fallback={<NextImage src={"?"} alt="" />}
        />
      </aside>
      <section className="w-full">
        <header>
          <h4 className="text-xl font-bold">{certification.title}</h4>
          <Typography className="">{certification.provider.name}</Typography>
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

        <footer className="flex justify-start md:justify-end mt-24 md:mt-12">
          <NextLink
            className="rounded-full flex gap-8 py-4 px-16 md:px-32 bg-wine-200 text-sm md:text-base font-bold text-zinc-200"
            href={certification.credentialUrl}
          >
            Show credential <LinkLogo className="w-12 md:w-16" />
          </NextLink>
        </footer>
      </section>
    </article>
  );
};

export default CertificationCard;
