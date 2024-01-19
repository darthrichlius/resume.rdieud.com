import { IProject } from "@/app/Home/sections/Portfolio";


const portfolioMap: IProject[] = [
  {
    title: "Richard Dieud's Personal Website",
    subtitle: "Identity Management Responsive Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione quidem quibusdam porro ab obcaecati sint quam. Dolorem vitae quas, soluta magni quaerat aut, nostrum amet, reprehenderit rerum quam nesciunt?",
    stack: {
      design: [{ label: "Figma" }],
      front: [
        { label: "TypeScript" },
        { label: "React" },

        { label: "Radix UI" },
        { label: "Tailwind" },
      ],
      back: [{ label: "Next.js" }],
    },
    links: [
      { label: "Figma", href: "/", icon: "Figma" },
      { label: "Github", href: "/", icon: "Github" },
      { label: "Website", href: "/", icon: "Website" },
    ],
  },
  {
    title: "IamServiceDesk",
    subtitle: "Service Desk Responsive Web Application",
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
];

export default portfolioMap;