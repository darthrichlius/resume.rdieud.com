import NextLink from "next/link";
import { Container, Flex, Text } from "@radix-ui/themes";
import NavBar from "../NavBar";

const LayoutHeader = () => {
  return (
    <Container className="NavBar h-96">
      <Flex justify="between" align={"center"}>
        <NextLink className="text-2xl font-bold" href={"/"}>
          RD{" "}
          <Text className="text-sm text-zinc-400" ml={"1"}>
            v0.1.0
          </Text>
        </NextLink>
        <NavBar />
      </Flex>
    </Container>
  );
};

export default LayoutHeader;
