"use client";
import { useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import {
  FaChevronRight as ShowMoreIcon,
  FaChevronLeft as ShowLessIcon,
} from "react-icons/fa";

import { Typography, Icon } from "@@src/components";
import AppConfig from "@@/config/app";

type TMessageInObject = {
  display: string;
  full: string;
};

export interface IWorkReference {
  message: string | TMessageInObject;
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
  const isMessageInObject = typeof reference.message !== "string";
  const [expand, toggleExpand] = useState(false);
  let message: string = "";
  if (expand) {
    message = isMessageInObject
      ? (reference.message as TMessageInObject).full
      : (reference.message as string);
  } else {
    message = isMessageInObject
      ? (reference.message as TMessageInObject).display
      : (reference.message as string);
  }

  return (
    <article className="bg-zinc-900 p-20 relative z-10 lg:max-w-2xl">
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
        <NextImage
          src={reference.author.avatar}
          className="rounded-full w-40"
          alt="Momo"
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
      <div className="app-typography mt-24 text-zinc-400">
        <span
          className=""
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        />
        {isMessageInObject && (
          <>
            {!expand && (
              <button
                onClick={() => toggleExpand((v) => !v)}
                className="inline-flex items-center gap-4 ml-8 text-zinc-200 font-bold hover:text-zinc-400"
              >
                <span>... read more</span>
                <ShowMoreIcon className="inline-block w-12 text-zinc-200" />
              </button>
            )}
            {expand && (
              <button
                onClick={() => toggleExpand((v) => !v)}
                className="inline-flex items-center gap-4 ml-8 text-zinc-200 font-bold hover:text-zinc-400"
              >
                <ShowLessIcon className="inline-block w-12 text-zinc-200" />
                <span>show less</span>
              </button>
            )}
          </>
        )}
      </div>
    </article>
  );
};

export default WorkReferenceCard;
