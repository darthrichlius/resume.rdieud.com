import { Avatar } from "@radix-ui/themes";
import NextLink from "next/link";
import { FaLinkedin as ContactLinkedinLogo } from "react-icons/fa";

import { Typography } from "@@src/components";

const JobReferenceCard = () => {
  return (
    <article className="bg-zinc-900 p-16 relative lg:max-w-md">
      <NextLink
        href="/"
        className="absolute w-20 h-20 top-16 right-16 hover:text-wine-200"
      >
        <ContactLinkedinLogo />
      </NextLink>
      <header className="flex items-center gap-24">
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="full"
          fallback="?"
        />
        <div>
          <Typography className="font-bold">Jamel. M</Typography>
          <Typography className="mt-1">
            Senior Product Owner | Manager | Freelance
          </Typography>
          <Typography className="text-sm text-zinc-400">
            <span>July 1, 2022 - </span>
            <span>Worked with Richard on the same team</span>
          </Typography>
        </div>
      </header>
      <Typography className="mt-24 text-zinc-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod commodi
        alias minus nisi, at eveniet harum aspernatur accusantium quasi
        voluptatum, dicta incidunt nesciunt natus perferendis ipsa rem labore
        quaerat. Sint.
      </Typography>
    </article>
  );
};

export default JobReferenceCard;
