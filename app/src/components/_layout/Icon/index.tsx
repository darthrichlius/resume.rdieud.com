import React from "react";
import {
  FaLinkedin as LinkedinLogo,
  FaGithub as GithubLogo,
  FaFileDownload as DownloadLogo,
  FaReact as ReactLogo,
  FaNodeJs as NodeJsLogo,
  FaSymfony as SymfonyLogo,
  FaGlobe as WebsiteLogo,
} from "react-icons/fa";
import { MdEmail as EmailLogo } from "react-icons/md";
import { BiLogoTypescript as TypeScriptLogo } from "react-icons/bi";
import { IoLogoFigma as FigmaLogo } from "react-icons/io5";
import { TbBrandNextjs as NextJsLogo } from "react-icons/tb";

interface Props {
  index: TRegisteredIcon;
  className?: string;
}

type TRegisteredStackIcon =
  | "Figma"
  | "NextJs"
  | "NodeJs"
  | "Symfony"
  | "React"
  | "TypeScript";

export type TRegisteredIcon =
  | TRegisteredStackIcon
  | "Linkedin"
  | "Email"
  | "Download"
  | "Website"
  | "Github";

const DataMap: Record<TRegisteredIcon, any> = {
  // STACK & TOOLS
  Figma: FigmaLogo,
  NextJs: NextJsLogo,
  NodeJs: NodeJsLogo,
  Symfony: SymfonyLogo,
  React: ReactLogo,
  TypeScript: TypeScriptLogo,
  // OTHERS
  Linkedin: LinkedinLogo,
  Email: EmailLogo,
  Download: DownloadLogo,
  Website: WebsiteLogo,
  Github: GithubLogo,
};

const Icon = ({ index, className }: Props) => {
  const Icon: any = DataMap[index];

  return <Icon className={className} />;
};

export default Icon;