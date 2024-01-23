"use client";
import React from "react";
import NextLink from "next/link";
import { FaChevronRight as RightIcon } from "react-icons/fa";

import { Typography } from "@@src/components";
import { HoverCard } from "@radix-ui/themes";
import { useCompanies } from "@/app/src/hooks";

const companiesMap = [
  { id: "veepee", label: "Veepee", href: "#veepee" },
  { id: "universign", label: "Universign", href: "#universign" },
  { id: "catimini", label: "Catimini", href: "#catimini" },
  { id: "yse", label: "Yse Paris", href: "#yse" },
  { id: "upd", label: "Ultra Premium Direct", href: "#upd" },
  { id: "alstom", label: "Alstom", href: "#alstom" },
];

const HomeIntroductionSection = () => {
  const companies = useCompanies();

  return (
    <section
      id="introduction"
      className="home-section home-section-h-max flex justify-center"
    >
      <div className={"app-container flex flex-col justify-center"}>
        <div className="flex flex-col gap-40 md:gap-64 md:-mt-64">
          <div>
            <h1 className="title-display">Richard Dieud</h1>
            <p className="text-wine-200 text-4xl font-bold mt-24 md:text-5xl md:mt-8">
              Software Engineer & Product Manager
            </p>
          </div>
          <Typography className="text-base sm:text-lg  md:text-2xl leading-7 sm:leading-10 tracking-wide text-zinc-400 [word-spacing:0.075em]">
            Blending <strong>curiosity</strong> 🧠, <strong>efficiency</strong>{" "}
            🗝️, and <strong>passion</strong> 🎨 to build
            <br />
            user-centric <strong>experiences</strong> and{" "}
            <strong>products</strong> that scale ✨
          </Typography>
          <ul className="flex flex-wrap gap-x-20 gap-y-8">
            <li>
              <Typography className="home-section-wordked-for">
                Formerly
              </Typography>
            </li>
            {companiesMap.map((item) => {
              const company = companies.find((c) => item.id === c.id);
              return (
                <li
                  key={item.label}
                  className="text-base hover:text-wine-200 md:text-xl"
                >
                  <HoverCard.Root openDelay={200}>
                    <HoverCard.Trigger>
                      <NextLink href={item.href}>{item.label}</NextLink>
                    </HoverCard.Trigger>
                    <HoverCard.Content className="w-288 text-sm">
                      <Typography className="">
                        {company?.description?.display}
                      </Typography>
                      <Typography className="flex gap-4 justify-end items-center mt-16 font-bold text-wine-200 text-right">
                        <RightIcon className="w-12" />
                        <NextLink
                          className="hover:text-wine-100"
                          href={item.href}
                        >
                          View my experience
                        </NextLink>
                      </Typography>
                    </HoverCard.Content>
                  </HoverCard.Root>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeIntroductionSection;
