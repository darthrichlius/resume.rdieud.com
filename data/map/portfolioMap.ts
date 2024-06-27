import { IProject } from "@@src/components/Home/sections/Portfolio";

import GarcegamesMobile from "@@/assets/images/portfolio/garcegames/garcegames-mobile.png";
import GarcegamesDesktop1 from "@@/assets/images/portfolio/garcegames/garcegames-desktop-1.png";
import GarcegamesDesktop2 from "@@/assets/images/portfolio/garcegames/garcegames-desktop-2.png";

import ISDMobile from "@@/assets/images/portfolio/isd/isd-mobile.png";
import ISDDesktop1 from "@@/assets/images/portfolio/isd/isd-desktop-1.png";
import ISDDesktop2 from "@@/assets/images/portfolio/isd/isd-desktop-2.png";

import ResumeMobile from "@@/assets/images/portfolio/resume/resume-mobile.png";
import ResumeDesktop from "@@/assets/images/portfolio/resume/resume-desktop.png";

import FromSchoolDesktop1 from "@@/assets/images/portfolio/fromschool/fromschool-desktop-1.png";
import FromSchoolDesktop2 from "@@/assets/images/portfolio/fromschool/fromschool-desktop-2.png";
import FromSchoolDesktop3 from "@@/assets/images/portfolio/fromschool/fromschool-desktop-3.png";

import LCBYDesktop from "@@/assets/images/portfolio/lechatbyyou/lcby-desktop.png";

const portfolioMap: IProject[] = [
  // ################################
  // ##### ##### FEATURES ##### #####

  {
    title: "LeChatByYou (WIP)",
    subtitle: "Responsive Web Application (Monorepo / Miscroservices)",
    shortDescription:
      "<b>LeChatByYou</b> is a small yet promising application facilitating real-time <b>human-to-human</b> and <b>human-to-AI</b> interactions through various Large Language Models (LLMs). Users have the freedom to choose their <b>preferred LLM</b> for chatting with an AI assistant or enjoying seamless, authentic conversations with friends and family.",
    description: `
      <p>A professional profile identity website designed for Richard Dieud to offer a comprehensive representation of his work experience and achievements.</p>
      <p>The primary objective is to provide interested parties with more comprehensive and detailed information, and, most importantly, details consistent with what one seeks when exploring an engineering profile.</p>
      <p>Furthermore, our aim is to deliver an enjoyable experience that contributes to expressing the personality of the website owner</p>
    `,
    stack: {
      design: [
        { label: "<b>AWS</b> (EC2, Lambda, ElasticCache, RDS, S3)" },
        { label: "Vercel" },
        {
          label:
            "<b>AI Models Providers</b> (OpenAI GPTs, HuggingFace, Meta  LLama, ...)",
        },
      ],
      front: [
        { label: "Turborepo (Monorepo)" },
        { label: "Websocket" },
        { label: "React" },
        { label: "Redux" },
        { label: "TypeScript" },
        { label: "shadcn/ui" },
        { label: "Radix UI" },
        { label: "TailwindCSS" },
      ],
      back: [
        { label: "NodeJS" },
        { label: "Next.Js" },
        { label: "ExpressJS" },
        { label: "Postgresql" },
        { label: "Redis" },
        { label: "Hotjar" },
      ],
    },
    medias: [
      {
        src: LCBYDesktop,
        order: 1,
      },
      {
        src: ResumeMobile,
        order: 2,
      },
    ],
    links: [],
    meta: {
      isFeatured: true,
    },
  },
  {
    title: "resume.rdieud.com",
    subtitle: "Responsive Website",
    shortDescription:
      "The <b>2nd iteration</b> of my resume-focused professional website. It is an optimized revision designed to offer detailed insights about my work experience, skills and achievements.",
    description: `
      <p>A professional profile identity website designed for Richard Dieud to offer a comprehensive representation of his work experience and achievements.</p>
      <p>The primary objective is to provide interested parties with more comprehensive and detailed information, and, most importantly, details consistent with what one seeks when exploring an engineering profile.</p>
      <p>Furthermore, our aim is to deliver an enjoyable experience that contributes to expressing the personality of the website owner</p>
    `,
    stack: {
      design: [{ label: "Figma" }, { label: "(Tailor-made) Design System" }],
      front: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "React Hook Form" },
        { label: "TailwindCSS" },
        { label: "Radix UI" },
      ],
      back: [
        { label: "Next.Js" },
        { label: "Sentry" },
        { label: "Hotjar" },
        { label: "Google Analytics" },
      ],
    },
    medias: [
      {
        src: ResumeDesktop,
        order: 1,
      },
      {
        src: ResumeMobile,
        order: 2,
      },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/darthrichlius/com.rdieud.resume ",
        icon: "Github",
      },
    ],
    meta: {
      isFeatured: true,
    },
  },
  {
    title: "IamServiceDesk (or ISD)",
    subtitle: "Responsive Web Application",
    shortDescription:
      "A small project aiming at creating an agile, usable, and scalable service desk web application with an <b>optimized user experience</b> and strong reliability and scalability.",
    /**
     * ISD
     * Agility, Usability, and Scalability
     * A service desk tool that supports all your requirements, akin to Jira, but safeguards the user-friendly experience of Trello.
     */
    description: `
      <p>An agile, usable, and scalable service desk application designed for individuals and SMEs aiming to reduce costs.</p>
      <p>The project focuses on gaining experience in building a solution used by product and support department teams to visualize insights, manage actions, and enhance productivity. The outcome will serve as a foundation for a business application tailored to African businesses, considering their unique constraints.</p>
      <p>The software's key feature is to offer a comprehensive catalog of features for team collaboration, support management, and project management, with a primary emphasis on delivering a high-quality seamless user experience as a key differentiator.</p>
    `,
    stack: {
      front: [
        { label: "AWS (RDS)" },
        { label: "TypeScript" },
        { label: "React" },
        { label: "Axios" },
        { label: "Tailwind" },
        { label: "Radix UI" },
        { label: "React Hook Form" },
      ],
      back: [
        { label: "Next.Js" },
        { label: "React Query" },
        { label: "Prisma" },
        { label: "Zod" },
        { label: "MySQL" },
        { label: "Sentry" },
        { label: "Zustand (Store Manager)" },
      ],
    },
    medias: [
      {
        src: ISDDesktop1,
        order: 1,
      },
      {
        src: ISDDesktop2,
        order: 2,
      },
      {
        src: ISDMobile,
        order: 3,
      },
    ],
    links: [
      {
        label: "Website",
        href: "https://iamservicedesk.vercel.app/",
        icon: "Website",
      },
    ],
    meta: {
      isFeatured: true,
    },
  },
  {
    title: "Garce Games",
    subtitle: "Responsive Web Application",
    shortDescription:
      "An informative video game browsing platform for video game enthusiasts that offers an <b>enjoyable experience</b> and <b>useful information</b> to help them fully enjoy their service subscriptions",
    description: `
      <p>An informative video game browsing platform for video game enthusiasts that offers an enjoyable experience and useful information to help them fully enjoy their service subscriptions.</p>
      <p>Ultimately, the platform could be provided as a white-label solution for any partner looking to build a product related to video games without the need for prior research and development investment and ongoing maintenance costs.</p>
    `,
    stack: {
      design: [{ label: "Rest API" }],
      front: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "ViteJs" },
        { label: "Chakra UI" },
        { label: "TailwindCSS" },
        { label: "Zustand (Store Manager)" },
        { label: "Sentry" },
      ],
      back: [{ label: "React Query" }, { label: "React Router" }],
    },
    medias: [
      {
        src: GarcegamesDesktop1,
        order: 1,
      },
      {
        src: GarcegamesDesktop2,
        order: 2,
      },
      {
        src: GarcegamesMobile,
        order: 3,
      },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/darthrichlius/garcegames",
        icon: "Github",
      },
      {
        label: "Website",
        href: "https://garcegames.vercel.app/",
        icon: "Website",
      },
    ],
    meta: {
      isFeatured: true,
    },
  },
  {
    title: "FromSchool",
    subtitle: "Desktop Progociel",
    shortDescription: `
      <b>FromSchool</b>, a tailor-made school administration solution developed for a school by a business partner, 
      now under my leadership, undergoes <b>migration from WinDev to ElectronJS</b> 
      to enhance reliability and secure its development lifecycle
    `,
    description: `
      <p></p>
    `,
    stack: {
      front: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "ElectronJS" },
      ],
    },
    medias: [
      {
        src: FromSchoolDesktop1,
        order: 1,
      },
      {
        src: FromSchoolDesktop2,
        order: 2,
      },
      {
        src: FromSchoolDesktop3,
        order: 3,
      },
    ],
    meta: {
      isFeatured: true,
    },
  },

  // ################################
  // ##### ##### PROJECTS ##### #####

  {
    title: "Esteban JS",
    subtitle: "Library",
    shortDescription: "An elegant nodejs assertions library",
    description: `
      <p>An elegant nodejs assertions library</p>
    `,
    stack: {
      front: [{ label: "Javascript" }, { label: "Node.JS" }],
    },
    links: [
      {
        label: "Github",
        href: "https://github.com/darthrichlius/estebanjs ",
        icon: "Github",
      },
    ],
    keywords: ["package", "library", "nodejs", "javascript", "jest", "eslint"],
  },

  // ################################
  // ##### ##### ARCHIVED ##### #####

  {
    title: "v1_resume.rdieud",
    subtitle: "Responsive Website",
    shortDescription:
      "The <b>first and retired version</b> of my resume and portfolio website",
    description: `
      <p>The <b>first and retired version</b> of my resume and portfolio website</p>
    `,
    stack: {
      front: [{ label: "Figma" }, { label: "Saas" }],
      back: [
        { label: "PHP" },
        { label: "Wordpress" },
        { label: "Hotjar" },
        { label: "Google Analytics" },
      ],
    },
    links: [
      {
        label: "Github",
        href: "https://github.com/darthrichlius/wp-theme-sand-portfolio",
        icon: "Github",
      },
    ],
    keywords: [
      "figma",
      "php",
      "wordpress",
      "wordpress-theme",
      "javascript",
      "sass",
      "googleanalytics",
      "hotjar",
    ],
    meta: {
      isArchived: true,
    },
  },
  {
    title: "trenqr.com",
    subtitle: "Responsive Website",
    shortDescription:
      "For friendly individuals looking to connect through common interests within a positive and welcoming platform",
    description: `
      <p>Social network for friendly individuals looking to connect through common interests within a positive and welcoming platform</p>
    `,
    stack: {
      front: [{ label: "Javascript" }, { label: "Saas" }],
      back: [
        { label: "PHP" },
        { label: "MySQL" },
        { label: "Google Analytics" },
      ],
    },
    links: [
      {
        label: "Github",
        href: "https://github.com/darthrichlius/trenqr.com",
        icon: "Github",
      },
    ],
    keywords: [
      "socialnetwork",
      "php",
      "propretaryframework",
      "javascript",
      "mysql",
      "googleanalytics",
    ],
    meta: {
      isArchived: true,
    },
  },
];

export default portfolioMap;
