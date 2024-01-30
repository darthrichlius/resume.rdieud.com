import { IProject } from "@/app/src/components/Home/sections/Portfolio";

const portfolioMap: IProject[] = [
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
      design: [{ label: "Figma" }],
      front: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "Tailwind" },
        { label: "Radix UI" },
      ],
      back: [
        { label: "Next.Js" },
        { label: "Sentry" },
        { label: "Hotjar" },
        { label: "Google Analytics" },
      ],
    },
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
        { label: "TypeScript" },
        { label: "React" },
        { label: "Axios" },
        { label: "Tailwind" },
        { label: "Radix UI" },
        { label: "React Hook Form" },
        { label: "React Query" },
      ],
      back: [
        { label: "Next.Js" },
        { label: "Prisma" },
        { label: "Zod" },
        { label: "MySQL" },
        { label: "Sentry" },
        { label: "Zustand" },
      ],
    },
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
      front: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "ViteJs" },
        { label: "Chakra UI" },
        { label: "Tailwind" },
        { label: "Zustand" },
        { label: "Sentry" },
      ],
    },
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
    meta: {
      isFeatured: true,
    },
  },

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
    keywords: ["nodejs", "javascript", "jest", "eslint"],
  },
  {
    title: "resume.rdieud - vr1",
    subtitle: "Responsive Website",
    shortDescription:
      "The <b>first and retired version</b> of my resume and portfolio website.",
    description: `
      <p>The <b>first and retired version</b> of my resume and portfolio website.</p>
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
        href: "https://github.com/darthrichlius/v1.resume.rdieud.com",
        icon: "Github",
      },
      {
        label: "Website",
        href: "local.com",
        icon: "Website",
      },
    ],
    keywords: ["archived", "php", "wordpress", "javascript", "figma"],
    meta: {
      isArchived: true,
    },
  },
  {
    title: "trenqr.com",
    subtitle: "Responsive Website",
    shortDescription: "Social media",
    description: `
      <p>Social media</p>
    `,
    stack: {
      front: [{ label: "Javascript" }, { label: "Saas" }],
      back: [
        { label: "PHP" },
        { label: "MySQL" },
        { label: "Google Analytics" },
      ],
    },
    keywords: ["archived", "socialnetwork", "php", "javascript", "mysql"],
    meta: {
      isArchived: true,
    },
  },
];

export default portfolioMap;
