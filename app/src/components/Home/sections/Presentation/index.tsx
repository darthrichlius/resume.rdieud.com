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
    id: "email",
    label: "Send Email",
    title: "Contact me by email",
    href: `mailto:${AppConfig.owner.contact.email}`,
    icon: <Icon index="Email" />,
  },
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

  /*
  {
    id: DOWNLOAD_RESUME,
    label: "Download CV (PDF)",
    labelMobile: "My CV (PDF)",
    title: "Download my CV in PDF format",
    href: "/",
    icon: <Icon index="Download" />,
  },
  //*/
];

const expertHighlight = [
  { icon: <Icon index="React" />, alt: "React" },
  { icon: <Icon index="NextJs" />, alt: "Next.Js" },
  { icon: <Icon index="TypeScript" />, alt: "TypeScript" },
  { icon: <Icon index="NodeJs" />, alt: "Node.Js" },
  { icon: <Icon index="Symfony" />, alt: "Symfony" },
  { icon: <Icon index="Figma" />, alt: "Figma" },
];

const HomePresentationSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { isLandScape, isLgVertical } = useWindow();

  const handleClick = async (e: any, id: string) => {
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
              <strong>Senior fullstack web engineer</strong> with Product
              Manager background and <strong>agile</strong> experience,
              specialized in <strong>React</strong>, <strong>NodeJs</strong> &{" "}
              <strong>Symfony</strong> environments. I use my soft-skills,
              intuition from past experiences and{" "}
              <strong>critical thinking</strong> mindset, to{" "}
              <strong>effectively</strong> think, plan, design, build, and
              manage digital <strong>systems throughout their cycles</strong>
            </Typography>
            <div className="flex flex-wrap justify-between xs:gap-24 xs:justify-center md:gap-56 md:justify-start mt-48 text-wine-200">
              {contactLinks.map((link) => (
                <NextLink
                  key={link.id}
                  className="justify-self-center lg:justify-self-start hover:text-[#fff]"
                  target="_blank"
                  href={link.href}
                  title={link.title || undefined}
                  onClick={(e) => handleClick(e, link.id)}
                >
                  <Typography
                    as="span"
                    className="flex items-center gap-8 w-128 justify-center md:w-160 lg:w-fit lg:max-w-fit text-lg md:text-xl"
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
                    {!link.labelMobile && <span>{link.label}</span>}
                  </Typography>
                </NextLink>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="lets-talk">
            <Typography className="font-bold text-4xl text-center">
              Let&apos;s Talk and Know each others.
            </Typography>
            <Typography className="text-xl text-center text-zinc-500">
              Something on your mind? Need answers?
            </Typography>
            <div className="flex w-full flex-wrap gap-32 mt-24 justify-center">
              <NextLink
                className="lets-talk-CTA lets-talk-CTA--wine"
                href={"https://calendly.com/dieudrichard"}
                target="blank"
              >
                <Typography as="span" className="lets-talk-CTA-text">
                  <span className="flex-grow-0 flex-shrink-0 h-16 w-16">
                    {<Icon index="ScheduleMeet" />}
                  </span>
                  <span>Schedule a call</span>
                </Typography>
              </NextLink>
              <NextLink
                className="lets-talk-CTA lets-talk-CTA--dark"
                onClick={(e) => handleClick(e, DOWNLOAD_RESUME)}
                href={"javascript:void(0)"}
                title={"Download my CV in PDF format"}
              >
                <Typography as="span" className="lets-talk-CTA-text">
                  <span className="flex-grow-0 flex-shrink-0 h-16 w-16">
                    {<Icon index="Download" />}
                  </span>
                  <span>Download CV</span>
                </Typography>
              </NextLink>
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
