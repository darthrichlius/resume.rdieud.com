import { IProject } from "@@/Home/sections/Portfolio";

const portfolioMap: IProject[] = [
  {
    title: "Richard Dieud's Personal Website",
    subtitle: "Responsive Website",
    description:
      "Identity Management website built for Richard Dieud, though, designed and built, to improve the quality of the information related to his professional profile",
    stack: {
      design: [{ label: "Figma" }],
      front: [
        { label: "TypeScript" },
        { label: "React" },

        { label: "Radix UI" },
        { label: "Tailwind" },
      ],
      back: [{ label: "Next.Js" }],
    },
    links: [
      { label: "Github", href: "/", icon: "Github" },
      { label: "Website", href: "resume.rdieud.com", icon: "Website" },
    ],
  },
  {
    title: "IamServiceDesk",
    subtitle: "Responsive Web Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione quidem quibusdam porro ab obcaecati sint quam. Dolorem vitae quas, soluta magni quaerat aut, nostrum amet, reprehenderit rerum quam nesciunt?",
    stack: {
      front: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "Radix UI" },
        { label: "Tailwind" },
        { label: "React Hook Form" },
        { label: "Zod" },
      ],
      back: [
        { label: "Next.js" },
        { label: "Prisma" },
        { label: "MySQL" },
        { label: "Sentry" },
        { label: "Zustand" },
      ],
    },
    links: [
      { label: "Figma", href: "/", icon: "Figma" },
      { label: "Github", href: "/", icon: "Github" },
      { label: "Website", href: "/", icon: "Website" },
    ],
  },
  {
    title: "GarceGames",
    subtitle: "Responsive Web Application",
    description:
      "GarceGames is a project which goal is to provide an enjoyable, useful browsing platform for video games fans. The platform could utilimately be provided as a white-label project for any company or organization in the realm of video games",
    stack: {
      front: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "ViteJs" },
        { label: "Radix UI" },
        { label: "Tailwind" },
        { label: "Zod" },
      ],
      back: [{ label: "Prisma" }, { label: "Sentry" }, { label: "Zustand" }],
    },
    links: [
      { label: "Github", href: "/", icon: "Github" },
      { label: "Website", href: "/", icon: "Website" },
    ],
  },
];

export default portfolioMap;
