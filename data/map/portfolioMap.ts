import { IProject } from "@/app/src/components/Home/sections/Portfolio";

/**
 * A lazy way to keep the data while not displaying it .....
 * This is a very cheaper way than trying to create a more configurable approach
 */
const archived = {
  title: "Richard Dieud's Personal Website",
  subtitle: "Responsive Website",
  shortDescription:
    "A professional profile identity website designed for Richard Dieud to offer a comprehensive representation of his work experience and achievements",
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
    back: [{ label: "Next.Js" }],
  },
  links: [
    {
      label: "Github",
      href: "https://github.com/darthrichlius/com.rdieud.resume ",
      icon: "Github",
    },
  ],
};

const portfolioMap: IProject[] = [
  {
    title: "IamServiceDesk (ISD)",
    subtitle: "Responsive Web Application",
    shortDescription:
      "An affordable, reliable, and intuitive service desk application designed for individuals and SMEs aiming to reduce costs",
    description: `
    <p>An affordable, reliable, and intuitive service desk application designed for individuals and SMEs aiming to reduce costs.</p>
    <p>The project focuses on gaining experience in building a solution used by product and support department teams to visualize insights, manage actions, and enhance productivity. The outcome will serve as a foundation for a business application tailored to African businesses, considering their unique constraints.</p>
    <p>The software's key feature is to offer a comprehensive catalog of features for team collaboration, support management, and project management, with a primary emphasis on delivering a high-quality seamless user experience as a key differentiator.</p>
    `,
    stack: {
      front: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "Axios" },
        { label: "Tailwind" },
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
        label: "Github",
        href: "https://github.com/darthrichlius/IamServiceDesk",
        icon: "Github",
      },
      {
        label: "Website",
        href: "https://iamservicedesk.vercel.app/",
        icon: "Website",
      },
    ],
  },
  {
    title: "Garce Games",
    subtitle: "Responsive Web Application",
    shortDescription:
      "An informative video game browsing platform for video game enthusiasts that offers an enjoyable experience and useful information to help them fully enjoy their service subscriptions",
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
  },
];

export default portfolioMap;
