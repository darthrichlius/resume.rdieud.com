import NextLink from "next/link";
import NextImage from "next/image";
import { Flex, Text } from "@radix-ui/themes";

import NavBar from "../NavBar";

import ProfilePic from "@@/assets/images/avatar.jpeg";
import { Typography } from "../..";
import AppConfig from "@/app/config/app";

const LayoutHeader = () => {
  return (
    <div className="app-container">
      <Flex justify="between" align={"center"}>
        <NextLink
          className="flex items-center gap-8 font-bold text-lg md:text-2xl"
          href={"/"}
        >
          <NextImage
            className="border-2 border-zinc-500 p-2 rounded-full w-40 h-40"
            src={ProfilePic}
            alt="Richard Dieud Profile Picture"
          />
          <Typography className="text-sm text-zinc-400">
            {AppConfig.version}
          </Typography>
        </NextLink>
        <NavBar />
      </Flex>
    </div>
  );
};

export default LayoutHeader;
