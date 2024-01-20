import NextLink from "next/link";

import { Typography, Icon } from "@@src/components";
import HomeSectionLayout from "../SectionLayout";
import { TRegisteredIcon } from "@@src/components/_layout/Icon";
import portfolioMap from "@/data/map/portfolioMap";

interface IStack {
  label: string;
  icon?: TRegisteredIcon;
}

interface IProjectLink {
  label: string;
  href: string;
  icon?: TRegisteredIcon;
}

export interface IProject {
  title: string;
  subtitle?: string;
  shortDescription: string;
  description: string;
  stack: {
    design?: IStack[];
    front?: IStack[];
    back?: IStack[];
  };
  links?: IProjectLink[];
}

const HomePortfolioSection = () => {
  return (
    <HomeSectionLayout id="portfolio">
      <header>
        <h2>Portfolio</h2>
      </header>
      <div className="app-container flex justify-center">
        <div className="flex flex-col gap-96">
          {portfolioMap.map((project) => (
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
            <div
              className="text-zinc-400 text-base"
              dangerouslySetInnerHTML={{
                __html: project.shortDescription,
              }}
            />
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
                  target="blank"
                  className="flex gap-4 text-zinc-400 hover:text-wine-200"
                >
                  {link.icon && <Icon index={link.icon} />}
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
