import {
  Button,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import sampleresume from "../../public/sample-resume.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }}>
      <VStack
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <HStack>
          <Heading>Resume </Heading>
          <Heading color="teal.300">Generator</Heading>
        </HStack>
        <Button colorScheme="teal" variant={"solid"} borderRadius={15}>
          <Link to="/resume/create">Create New</Link>
        </Button>
        <Button colorScheme="teal" variant={"outline"} borderRadius={15}>
          <Link to="/resume/edit">Use Existing Resume</Link>
        </Button>
      </VStack>

      <Image src={sampleresume} alt="sample resume" />
    </SimpleGrid>
  );
};

export default Home;
