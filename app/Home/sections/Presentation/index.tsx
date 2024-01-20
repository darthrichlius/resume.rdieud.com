"use client";
import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import { Icon } from "@@src/components";
import Image from "@@/assets/images/avatar.jpeg";
import AppConfig from "@@/config/app";

const contactLinks = [
  {
    label: "Github",
    href: AppConfig.owner.contact.github,
    icon: <Icon index="Github" />,
  },
  {
    label: "LinkedIn",
    href: AppConfig.owner.contact.linkedin,
    icon: <Icon index="Linkedin" />,
  },
  {
    label: "Email",
    href: `mailto:${AppConfig.owner.contact.email}`,
    icon: <Icon index="Email" />,
  },
  { label: "Resume", href: "/", icon: <Icon index="Download" /> },
];

const expertHighlight = [
  { icon: <Icon index="Figma" />, alt: "Figma" },
  { icon: <Icon index="TypeScript" />, alt: "TypeScript" },
  { icon: <Icon index="React" />, alt: "React" },
  { icon: <Icon index="NextJs" />, alt: "Next.Js" },
  { icon: <Icon index="Symfony" />, alt: "Symfony" },
  { icon: <Icon index="NodeJs" />, alt: "NodeJs" },
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
                  target="_blank"
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
