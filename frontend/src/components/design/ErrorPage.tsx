import { Button, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import errorGif from "../../assets/arpitBala.gif";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <SimpleGrid
      display={"flex"}
      justifyItems={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <VStack gap={5}>
        <Heading size={{ sm: "sm", md: "md", lg: "lg" }}>
          The page you requested does not exist.
        </Heading>
        <Image
          src={errorGif}
          alt="404 error"
          width={"600px"}
          borderRadius={30}
        />
        <Button colorScheme="teal" onClick={() => navigate("/")}>
          Go to the Home Page
        </Button>
      </VStack>
    </SimpleGrid>
  );
};

export default ErrorPage;
