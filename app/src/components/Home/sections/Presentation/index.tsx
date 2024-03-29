"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import classnames from "classnames";

import { Icon, Typography } from "@@src/components";
import Image from "@@/assets/images/avatar.jpeg";
import AppConfig from "@@/config/app";
import { useWindow } from "@@src/context";
import downloadCVFile from "@@src/services/downloadCVFile";

const DOWNLOAD_RESUME = "download:resume";

const contactLinks: {
  id: string;
  label: string;
  labelMobile?: string;
  title: string;
  href: string;
  icon: any;
}[] = [
  {
    id: "github",
    label: "Github",
    title: "Navigate to my Github repository",
    href: AppConfig.owner.contact.github,
    icon: <Icon index="Github" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    title: "Navigate to my Linkedin profile",
    href: AppConfig.owner.contact.linkedin,
    icon: <Icon index="Linkedin" />,
  },
  {
    id: "email",
    label: "Email",
    title: "Contact me by email",
    href: `mailto:${AppConfig.owner.contact.email}`,
    icon: <Icon index="Email" />,
  },
  {
    id: DOWNLOAD_RESUME,
    label: "Download CV (PDF)",
    labelMobile: "My CV (PDF)",
    title: "Download my CV in PDF format",
    href: "/",
    icon: <Icon index="Download" />,
  },
];

const expertHighlight = [
  { icon: <Icon index="Figma" />, alt: "Figma" },
  { icon: <Icon index="TypeScript" />, alt: "TypeScript" },
  { icon: <Icon index="React" />, alt: "React" },
  { icon: <Icon index="NextJs" />, alt: "Next.Js" },
  { icon: <Icon index="Symfony" />, alt: "Symfony" },
  { icon: <Icon index="NodeJs" />, alt: "Node.Js" },
];

const HomePresentationSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { isLandScape, isLgVertical } = useWindow();

  const handleclick = async (e: any, id: string) => {
    if (DOWNLOAD_RESUME === id) {
      e.preventDefault();
      e.stopPropagation();

      if (!isDownloading) {
        setIsDownloading(true);
        await downloadCVFile();
        setIsDownloading(false);
      }
    }
  };

  return (
    <section
      id="presentation"
      className={classnames({
        ["home-section"]: true,
        ["window-is-landscape"]: isLandScape,
        ["window-is-lg-vertical"]: isLgVertical,
      })}
    >
      <div className={"app-container"}>
        <div className={"lg:flex lg:justify-between"}>
          <div className="w-full lg:max-w-lg">
            <div className="flex w-56 h-56 float-left relative z-20 mr-20 md:w-64 md:h-64 lg:w-96 lg:h-96 ">
              <NextImage
                className="rounded-full w-full h-full absolute z-10"
                alt="image"
                layout="fill"
                objectFit="contain"
                src={Image}
              />
            </div>
            <h2 className="text-6xl font-bold sm:text-7xl lg:text-8xl lg:leading-[1.15]">
              I design <span className="text-wine-200">& code app systems</span>
            </h2>
          </div>
          <div className="w-full lg:max-w-lg mt-56 lg:mt-1">
            <Typography className="text-zinc-400 text-lg leading-8 md:text-xl [word-spacing:0.1em] md:leading-10">
              <strong>Senior fullstack web engineer</strong> and Product
              Manager, specialized in <strong>React</strong>,{" "}
              <strong>NodeJs</strong> & <strong>Symfony</strong> environments,
              with the experience and <strong>critical thinking</strong>{" "}
              mindset, to <strong>effectively</strong> think, plan, design,
              build, and manage digital{" "}
              <strong>systems throughout their cycles</strong>
            </Typography>
            <div className="grid grid-cols-2 gap-56 justify-center mt-48">
              {contactLinks.map((link) => (
                <NextLink
                  key={link.id}
                  className="justify-self-center lg:justify-self-start hover:text-wine-200"
                  target="_blank"
                  href={link.href}
                  title={link.title || undefined}
                  onClick={(e) => handleclick(e, link.id)}
                >
                  <Typography
                    as="span"
                    className="flex items-center gap-8 w-144 md:w-160 lg:w-fit lg:max-w-fit text-lg md:text-xl"
                  >
                    <span>{link.icon}</span>
                    {link.labelMobile && (
                      <>
                        <span className="lg:hidden">{link.labelMobile}</span>
                        <span className="hidden lg:inline-block">
                          {link.label}
                        </span>
                      </>
                    )}
                    {!link.labelMobile && (
                      <span className="">{link.label}</span>
                    )}
                  </Typography>
                </NextLink>
              ))}
            </div>
          </div>
        </div>
        <div className="home-stack-highlight">
          {expertHighlight.map((stack) => (
            <span
              key={stack.alt}
              title={stack.alt}
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
            >
              {stack.icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePresentationSection;
