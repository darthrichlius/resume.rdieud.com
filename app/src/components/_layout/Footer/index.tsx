import { Container, Text } from "@radix-ui/themes";

const LayoutFooter = () => {
  return (
    <Container className="h-256">
      <Text as="p" className="font-display text-9xl" align={"center"}>
        Footer
      </Text>
      {/* Maybe add a picture */}
      <p>Design & Dev by (ME) in France</p>
    </Container>
  );
};

export default LayoutFooter;
