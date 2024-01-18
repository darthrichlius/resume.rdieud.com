import { Avatar } from "@radix-ui/themes";
import NextLink from "next/link";
import { FaLinkedin as ContactLinkedinLogo } from "react-icons/fa";

import { Typography } from "@@src/components";

export interface IWorkReference {
  message: string;
  issuedAt: string;
  author: {
    fullname: string;
    introduction: string;
    relationship?: string;
    avatar?: any;
    linkedIn: string;
  };
}

const WorkReferenceCard = ({ reference }: { reference: IWorkReference }) => {
  return (
    <article className="bg-zinc-900 p-16 relative z-10 lg:max-w-md">
      <NextLink
        href="/"
        className="absolute w-20 h-20 top-16 right-16 hover:text-wine-200"
      >
        <ContactLinkedinLogo />
      </NextLink>
      <header className="flex items-center gap-24">
        <Avatar
          size="3"
          src={reference.author.avatar}
          radius="full"
          fallback="?"
        />
        <div>
          <Typography className="font-bold">
            {reference.author.fullname}
          </Typography>
          <Typography className="mt-1">
            {reference.author.introduction}
          </Typography>
          <Typography className="text-sm text-zinc-400">
            <span>{reference.issuedAt} - </span>
            <span>{reference.author.relationship}</span>
          </Typography>
        </div>
      </header>
      <Typography className="mt-24 text-zinc-400">
        {reference.message}
      </Typography>
    </article>
  );
};

export default WorkReferenceCard;
