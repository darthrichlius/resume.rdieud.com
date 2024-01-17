import NextLink from "next/link";

import { IoLogoFigma as FigmaLogo } from "react-icons/io5";
import { FaGithub as GithubLogo, FaGlobe as WebsiteLogo } from "react-icons/fa";

import { Typography } from "@@src/components";
import HomeSectionLayout from "../layout";

interface IStack {
  label: string;
  icon?: any;
}

interface IProjectLink {
  label: string;
  href: string;
  icon?: any;
}

interface IProject {
  title: string;
  subtitle?: string;
  description: string;
  stack: {
    design?: IStack[];
    front?: IStack[];
    back?: IStack[];
  };
  links?: IProjectLink[];
}

const projectsMap: IProject[] = [
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
      { label: "Figma", href: "/", icon: <FigmaLogo /> },
      { label: "Github", href: "/", icon: <GithubLogo /> },
      { label: "Website", href: "/", icon: <WebsiteLogo /> },
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
      { label: "Figma", href: "/", icon: <FigmaLogo /> },
      { label: "Github", href: "/", icon: <GithubLogo /> },
      { label: "Website", href: "/", icon: <WebsiteLogo /> },
    ],
  },
];

const HomePortfolioSection = () => {
  return (
    <HomeSectionLayout id="portfolio">
      <header>
        <h2>Portfolio</h2>
      </header>
      <div className="app-container flex justify-center">
        <div className="flex flex-col gap-96">
          {projectsMap.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </HomeSectionLayout>
  );
};

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <article className="md:flex md:flex-row-reverse md:gap-32">
      <section className="w-full ">
        <header>
          <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold">
            {project.title}
          </h3>
          {project.subtitle && (
            <Typography className="mt-8 text-wine-200 text-sm font-bold">
              {project.subtitle}
            </Typography>
          )}
        </header>
        <div className="flex flex-col gap-32 mt-32">
          {project.description && (
            <Typography className="text-zinc-400 text-base">
              {project.description}
            </Typography>
          )}
          {project.stack && Object.values(project.stack).length && (
            <div className="flex flex-col gap-12">
              {Object.values(project.stack).map((gpStack, ci) => (
                <ul
                  key={ci}
                  className="flex flex-wrap gap-20 text-zinc-200 text-lg"
                >
                  {gpStack.map((stack) => (
                    <li key={stack.label} className="shrink-0">
                      {stack.label}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}
          {project.links && (
            <footer className="flex justify-end gap-32 bg-zinc-900 py-8 px-20">
              {project.links.map((link) => (
                <NextLink
                  key={link.label}
                  href={link.href}
                  className="flex gap-4 text-zinc-400 hover:text-wine-200"
                >
                  {link.icon && link.icon}
                  <span className="border-b border-b-zinc-600 hover:border-b-wine-200 ml-2">
                    {link.label}
                  </span>
                </NextLink>
              ))}
            </footer>
          )}
        </div>
      </section>
      <aside className="mt-64 w-full bg-zinc-900 md:shrink-0 md:mt-1 md:w-[50%] lg:w-[60%] xl:w-1/2">
        PUT IMAGE HERE
      </aside>
    </article>
  );
};

export default HomePortfolioSection;
