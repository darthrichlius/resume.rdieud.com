import NextLink from "next/link";
import NextImage from "next/image";

import HomeSectionLayout from "../SectionLayout";
import { Typography, Icon } from "@@src/components";
import { TRegisteredIcon } from "@@src/components/_layout/Icon";
import portfolioMap from "@/data/map/portfolioMap";

import portfolioPlaceholder from "@@/assets/images/portfolio/placeholder.png";

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
  keywords?: string[];
  links?: IProjectLink[];
  meta?: {
    isFeatured?: boolean;
    isArchived?: boolean;
  };
}

const HomePortfolioSection = () => {
  const featured = portfolioMap.filter((item) => item.meta?.isFeatured);
  const archived = portfolioMap.filter((item) => item.meta?.isArchived);
  const listed = portfolioMap.filter(
    (item) => !item.meta || (!item.meta?.isFeatured && !item.meta?.isArchived)
  );

  return (
    <HomeSectionLayout id="portfolio">
      <header>
        <h2>Portfolio</h2>
      </header>
      <div className="app-container flex justify-center">
        <div className="flex flex-col gap-y-128 md:gap-y-144">
          <div className="flex flex-col gap-72">
            <h3 className="section-title-h3">Featured</h3>
            <Typography className="text-zinc-400 text-lg md:text-2xl leading-8 md:leading-10">
              Driven by a strong belief in continuous skill improvement through
              hands-on projects and fueled by genuine passion, I find joy in
              brainstorming new ideas for applications, whether for personal
              projects, contributing to the open-source community, or advocating
              for my values and interests.
            </Typography>
            {featured.map((project) => (
              <FeaturedProjectCard
                key={"featured-" + project.title}
                project={project}
              />
            ))}
          </div>
          <div className="flex flex-col gap-72">
            <h3 className="section-title-h3">Archived & More</h3>
            <div>
              {listed.map((project, i) => (
                <>
                  <ListedProjectCard
                    key={"listed-" + project.title}
                    project={project}
                  />
                  {i < archived.length - 1 && (
                    <div className="my-36 h-1 w-full bg-zinc-600" />
                  )}
                </>
              ))}
              {archived.map((project, i) => (
                <>
                  <ListedProjectCard
                    key={"archived-" + project.title}
                    project={project}
                  />
                  {i < archived.length - 1 && (
                    <div className="my-36 h-1 w-full bg-zinc-600" />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeSectionLayout>
  );
};

const FeaturedProjectCard = ({ project }: { project: IProject }) => {
  return (
    <article className="md:flex md:flex-row-reverse items-start md:gap-32">
      <section className="w-full ">
        <header>
          <h3 className="text-wine-200 text-3xl md:text-2xl lg:text-3xl font-bold">
            {project.title}
          </h3>
          {project.subtitle && (
            <Typography className="border-l-2 border-white mt-8 pl-8 text-white text-sm font-bold">
              {project.subtitle}
            </Typography>
          )}
        </header>
        <div className="flex flex-col gap-32 mt-32">
          {project.shortDescription && (
            <Typography className="text-zinc-400 text-base md:text-lg leading-7 md:leading-8">
              <span
                dangerouslySetInnerHTML={{
                  __html: project.shortDescription,
                }}
              />
            </Typography>
          )}
          {project.stack && Object.values(project.stack).length && (
            <div className="flex flex-col gap-12">
              {Object.values(project.stack).map((gpStack, ci) => (
                <ul
                  key={ci}
                  className="flex flex-wrap gap-16 md:gap-16 text-zinc-200 text-lg"
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
            <footer className="flex justify-end gap-32 py-8 px-20 rounded bg-zinc-900">
              {project.links.map((link) => (
                <NextLink
                  key={link.label}
                  href={link.href}
                  target="blank"
                  className="flex items-start gap-4 text-zinc-400 hover:text-wine-200"
                >
                  {link.icon && <Icon className="w-16" index={link.icon} />}
                  <span className=" hover:border-b-wine-200 ml-4">
                    {link.label}
                  </span>
                </NextLink>
              ))}
            </footer>
          )}
        </div>
      </section>
      <aside className="mt-36 w-full md:shrink-0 md:mt-1 md:w-[50%] max-h-max lg:max-h-[345px] xl:w-1/2">
        <NextImage src={portfolioPlaceholder} alt="Image" />
      </aside>
    </article>
  );
};

const ListedProjectCard = ({ project }: { project: IProject }) => {
  return (
    <article>
      <header className="flex justify-between sm:justify-normal items-start md:items-center">
        <Typography className="text-xl md:text-2xl lg:text-3xl font-bold leading-none md:leading-7">
          {project.meta?.isArchived && <span title="Retired project">⚰️</span>}{" "}
          {project.title}
        </Typography>
        {project.links && (
          <div className="flex gap-16 sm:ml-24">
            {project.links?.map((link) => (
              <NextLink
                key={`project-link-${link.label}-${project.title}`}
                href={link.href}
                target="blank"
                className="w-[18px] md:w-24 text-zinc-400 hover:text-wine-200"
              >
                <Icon index={link.icon!} className="w-full" />
              </NextLink>
            ))}
          </div>
        )}
      </header>
      <div>
        <Typography className="my-12 md:text-base text-zinc-400">
          <span
            dangerouslySetInnerHTML={{
              __html: project.shortDescription,
            }}
          />
        </Typography>
        {project.keywords && (
          <div className="flex gap-8 flex-wrap">
            {project.keywords.map((kw) => (
              <Typography
                key={`project-keyword-${kw}`}
                className="text-wine-200 font-bold"
              >
                #{kw}
              </Typography>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default HomePortfolioSection;
