"use client";
import React from "react";
import NextLink from "next/link";

import { Typography } from "@@src/components";

const companies = [
  { label: "Veepee", href: "/" },
  { label: "Universign", href: "/" },
  { label: "Catimini", href: "/" },
  { label: "Yse Paris", href: "/" },
  { label: "Ultra Premium Direct", href: "/" },
];

const HomeIntroductionSection = () => {
  return (
    <section
      id="introduction"
      className="home-section home-section-h-max flex justify-center"
    >
      <div className={"app-container flex flex-col justify-center"}>
        <div className="flex flex-col gap-40 md:gap-64 md:-mt-64">
          <div>
            <h1 className="text-7xl font-bold md:text-9xl">Richard Dieud</h1>
            <p className="text-wine-200 text-4xl font-bold mt-24 md:text-5xl md:mt-8">
              Software Engineer & Product Manager
            </p>
          </div>
          <Typography className="text-lg leading-10 tracking-wide text-zinc-400 [word-spacing:0.075em] md:text-2xl">
            I bring passion 🎨, <strong>efficiency</strong> 🗝️ and{" "}
            <strong>full proficiency</strong> 🧠 together
            <br />
            to build user-centric <strong>experiences</strong> and{" "}
            <strong>products</strong> that scale ✨
          </Typography>
          <div className="flex gap-36">
            <p className="home-section-wordked-for">Worked for</p>
            <ul className="flex flex-wrap gap-16">
              {companies.map((company) => (
                <li
                  key={company.label}
                  className="text-base hover:text-wine-200 md:text-xl"
                >
                  <NextLink href={company.href}>{company.label}</NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntroductionSection;
