import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import sampleresume from "../assets/sampleResumes.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box height={"950px"} marginTop={8}>
      <SimpleGrid columns={{ sm: 1, md: 2 }}>
        <VStack
          gap={3}
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

        <Image src={sampleresume} alt="two sample resumes" />
      </SimpleGrid>
      <Text align={"center"} color="gray" fontSize={11}>
        Made by Sargun Singh Bhatti
      </Text>
      <Text align={"center"} color="gray" fontSize={11}>
        Inspired by Resumake.io
      </Text>
    </Box>
  );
};

export default Home;
