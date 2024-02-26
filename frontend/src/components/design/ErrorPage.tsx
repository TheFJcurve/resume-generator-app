import { Flex, HStack, Heading, Image } from "@chakra-ui/react";
import errorGif from "../../assets/arpitBala.gif";

const ErrorPage = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      minHeight={"100vh"}
      gap={10}
    >
      <HStack>
        <Heading>The page you</Heading>
        <Heading color={"teal.300"}> requested </Heading>
        <Heading>was not found</Heading>
      </HStack>
      <Image src={errorGif} alt="404 error" width={"600px"} borderRadius={10} />
    </Flex>
  );
};

export default ErrorPage;
