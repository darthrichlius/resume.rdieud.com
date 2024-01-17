"use client";
import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import {
  FaLinkedin as ContactLinkedinLogo,
  FaGithub as ContactGithubLogo,
  FaFileDownload as ContactResumeLogo,
  FaReact as ExpertReactLogo,
  FaNodeJs as ExpertNodeJsLogo,
  FaSymfony as ExpertSymfonyLogo,
} from "react-icons/fa";
import { MdEmail as ContactMailLogo } from "react-icons/md";

import { BiLogoTypescript as ExpertTypeScriptLogo } from "react-icons/bi";
import { IoLogoFigma as ExpertFigmaLogo } from "react-icons/io5";
import { TbBrandNextjs as ContactNextJsLogo } from "react-icons/tb";

import Image from "@@/assets/images/avatar.jpeg";

const contactLinks = [
  { label: "Github", href: "/", icon: <ContactGithubLogo /> },
  { label: "LinkedIn", href: "/", icon: <ContactLinkedinLogo /> },
  { label: "Email", href: "/", icon: <ContactMailLogo /> },
  { label: "Resume", href: "/", icon: <ContactResumeLogo /> },
];

const expertHighlight = [
  { icon: <ExpertFigmaLogo />, alt: "Figma" },
  { icon: <ExpertTypeScriptLogo />, alt: "TypeScript" },
  { icon: <ExpertReactLogo />, alt: "React" },
  { icon: <ContactNextJsLogo />, alt: "NextJs" },
  { icon: <ExpertSymfonyLogo />, alt: "Symfony" },
  { icon: <ExpertNodeJsLogo />, alt: "NodeJs" },
];

const HomePresentationSection = () => {
  return (
    <section
      id="presentation"
      className="home-section home-section-h-max flex justify-center"
    >
      <div className={"app-container"}>
        <div className={"lg:flex lg:justify-between"}>
          <div className="w-full lg:max-w-lg">
            <div className="flex w-56 h-56 float-left relative mr-20 md:w-64 md:h-64 lg:w-96 lg:h-96 ">
              <NextImage
                className="rounded-full w-full h-full absolute"
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
          <div className="w-full lg:max-w-md mt-56 lg:mt-1">
            <p className="text-zinc-400 text-lg leading-8 md:text-xl [word-spacing:0.1em] md:leading-10">
              <strong>Senior fullstack web engineer</strong> and Product
              Manager, with the experience and{" "}
              <strong>critical thinking</strong> mindset, to{" "}
              <strong>effectively</strong> plan, design, test, code, ship and
              manage digital <strong>systems and their life cycles</strong>
            </p>
            <div className="grid grid-cols-2 gap-56 mt-48">
              {contactLinks.map((link) => (
                <NextLink
                  key={link.label}
                  className="flex items-center gap-8 max-w-fit text-lg md:text-xl hover:text-wine-200"
                  href={link.href}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </NextLink>
              ))}
            </div>
          </div>
        </div>
        <div className="home-stack-highlight">
          {expertHighlight.map((stack) => (
            <span key={stack.alt} title={stack.alt} className="w-64 h-64">
              {stack.icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePresentationSection;
