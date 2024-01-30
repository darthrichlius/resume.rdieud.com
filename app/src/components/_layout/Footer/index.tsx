import NextImage from "next/image";
import { Typography } from "@@src/components";
import ProfilePic from "@@/assets/images/avatar.jpeg";

const LayoutFooter = () => {
  return (
    <div className="flex justify-center mt-96 pb-72 border-b-[24px] border-b-wine-200">
      <div className="app-container flex flex-col items-center">
        <Typography className="font-display text-9xl text-center">
          Footer.
        </Typography>
        {/* Maybe add a picture */}
        <Typography className="mt-32 text-zinc-400 text-sm">
          Designed & Deved by{" "}
          <NextImage
            className="inline-block border-2 border-zinc-500 rounded-full mx-4 w-32 h-32 p-2"
            src={ProfilePic}
            alt="Richard Dieud Profile Picture"
            title="Richard Dieud"
          />{" "}
          in France
        </Typography>
        <Typography className="mt-16 text-zinc-600 text-sm">
          All rights reserved © <b>Richard Dieud</b> 2024
        </Typography>
      </div>
    </div>
  );
};

export default LayoutFooter;
