import { Avatar } from "@radix-ui/themes";
import NextLink from "next/link";

import { Typography, Icon } from "@@src/components";
import AppConfig from "@/app/config/app";

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
        href={`${AppConfig.owner.contact.linkedin}/details/recommendations/`.replaceAll(
          "//",
          "/"
        )}
        target="_blank"
        className="absolute w-20 h-20 top-16 right-16 hover:text-wine-200"
      >
        <Icon index="Linkedin" />
      </NextLink>
      <header className="flex items-start gap-24">
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
      <div
        className="app-typography mt-24 text-zinc-400"
        dangerouslySetInnerHTML={{
          __html: reference.message,
        }}
      />
    </article>
  );
};

export default WorkReferenceCard;
