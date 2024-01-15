import NextLink from "next/link";
import { Container, Flex, Text } from "@radix-ui/themes";
import NavBar from "../NavBar";

const LayoutHeader = () => {
  return (
    <div className="app-container">
      <Flex justify="between" align={"center"}>
        <NextLink className="font-bold text-lg md:text-2xl" href={"/"}>
          <Text className="">RD</Text>
          <Text className="text-sm text-zinc-400" ml={"2"}>
            Beta v0.1.0
          </Text>
        </NextLink>
        <NavBar />
      </Flex>
    </div>
  );
};

export default LayoutHeader;
